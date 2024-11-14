/*
 * @Author: {zhengzhuang}
 * @Date: 2022-05-30 11:36:48
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-21 11:32:59
 * @Description:
 */
import React from "react";
import { Button, Text, View } from "@tarojs/components";
import { useSnapshot } from "valtio";
import { store } from '../../models/index'
import "./index.less";

const User: React.FC = () => {

  const { user } = useSnapshot(store)

  return (
    <View className='user_box'>
      <Text>UserName: {user.name}</Text>
      <Button type='primary' onClick={() => store.setUser('123123')}>
        更新store数据
      </Button>
    </View>
  );
};

export default User;
