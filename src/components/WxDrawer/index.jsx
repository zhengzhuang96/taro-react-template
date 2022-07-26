/*
 * @Author: {zhengzhuang}
 * @Date: 2022-06-07 14:07:57
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-06-07 17:18:52
 * @Description: 抽屉组件
 */
import { Text, View } from "@tarojs/components";
import './index.less';

const WxDrawer = props => {
  return (
    <>
      {props.children}
      {
        props.show && <>
          <View className='drawer_footer' style={{
            height: props.height,
            bottom: props.show ? -props.height || 100 : 0
          }}>{props.child}</View>
          {props.show && <View className='drawer_shields' onClick={props.clickShow}></View>}
        </>
      }
    </>
  )
}

export default WxDrawer;