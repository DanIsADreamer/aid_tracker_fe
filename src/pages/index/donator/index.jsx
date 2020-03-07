import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import CustomScrollView from '@components/custom-scroll-view'
import Card from '@components/card'
import CardContent from '@components/card/card-content'
import CardProgress from '@components/card/card-progress'
import CardTitle from '@components/card/card-title'
import CardStatus from '@components/card/card-status'

import './index.scss'

export default class Donator extends Component {
  state = {
    list: [
      {
        id: '123',
        title: '急需1万个口罩',
        publishTime: '2020/03/05',
        applicationTime: '2020/03/06',
        demandSupplies: 'N95口罩',
        totalDemand: 10000,
        sponsor: '武汉某某医院',
        position: '湖北省武汉市',
        totalCount: 10000,
        finishCount: 3000
      },
      {
        id: '123',
        title: '急需1万个口罩',
        publishTime: '2020/03/05',
        applicationTime: '2020/03/06',
        demandSupplies: 'N95口罩',
        totalDemand: 10000,
        sponsor: '武汉某某医院',
        position: '湖北省武汉市',
        totalCount: 10000,
        finishCount: 3000
      },
      {
        id: '12',
        title: '急需1万个口罩',
        publishTime: '2020/03/05',
        demandSupplies: 'N95口罩',
        totalDemand: 10000,
        sponsor: '武汉某某医院',
        position: '湖北省武汉市',
        totalCount: 10000,
        finishCount: 3000
      }
    ],
    isOpenRefresh: true,
    loadingMore: false,
    loadingButton: false,
    hasMore: true,
    cursor: '',
    value: ''
  }

  // 初始化状态
  initStatus = async () => {
    return await this.customSetState({
      isOpenRefresh: true,
      loadingMore: false,
      loadingButton: false,
      hasMore: true,
      cursor: ''
    })
  }

  // promise setState
  customSetState(obj) {
    return new Promise(resolve => {
      this.setState(obj, () => {
        resolve(this.state)
      })
    })
  }

  loadRecommend = async () => {
    const { hasMore, loadingMore } = this.state

    if (!hasMore || loadingMore) {
      return
    }

    await this.customSetState({
      loadingMore: true
    })

    setTimeout(() => {
      this.setState({
        loadingMore: false,
        hasMore: false
      })
    }, 1000)
  }

  handleRefresh = async () => {
    await this.initStatus()

    const { isOpenRefresh } = this.state

    if (!isOpenRefresh) {
      return
    }

    try {
    } catch (error) {}

    setTimeout(() => {
      this.setState({
        isOpenRefresh: false
      })
    }, 1000)
  }

  handleSearchChange(value) {
    this.setState({
      value: value
    })
  }
  handleCardClick = () => {
    Taro.navigateTo({
      url: '/pages/detail/donator/detail-preparation/index?id=1'
    })
  }

  render() {
    const { list, isOpenRefresh, loadingMore, hasMore } = this.state

    return (
      <View className='donator'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.handleSearchChange.bind(this)}
        />
        <CustomScrollView
          loading={loadingMore}
          hasMore={hasMore}
          isOpenRefresh={isOpenRefresh}
          onScrollToLower={this.loadRecommend}
          onPullDownRefresh={this.handleRefresh}
        >
          {list.map(item => (
            <Card key={item.id} onClick={this.handleCardClick}>
              <CardTitle title={item.title}></CardTitle>
              <CardStatus></CardStatus>
              <CardProgress
                totalCount={item.totalCount}
                finishCount={item.finishCount}
              ></CardProgress>
              <CardContent
                publishTime={item.publishTime}
                demandSupplies={item.demandSupplies}
                totalDemand={item.totalDemand}
                sponsor={item.sponsor}
                position={item.position}
              ></CardContent>
            </Card>
          ))}
        </CustomScrollView>
      </View>
    )
  }
}
