import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      'pages/login/index',
      'pages/index/index',
      'pages/my-project/index',
      'pages/me/index',
      'pages/registered/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: 'black',
      selectedColor: '#5476FD',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './assets/images/home.png',
          selectedIconPath: './assets/images/home-selected.png',
          text: '需求列表'
        },
        {
          pagePath: 'pages/my-project/index',
          iconPath: './assets/images/publish.png',
          selectedIconPath: './assets/images/publish-selected.png',
          text: '我的项目'
        },
        {
          pagePath: 'pages/me/index',
          iconPath: './assets/images/me.png',
          selectedIconPath: './assets/images/me-selected.png',
          text: '个人中心'
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
