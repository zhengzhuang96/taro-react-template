/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-13 16:04:42
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-13 16:04:42
 * @Description:
 */
import Taro from "@tarojs/taro";

/**
 * @description: Toast
 * @param {*} title
 * @param {*} icon
 * @param {*} duration
 */
export const showToast = (title, icon: any = "none", duration = 2000) => {
  Taro.showToast({
    title,
    icon,
    duration,
  });
};
