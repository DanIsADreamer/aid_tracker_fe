import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { setGlobalData } from '@utils/global-data'
import { getAuthUser } from '@utils/auth'
import logo from '@assets/images/logo.png'
// import request from '@services/api'
import './index.scss'
import { getGlobalData } from '../../utils/global-data'

export default class Index extends Component {
  componentDidMount() {}

  config = {}

  onGetUserInfo(currentRole) {
    setGlobalData('role', currentRole)
    getAuthUser()
      .then(res => {
        setGlobalData('role', currentRole)
        console.log(getGlobalData('role'))
        if (!res.role || res.role === '' || res.role !== currentRole) {
          Taro.navigateTo({
            url: `/pages/registered/index?id=${res.id}`
          })
        }
        Taro.switchTab({
          url: '/pages/index/index'
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <View className='login'>
        <Image className='logo' src={logo}></Image>
        <Text className='title'>Aid Tracker捐赠直连</Text>
        <View className='button'>
          <AtButton
            type='primary'
            className='btn-top'
            openType='getUserInfo'
            onGetUserInfo={this.onGetUserInfo.bind(this, 'supplier')}
          >
            我是捐赠方
          </AtButton>
          <AtButton
            type='primary'
            className='btn-bottom'
            openType='getUserInfo'
            onGetUserInfo={this.onGetUserInfo.bind(this, 'demander')}
          >
            我是受赠方
          </AtButton>
        </View>
      </View>
    )
  }
}
