import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  static defaultProps = {}

  render() {
    const { children, onClick } = this.props
    return (
      <View className='card' onClick={onClick}>
        {children}
      </View>
    )
  }
}
