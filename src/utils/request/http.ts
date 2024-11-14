/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-13 15:58:10
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-14 08:08:36
 * @Description:
 */
import { addInterceptor, getStorageSync, request } from '@tarojs/taro';
import type { HttpParams } from './HttpParams';
import { failHandle, httpErrorMsg, toLogin } from './http-util';

/**
 * @author zhengzhuang
 * @description 核心通用http请求配置和拦截器
 * token授权、调试日志、输入输出数据处理、错误异常处理等
 * 基于Taro做跨端网络请求实现: https://taro-docs.jd.com/docs/apis/network/request/
 */
export class Http {
  // 调式日志标签
  timeLabel = '接口响应总耗时统计';
  // API服务基础地址
  baseURL = '';
  // 是否开启调试 是打印日志等
  isDebug = true;
  // headers参数
  headers = {};

  /**
   * 初始化 请求和响应拦截器
   */
  init(httpParams: HttpParams) {
    // console.log('Http初始化: ' + httpParams.baseURL);
    // 初始化全局动态参数
    this.baseURL = httpParams.baseURL ?? '';
    this.isDebug = httpParams.isDebug ?? false;
    this.headers = httpParams.headers;
    // 添加HTTP请求拦截器
    addInterceptor(this.interceptor);
    return this;
  }

  /**
   * 基础请求
   */
  baseRequest(params: { path: any; data: any; headers: any }, method = 'GET') {
    let { path, data, headers } = params;
    // 给所有请求添加自定义header 登录获取token 未登录情况默认用基础token鉴权验证 token值不可泄露
    const userTokenKey = 'token';
    const refreshTokenKey = 'refresh-token';
    let token: any;
    let refreshToken: any;
    if (!!getStorageSync(userTokenKey)) {
      token = getStorageSync(userTokenKey);
    }

    if (!!getStorageSync(refreshTokenKey)) {
      refreshToken = getStorageSync(refreshTokenKey);
    }

    // 基础配置
    const option: any = {
      method: method, // 请求方式
      url: this.baseURL + path, // 配置请求基础地址
      data, // 传参数据
      timeout: 60000, // 配置请求超时时间
      header: {
        // 定义公共headers请求头
        ...this.headers, // 全局header
        'content-type': 'application/json;charset=UTF-8',
        'app-token': `${token}` || '', // token授权
        'app-refresh-token': `${refreshToken}` || '', // refreshToken授权
        ...headers, // 具体请求header
      },
    };
    return request(option);
  }

  /**
   * 处理拦截器
   */
  interceptor = async (chain: { requestParams: any; proceed: (arg0: any) => Promise<any> }) => {
    const requestParams = chain.requestParams;
    const { method, data, url } = requestParams;

    // 请求处理拦截器
    if (method !== 'GET') {
      // 加载动画
    }
    if (JSON.parse(String(this.isDebug))) {
      // 打印出请求体
      console.time(url + this.timeLabel);
      if (!!data) {
        console.log(`%c ${url} 接口请求参数`, 'color:#1890FF;;font-weight:bold;');
        console.log(data);
      }
    }

    // 响应处理拦截器
    const res = await chain.proceed(requestParams);
    if (JSON.parse(String(this.isDebug))) {
      console.log(`%c ${url} 接口响应数据`, 'color:#16C23A;font-weight:bold;');
      // 打印出响应结果
      //console.table(res);
      console.log(res.data);
      console.timeEnd(url + this.timeLabel);
    }
    // 业务失败处理
    failHandle(data);
    // http响应状态码
    const status = res.statusCode;
    if (status !== 200) {
      let errorMsg = `请求发生了错误`; // 默认错误消息
      switch (status) {
        case 0:
          errorMsg = '无法连接服务器';
          break;
        case 1:
          errorMsg = '请求超时';
          break;
        case 400:
          errorMsg = '400请求无效';
          break;
        case 401:
          errorMsg = '401请求授权失败';
          // 重新登录
          toLogin();
          break;
        case 403:
          errorMsg = '403请求禁止访问';
          break;
        case 404:
          errorMsg = '404请求资源不存在';
          break;
        case 500:
          errorMsg = '500服务器发生错误';
          break;
      }

      console.log('res', res);
      // http错误处理
      httpErrorMsg(res.data?.success ?? true, errorMsg, res.data?.code, res.data?.msgCode, res.data?.message ?? '');
    }
    const code = res?.data?.code ?? -1;
    const msg = res?.data?.msg ?? '';
    const success = res?.data?.success ?? true;
    if (status === 200 && code !== 0) {
      httpErrorMsg(success, msg, code, res.data?.msgCode, res.data?.message ?? '');
    }
    return res?.data ?? {};
  };

  /**
   * GET网络请求
   */
  get(path: any, data = '', headers = {}) {
    let option = { path, data, headers };
    return this.baseRequest(option, 'GET');
  }

  /**
   * POST网络请求
   */
  post(path: any, data?: any, headers = {}) {
    let option = { path, data, headers };
    return this.baseRequest(option, 'POST');
  }

  /**
   * PUT网络请求
   */
  put(path: any, data = '', headers = {}) {
    let option = { path, data, headers };
    return this.baseRequest(option, 'PUT');
  }

  /**
   * DELETE网络请求
   */
  delete(path: any, data = '', headers = {}) {
    let option = { path, data, headers };
    return this.baseRequest(option, 'DELETE');
  }
}
