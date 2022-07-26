/*
 * @Author: {zhengzhuang}
 * @Date: 2022-06-07 16:52:45
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-06-09 10:29:27
 * @Description: 输入框
 */
import { Input, View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import './index.less';
import styles from "./index.less";

const WxInput = props => {
  const { value, onInput, onDel } = props;
  return (
    <View className='wx_input_box'>
      <AtIcon value='search' size='14' color='#cacdd3'></AtIcon>
      <Input className='wx_input' value={value} placeholder='请输入' onInput={onInput} />
      <View className='close_box'>
        {value && <AtIcon value='close' size='12' color='#cacdd3' onClick={onDel}></AtIcon>}
      </View>
    </View>
  )
}

export default WxInput;