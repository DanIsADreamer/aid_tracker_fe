import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtProgress } from 'taro-ui'
import './index.scss'

export default class CardProgress extends Component {
  static defaultProps = {
    totalCount: 10000,
    finishCount: 3000
  }

  render() {
    const { totalCount, finishCount } = this.props
    const percent = (Number(finishCount) / Number(totalCount)) * 100
    const difference = totalCount - finishCount
    return (
      <View className='card-progress'>
        <AtProgress
          percent={percent}
          isHidePercent
          className='progress'
        ></AtProgress>
        <Text>还差 {difference} 枚</Text>
      </View>
    )
  }
}
