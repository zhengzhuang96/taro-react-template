/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-26 16:44:42
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 15:43:51
 * @Description: In User Settings Edit
 */
import { cloneDeep } from "../../utils";

const initState = {};
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
  effects: (dispatch) => ({
    async fetchDemo(productId) {},
  }),
};
