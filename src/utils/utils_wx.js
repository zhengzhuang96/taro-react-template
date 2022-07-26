/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-30 10:53:48
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-06-16 15:03:08
 * @Description: In User Settings Edit
 */
import Taro from "@tarojs/taro";

/**
 * @description: 小程序更新
 */
export const appUpdate = () => {
  const updateManager = Taro.getUpdateManager();
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    console.log(res.hasUpdate);
  });
  updateManager.onUpdateReady(function () {
    Taro.showModal({
      title: "更新提示",
      content: "新版本已经准备好，是否重启应用？",
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate();
        }
      },
    });
  });
  updateManager.onUpdateFailed(function () {
    // 新的版本下载失败
  });
};
