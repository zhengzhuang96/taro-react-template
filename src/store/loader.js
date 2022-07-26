// 所有模块集合
const models = {};

// 添加model
const addModel = ({ filePath, nameSpace, model }) => {
  // 命名空间值必填
  if (!nameSpace) {
    console.error(`${filePath} 缺少 nameSpace`);
    return;
  }
  // 防止命名空间相同
  if (models[nameSpace]) {
    console.error(`${filePath} 的nameSpace与其它model重复`);
    return;
  }
  models[nameSpace] = model;
};

// 引入当前models文件下内的model
const currentFileModelFiles = require.context("./models", false, /\.js$/);
currentFileModelFiles.keys().forEach((filePath) => {
  // src/store/models下的model 使用文件名作为model的nameSpace 但其它地方 必须添加nameSpace
  const nameSpace = filePath.replace(/(\.\/|\.js)/g, "");
  const model = currentFileModelFiles(filePath).default;
  addModel({ filePath, nameSpace, model });
});

// 引入views内的model
const viewsModelFiles = require.context("../pages", true, /\.model\.js$/);
viewsModelFiles.keys().forEach((filePath) => {
  const model = viewsModelFiles(filePath).default;
  const { nameSpace } = model;
  addModel({ filePath, nameSpace, model });
});

export default models;
