const sessionGlobalData = {
  role: 'Donor'
}

export const setSessionGlobalData = (key, value) => {
  sessionGlobalData[key] = value
}

export const getSessionGlobalData = key => sessionGlobalData[key]
