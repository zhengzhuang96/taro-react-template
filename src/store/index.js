/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-26 16:42:28
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-05-30 15:06:07
 * @Description: 数据状态管理
 */
import { init, RematchRootState } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import models from "./loader";

const loadingPlugin = createLoadingPlugin({ asNumber: true });
const store = init({
  plugins: [loadingPlugin],
  models,
});

const configureStore = () => {
  return store;
};

export default configureStore;
