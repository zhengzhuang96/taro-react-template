/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-13 16:06:49
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-13 18:05:46
 * @Description:
 */
import type { HttpParams } from './HttpParams';
import { Http } from './http';

/**
 * 通用Http请求传入参数定义
 */
const httpParams: HttpParams = {
  baseURL: process.env.YDY_APP_API,
  isDebug: !!process.env.YDY_IS_DEBUG,
};

/**
 * 初始化Http请求服务
 */
const request = new Http().init(httpParams);

export default request;
