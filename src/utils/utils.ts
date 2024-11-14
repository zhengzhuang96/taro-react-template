/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-13 16:05:11
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-13 16:05:11
 * @Description:
 */
import {
  getStorageSync,
  setClipboardData,
  navigateTo,
  redirectTo,
  switchTab,
} from "@tarojs/taro";
import { showToast } from "./toast";


/**
 * @description: 判断登录状态
 */
export const isLogin = async () => {
  const token = await getStorageSync("token");
  return token ? true : false;
};

/**
 * @description: 深拷贝
 * @param {*} obj
 */
export const cloneDeep = (obj) => {
  let result = obj;
  if (typeof obj === "object" && obj !== null) {
    result =
      Object.prototype.toString.call(obj) === "[object Object]" ? {} : [];
    for (let prop in obj) {
      result[prop] = cloneDeep(obj[prop]);
    }
  }

  return result;
};

/**
 * @description: 复制文本
 * @param {*} data
 */
export const copyText = (data) => {
  setClipboardData({
    data,
    success: function () {
      showToast("复制成功");
    },
  });
};

/**
 * @description: 必须登录状态跳转，否则跳转登录页面
 * @param {*} url
 */
export const navigateJumpTo = async (url) => {
  const state = await isLogin();
  if (!state) {
    return redirectTo({
      url: "/pages/login/index",
    });
  }

  navigateTo({
    url,
  });
};

/**
 * @description: tabbar跳转，必须登录状态跳转，否则跳转登录页面
 * @param {*} url
 */
export const switchTabTo = async (url) => {
  const state = await isLogin();
  if (!state) {
    return redirectTo({
      url: "/pages/login/index",
    });
  }

  switchTab({
    url,
  });
};

/**
 * @description: date转换中文
 * @param {*} date
 */
export const dateToChinese = (date) => {
  if (!date) return "";
  const dateObj = new Date(date.replace(/-/g, "/"));
  // const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  // const hour = dateObj.getHours();
  // const minute = dateObj.getMinutes();
  // const second = dateObj.getSeconds();
  return `${month}月${day}日`;
};

/**
 * @description: 金额转千位分隔符
 * @param {*} num
 */
export const moneyToThousands = (num) => {
  if (!num) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
