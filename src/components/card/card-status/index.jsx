import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class CardStatus extends Component {
  static defaultProps = {
    status: '筹备中'
  }

  render() {
    const { status } = this.props
    return <View className='card-status'>{status}</View>
  }
}
