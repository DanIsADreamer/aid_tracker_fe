import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  componentDidMount() {
    // Taro.login({
    //   success: function(res) {
    //     if (res.code) {
    //       //发起网络请求
    //       Taro.request({
    //         url: 'https://test.com/onLogin',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  }

  config = {}

  render() {
    return (
      <View className='login'>
        <View className='logo'>logo</View>
        <Text className='title'>Aid Tracker捐赠直连</Text>
        <View className='button'>
          <AtButton type='primary' className='btn-top'>我是捐赠方</AtButton>
          <AtButton type='primary' className='btn-bottom'>我是受赠方</AtButton>
        </View>
      </View>
    )
  }
}
