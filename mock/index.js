// eslint-disable-next-line import/no-commonjs
const delay = require('mocker-api/utils/delay') // 延时 模拟请求异步问题
// eslint-disable-next-line import/no-commonjs
const mockjs = require('mockjs')

const data = {
  'POST /api-user-auth': {
    id: 1,
    nickname: 'chong',
    role: ''
  },
  'POST /api-user-fill': {
    id: 1,
    nickname: 'chong',
    role: 'supplier'
  },
  //可以直接使用mockjs生成mock数据
  'GET /api/mock': mockjs.mock({
    'list|10-100': 1
  })
}
module.exports = delay(data, 1000)
