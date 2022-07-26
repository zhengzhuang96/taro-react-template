/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-26 17:29:19
 * @LastEditors: shangtiepeng
 * @LastEditTime: 2022-07-08 17:56:48
 * @Description: In User Settings Edit
 */
import Taro, { removeStorageSync, request } from "@tarojs/taro";
import { baseUrl } from "../constants/env";

// 网络请求拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  const { header } = requestParams;
  let token = Taro.getStorageSync("token"); //拿到本地缓存中存的token
  requestParams.header = {
    ...requestParams.header,
    token: header?.token ?? token, //将token添加到头部
  };
  return chain.proceed(requestParams).then((res) => {
    return res;
  });
};

Taro.addInterceptor(interceptor);

const safeRequest = (url, options) => {
  Taro.showLoading();
  return new Promise((resolve, reject) => {
    request({
      method: "GET",
      ...options,
      data: {
        ...options,
      },
      header: {
        "Content-Type": "application/json",
        ...options?.header,
        token: options?.token,
      },
      url: baseUrl + url,
    }).then(
      (response) => {
        Taro.hideLoading();
        if (
          response.statusCode === 200 &&
          (response?.data?.code === 0 || response?.data?.code === 1)
        ) {
          return resolve(response?.data?.data);
        }

        if (response.statusCode === 200 && response?.data?.code === -2) {
          removeStorageSync("token");
          return Taro.redirectTo({
            url: "/pages/login/index",
          });
        }

        Taro.showToast({
          title: response?.data?.msg ?? "请求失败",
          icon: "none",
          duration: 2000,
        });
      },
      (err) => {
        Taro.hideLoading();
        reject(err);
      }
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = async (url, opts) => {
  return safeRequest(url, opts);
};

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = async (url, opts) => {
  return safeRequest(url, {
    ...opts,
    method: "POST",
  });
};

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = async (url, opts) => {
  return safeRequest(url, {
    ...opts,
    method: "PUT",
  });
};

export default {
  get,
  post,
  put,
};
