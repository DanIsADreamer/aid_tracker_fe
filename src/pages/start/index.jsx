import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getAuthUser } from '@utils/auth'
import './index.scss'

export default class Index extends Component {
  componentDidMount() {
    Taro.showLoading({
      title: '加载中'
    })

    getAuthUser().then(res => {
      console.log(res)
    })
  }

  config = {}

  render() {
    return <View></View>
  }
}
