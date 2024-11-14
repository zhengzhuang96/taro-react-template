/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-13 18:16:01
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-14 08:39:56
 * @Description:
 */
import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index bg-red-600'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
