/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-13 15:59:06
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-13 15:59:06
 * @Description:
 */
import { showToast, removeStorageSync, reLaunch } from '@tarojs/taro';

/**
 * @author zhengzhuang
 * @description http核心工具类
 * 用于扩展各种需求 根据动态参数 插拔式扩展
 */

/**
 *  Http错误处理
 */
export function httpErrorMsg(success: boolean, msg: string, code?: number, msgCode?: string, message?: string) {
  try {
    console.log('success', success);
    if (!success) {
      showToast({
        title: message ?? '',
        icon: 'none',
        duration: 2000,
      });
    }

    if (code === -2) {
      if (
        msgCode === 'EC_000000000006' ||
        msgCode === 'EC_000000000007' ||
        msgCode === 'EC_000000000008'
        // msgCode === 'EC_000000000160'
      ) {
        showToast({
          title: msg,
          icon: 'none',
          duration: 2000,
        });
      } else {
        // 令牌过期
        setTimeout(() => {
          toLogin();
        }, 500);
      }
    }
  } catch (e) {
    console.error('错误处理: Message全局提示失败');
  }
}

/**
 * 业务失败处理
 * @param data
 */
export function failHandle(data: any) {
  try {
    // Http状态码是200 非成功处理响应 消息提示
    if (data.code != 200 && data.msg) {
      // Message全局提示
      showToast({
        title: data.msg,
        icon: 'error',
        duration: 2000,
      });
    }
  } catch (e) { }
}

/**
 *  去登录
 */
export function toLogin() {
  // Taro.clearStorage()
  removeStorageSync('token');
  reLaunch({
    url: '/pages/login/index',
  });
  // window.location.reload()  // 可能导致无限循环
}
