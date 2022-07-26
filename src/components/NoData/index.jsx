/*
 * @Author: {zhengzhuang}
 * @Date: 2022-06-13 17:15:59
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-06-13 17:23:06
 * @Description: 无数据组件
 */
import { Image, Text, View } from "@tarojs/components";
import NoDataIcon from "../../assets/images/noData/no_data_icon.png";
import './index.less';

const NoData = () => {
  return (
    <View className='no_data_box'>
      <Image src={NoDataIcon} className='no_data_icon' />
      <Text className='no_data_text'>暂无数据</Text>
    </View>
  )
}

export default NoData;