import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  static defaultProps = {}

  render() {
    const { children } = this.props
    return <View className='card'>{children}</View>
  }
}
