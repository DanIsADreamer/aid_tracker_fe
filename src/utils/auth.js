import Taro from '@tarojs/taro'
import { MSG_GET_USERINFO_OK } from '@constants/status.js'

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    Taro.getUserInfo({
      success: ({ errMsg, userInfo }) => {
        errMsg === MSG_GET_USERINFO_OK ? resolve(userInfo) : reject()
      },
      fail: reject
    })
  })
}

export function login(nickName, avatarUrl) {
  console.log(nickName, avatarUrl)
  return new Promise((resolve, reject) => {
    Taro.login({
      success: function(res) {
        if (res.code) {
          console.log(res.code)
          //发起网络请求
          resolve(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
          reject()
        }
      },
      fail: reject
    })
  })
}

export function getAuthUser() {
  return new Promise((resolve, reject) => {
    getUserInfo().then(({ nickName, avatarUrl }) => {
      login(nickName, avatarUrl).then(resolve, reject)
    }, reject)
  })
}
