/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-30 14:20:47
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-13 17:32:21
 * @Description: In User Settings Edit
 */
import { request } from "@/utils";

/**
 * @description: 获取首页数据
 */
export const servicesGetHome = () => request.get("/api/home");

/**
 * @description: 微信登录
 */
export const servicesAuthWx = (opts: any) => request.post("/api/biz/auth/wx", opts);

/**
 * @description: 绑定手机号
 */
export const servicesAuthWxPhone = (opts: any) =>
  request.post("/api/biz/auth/wx/phone", opts);
