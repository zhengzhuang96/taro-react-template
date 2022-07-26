/*
 * @Author: {zhengzhuang}
 * @Date: 2022-06-02 17:28:50
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 15:53:23
 * @Description: In User Settings Edit
 */
import { cloneDeep } from "../../utils";

const initState = {
  userName: "远度云", // 用户名
};
export default {
  state: initState,
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    resetState() {
      const state = cloneDeep(initState);
      return state;
    },
  },
  effects: () => ({
    // 获取用户信息
    async fetchGetUserInfo() {
      this.updateState({
        userName: "远度云",
      });
    },
  }),
};
