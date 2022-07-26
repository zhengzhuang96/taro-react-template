/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-30 11:36:48
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 15:55:03
 * @Description: In User Settings Edit
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View } from "@tarojs/components";
import { AtButton } from 'taro-ui'
import './index.less'

const User = () => {

  const {
    user: { userName, },
  } = useSelector((state) => state);

  const {
    user: { updateState }
  } = useDispatch();

  return (
    <View className='user_box'>
      <Text>UserName: {userName}</Text>
      <AtButton type='primary' onClick={() => updateState({
        userName: 'yuanduyun'
      })}>更新store数据</AtButton>
    </View >
  );
};

export default User;