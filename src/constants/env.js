/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-26 17:31:36
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-06 14:25:03
 * @Description: In User Settings Edit
 */

// 当前环境变量，development production
/* eslint-disable */
export const currentEnv = process.env.NODE_ENV;
/* eslint-disable */

// const env = currentEnv !== "production" ? `远度云${currentEnv}` : "远度云";

const env =
  currentEnv === "development"
    ? "development"
    : currentEnv === "testEnv"
    ? "testEnv"
    : "production";

// 不要删除，用来识别当前项目环境
console.log(
  `\n %c 远度云${env} %c http://www.yuanduyun.com \n`,
  "color: #fff; background: #008bf8; padding:5px 0; font-size:12px;font-weight: bold;",
  "background: #008bf8; padding:5px 0; font-size:12px;"
);

export const isDevEnv = currentEnv === "development";
export const isPreEnv = currentEnv === "production";

let baseUrlPrefix = "";
switch (env) {
  case "development":
    baseUrlPrefix = "https://test-zuhuoda-wx.yuanduyun.com";
    break;
  case "testEnv":
    baseUrlPrefix = "https://test-zuhuoda-wx.yuanduyun.com";
    break;
  case "production":
    baseUrlPrefix = "https://zuhuoda-wx.yuanduyun.com";
    break;
}
export const baseUrl = baseUrlPrefix;
