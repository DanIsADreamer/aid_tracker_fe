import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getGlobalData } from '@utils/global-data'
import Donator from './donator'
import Receiver from './receiver'
import './index.scss'

const ROLE = {
  Donor: () => {
    Taro.setTabBarItem({
      index: 0,
      text: '需求列表'
    })
  },
  Receiver: () => {
    Taro.setTabBarItem({
      index: 0,
      text: '我的需求'
    })
  }
}

export default class Index extends Component {
  componentDidMount() {
    ROLE[getGlobalData('role')]()
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    const isDonor = getGlobalData('role') === 'Donor'
    const isReceiver = getGlobalData('role') === 'Receiver'
    return (
      <View className='index'>
        {isDonor && <Donator></Donator>}
        {isReceiver && <Receiver></Receiver>}
      </View>
    )
  }
}
