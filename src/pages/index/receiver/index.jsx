import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {}

  handleClick = () => {
    Taro.switchTab({
      url: '/pages/login/index'
    })
  }

  render() {
    return (
      <View>
        <Text>暂未开发~</Text>
        <AtButton type='primary' onClick={this.handleClick}>
          返回
        </AtButton>
      </View>
    )
  }
}
