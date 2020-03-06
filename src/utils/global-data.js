const globalData = {
  role: 'Donor'
}

export const setGlobalData = (key, value) => {
  globalData[key] = value
}

export const getGlobalData = key => globalData[key]
