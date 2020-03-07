import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {}

  getId() {
    return this.$router.params.id
  }

  

  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
