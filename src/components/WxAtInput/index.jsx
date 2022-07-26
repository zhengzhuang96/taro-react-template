/*
 * @Author: {zhengzhuang}
 * @Date: 2022-06-21 17:25:35
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-06-22 09:32:15
 * @Description: In User Settings Edit
 */
import React, { Input, View } from "@tarojs/components";
import "./index.less";

const WxAtInput = props => {

  const { value } = props

  return (
    <View className='WxAtInput_box'>
      <View className='input_box_btn input_decrease'>-</View>
      <Input type='number' className='input_box' value={value} />
      <View className='input_box_btn input_add'>+</View>
    </View>
  )
}

export default WxAtInput;