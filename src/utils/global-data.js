const globalData = {
  role: ''
}

export const setGlobalData = (key, value) => {
  globalData[key] = value
}

export const getGlobalData = key => globalData[key]
