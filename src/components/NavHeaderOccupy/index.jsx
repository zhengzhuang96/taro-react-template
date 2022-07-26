/*
 * @Author: {zhengzhuang}
 * @Date: 2022-06-14 22:36:09
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-06-16 18:27:53
 * @Description: NavHeaderOccupy 导航栏占位
 */
import { useEffect, useState } from "react";
import { getSystemInfo, getMenuButtonBoundingClientRect, navigateBack } from "@tarojs/taro";
import { Text, View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import './index.less'

const NavHeaderOccupy = props => {

  const [safeAreaheight, setSafeAreaheight] = useState(0);


  useEffect(async () => {
    const { top, height } = await getMenuButtonBoundingClientRect();

    getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight;
        const navHeight = height + (top - statusBarHeight) * 2;
        setSafeAreaheight(res?.safeArea?.top + navHeight)
      },
    });
  }, [])

  return (
    <View className='nav_header_box' style={{
      height: safeAreaheight,
    }}></View>
  )
}

export default NavHeaderOccupy;