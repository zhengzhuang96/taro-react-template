/*
 * @Author: {zhengzhuang}
 * @Date: 2022-10-31 11:26:20
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-10-31 14:07:50
 * @Description:
 */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    "pages/user/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#86909C',
    selectedColor: '#3491FA',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
      },
    ],
  },
  requiredPrivateInfos: ['getLocation'],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示', // 定位打卡获取当前位置信息
    },
  },

})
