import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getGlobalData } from '@utils/global-data'
import Donator from './donator'
import Receiver from './receiver'
import './index.scss'

export default class Index extends Component {
  componentWillMount() {}

  config = {
    navigationBarTitleText: '我的项目'
  }

  render() {
    const isDonor = getGlobalData('role') === 'Donor'
    const isReceiver = getGlobalData('role') === 'Receiver'
    return (
      <View style='height: 100%'>
        {isDonor && <Donator></Donator>}
        {isReceiver && <Receiver></Receiver>}
      </View>
    )
  }
}
