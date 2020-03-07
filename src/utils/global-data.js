const globalData = {
  role: '',
  baseToken: '',
  accessToken: '',
  userInfo: ''
}

export const setGlobalData = (key, value) => {
  globalData[key] = value
}

export const getGlobalData = key => globalData[key]
