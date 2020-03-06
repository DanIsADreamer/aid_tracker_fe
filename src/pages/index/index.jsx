import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { getGlobalData } from '@utils/global-data'
import './index.scss'

export default class Index extends Component {
  componentWillMount() {
    if (getGlobalData('role') === 'Donor') {
      Taro.setTabBarItem({
        index: 0,
        text: '需求列表'
      })
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Text className='hello'>Hello world!</Text>
        <AtButton type='primary'>测试UI框架引入</AtButton>
      </View>
    )
  }
}
