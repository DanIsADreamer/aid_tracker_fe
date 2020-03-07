import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import CustomInput from '@components/custom-input'
import classNames from 'classnames'
import './index.scss'

export default class Index extends Component {
  state = {
    list: [
      {
        name: '个人',
        value: 'myself',
        isChecked: false
      },
      {
        name: '学校',
        value: 'school',
        isChecked: false
      },
      {
        name: '企业',
        value: 'company',
        isChecked: false
      },
      {
        name: '其他团体（有国家慈善认证)',
        value: 'other_have',
        isChecked: false
      },
      {
        name: '其他团体（无国家慈善认证)',
        value: 'other_no',
        isChecked: false
      }
    ],
    selectValue: ''
  }
  config = {
    navigationBarTitleText: '注册'
  }

  handleClick(item) {
    console.log(this.state.selectValue)
    this.setState(pre => ({
      selectValue: pre.selectValue.push(item.value),
      list: pre.list.map(v => {
        if (v.value === item.value) {
          return Object.assign(v, {
            isChecked: !v.isChecked
          })
        }
        return v
      })
    }))
  }

  renderTag(item) {
    return (
      <Text
        className={classNames({ tag: true, 'tag-active': item.isChecked })}
        onClick={this.handleClick.bind(this, item)}
      >
        {item.name}
      </Text>
    )
  }

  render() {
    const { list } = this.state
    return (
      <View className='registered'>
        <Text className='title'>捐赠者注册</Text>

        <CustomInput label='名称'></CustomInput>
        <CustomInput label='所在地'></CustomInput>
        <View className='type'>
          <View className='sub-title'>规模资质</View>
          <View className='select'>
            {list.map(item => (
              <View key={item.value}>{this.renderTag(item)}</View>
            ))}
          </View>
        </View>
      </View>
    )
  }
}
