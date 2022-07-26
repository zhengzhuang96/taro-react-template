/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-26 16:42:28
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 15:41:17
 * @Description: In User Settings Edit
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
// import 'taro-ui/dist/style/index.scss' // 全部引入组件样式
import "taro-ui/dist/style/components/button.scss"; // 按需引入组件样式
import './app.less'

const store = configStore()

class App extends Component {
  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
