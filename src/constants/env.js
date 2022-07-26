/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-26 17:31:36
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-26 09:35:24
 * @Description: In User Settings Edit
 */
// 当前环境变量，development production
/* eslint-disable */
export const currentEnv = process.env.NODE_ENV;
/* eslint-disable */

const env =
  currentEnv === "development"
    ? "development"
    : currentEnv === "testEnv"
    ? "testEnv"
    : "production";

// 不要删除，用来识别当前项目环境
console.log(
  `\n %c 小郑${env} %c https://github.com/zhengzhuang96/ \n`,
  "color: #fff; background: #008bf8; padding:5px 0; font-size:12px;font-weight: bold;",
  "background: #008bf8; padding:5px 0; font-size:12px;"
);

export const isDevEnv = currentEnv === "development";
export const isPreEnv = currentEnv === "production";

let baseUrlPrefix = "";
switch (env) {
  case "development":
    baseUrlPrefix = "https://dev-*****.com";
    break;
  case "testEnv":
    baseUrlPrefix = "https://test-***.com";
    break;
  case "production":
    baseUrlPrefix = "https://***.com";
    break;
}
export const baseUrl = baseUrlPrefix;
