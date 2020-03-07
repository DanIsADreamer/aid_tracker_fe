import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { setGlobalData } from '@utils/global-data'
import logo from '@assets/images/logo.png'
// import request from '@services/api'
import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  config = {}

  handleClick(role) {
    console.log(role)
    // request.get('/api/user').then(res => {
    //   console.log(res)
    // })
    setGlobalData('role', role)
    Taro.switchTab({
      url: '/pages/index/index'
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
            onClick={this.handleClick.bind(this, 'Donor')}
          >
            我是捐赠方
          </AtButton>
          <AtButton
            type='primary'
            className='btn-bottom'
            onClick={this.handleClick.bind(this, 'Receiver')}
          >
            我是受赠方
          </AtButton>
        </View>
      </View>
    )
  }
}
