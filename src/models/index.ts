/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-21 10:57:18
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-21 11:33:07
 * @Description:
 */
import { proxy } from 'valtio'

const user: {
  name?: string
} = {
  name: 'Link',
}

export const store = proxy({
  user,
  setUser(name: string) {
    this.user.name = name; // 通过代理对象更新 name 属性
  },
})
