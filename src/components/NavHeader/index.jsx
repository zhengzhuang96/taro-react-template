/*
 * @Author: {zhengzhuang}
 * @Date: 2022-06-14 22:36:09
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-06-14 23:09:24
 * @Description: NavHeader 导航栏
 */
import { useEffect, useState } from "react";
import { getSystemInfo, getMenuButtonBoundingClientRect, navigateBack } from "@tarojs/taro";
import { Text, View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import './index.less'

const NavHeader = props => {

  const [safeArea, setSafeArea] = useState(0);

  const [menuButtonHeight, setMenuButtonHeight] = useState(0);

  useEffect(async () => {
    const { top, height } = await getMenuButtonBoundingClientRect();

    getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight;
        const navHeight = height + (top - statusBarHeight) * 2;
        setSafeArea(res?.safeArea?.top);
        setMenuButtonHeight(navHeight);
      },
    });
  }, [])

  return (
    <View className='nav_header_box' style={{
      height: menuButtonHeight,
      top: safeArea
    }}>
      <View className='go_back' onClick={() => navigateBack()} style={{
        height: menuButtonHeight
      }} >
        <AtIcon value='chevron-left' size='20' color='#fff'></AtIcon>
      </View>
      {/* <Text className='nav_header_box_text'>{props?.title}</Text> */}
    </View>
  )
}

export default NavHeader;