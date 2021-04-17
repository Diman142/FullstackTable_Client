import { SHOW_LOADER, HIDE_LOADER, ADD_TOTABLE, ADD_NEWDATA, CLEAR_NEWDATA, CHANGE_REGDATE, CHANGE_LASTACTIVEDATA, CHANGE_USERID } from '../types'


export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

export const addToTable = (data) => {
  return {
    type: ADD_TOTABLE,
    payload: data
  }
}

export const changeUserId = (userId) => {
  return {
    type: CHANGE_USERID,
    payload: userId
  }
}

export const changeRegData = (regData) => {
  return {
    type: CHANGE_REGDATE,
    payload: regData
  }
}

export const changeLastAct = (lastAct) => {
  return {
    type: CHANGE_LASTACTIVEDATA,
    payload: lastAct
  }
}

export const addNewData = (newData) => {
  return {
    type: ADD_NEWDATA,
    payload: newData
  }
}

export const clearNewData = () => {
  return {
    type: CLEAR_NEWDATA,
  }
}

