import {
  SHOW_LOADER,
  HIDE_LOADER,
  ADD_TOTABLE,
  ADD_NEWDATA,
  CLEAR_NEWDATA,
  CHANGE_REGDATE,
  CHANGE_LASTACTIVEDATA,
  CHANGE_USERID,
  CLEAR_TABLE,
} from '../types';

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const addToTable = (data) => ({
  type: ADD_TOTABLE,
  payload: data,
});

export const changeUserId = (userId) => ({
  type: CHANGE_USERID,
  payload: userId,
});

export const changeRegData = (regData) => ({
  type: CHANGE_REGDATE,
  payload: regData,
});

export const changeLastAct = (lastAct) => ({
  type: CHANGE_LASTACTIVEDATA,
  payload: lastAct,
});

export const addNewData = (newData) => ({
  type: ADD_NEWDATA,
  payload: newData,
});

export const clearNewData = () => ({
  type: CLEAR_NEWDATA,
});

export const clearTable = () => ({
  type: CLEAR_TABLE,
});
