/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-26 16:42:28
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 15:48:03
 * @Description: In User Settings Edit
 */
// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: ["pages/index/index", "pages/user/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#86909C",
    selectedColor: "#3491FA",
    backgroundColor: "#ffffff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/images/home-icon.png",
        selectedIconPath: "assets/images/home-select-icon.png",
        text: "首页",
      },
      {
        pagePath: "pages/user/index",
        iconPath: "assets/images/user-icon.png",
        selectedIconPath: "assets/images/user-select-icon.png",
        text: "我的",
      },
    ],
  },
});
