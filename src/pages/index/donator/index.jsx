import Taro, { Component } from '@tarojs/taro'
import CustomScrollView from '@components/custom-scroll-view'
import './index.scss'

export default class Donator extends Component {
  config = {
    list: [
      {
        title: '急需1万个口罩',
        createTime: '2020/03/04',
        needItem: 'N95口罩 - 1W个',
        sponsor: '武汉某医院',
        position: '湖北省武汉市',
        isCertification: true,
        status: ''
      }
    ],
    isOpenRefresh: true,
    loadingMore: false,
    loadingButton: false,
    hasMore: true,
    cursor: ''
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

  render() {
    const { isOpenRefresh, loadingMore, hasMore } = this.state

    return (
      <CustomScrollView
        loading={loadingMore}
        hasMore={hasMore}
        isOpenRefresh={isOpenRefresh}
        onScrollToLower={this.loadRecommend}
        onPullDownRefresh={this.handleRefresh}
      >
        123
      </CustomScrollView>
    )
  }
}
