import Taro from '@tarojs/taro'
import { getGlobalData } from './global-data'

const DONOR = 'Donor'
const RECEIVER = 'Receiver'

export const isDonor = () => getGlobalData('role') === DONOR
export const isReceiver = () => getGlobalData('role') === RECEIVER

const ROLE = {
  [DONOR]: () => {
    Taro.setTabBarItem({
      index: 0,
      text: '需求列表'
    })

    // Taro.setNavigationBarTitle({
    //   title: 'Aid Tracter'
    // })
  },
  [RECEIVER]: () => {
    Taro.setTabBarItem({
      index: 0,
      text: '我的需求'
    })
  }
}

export const setTabbar = () => {
  ROLE[getGlobalData('role')]()
}
