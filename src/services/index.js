/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-30 14:20:47
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 15:49:49
 * @Description: In User Settings Edit
 */
import request from "../utils/request";

/**
 * @description: 获取首页数据
 */
export const servicesGetHome = () => request.get("/api/home");

/**
 * @description: 微信登录
 */
export const servicesAuthWx = (opts) => request.post("/api/biz/auth/wx", opts);

/**
 * @description: 绑定手机号
 */
export const servicesAuthWxPhone = (opts) =>
  request.post("/api/biz/auth/wx/phone", opts);
