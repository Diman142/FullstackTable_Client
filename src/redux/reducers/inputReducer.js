import { CHANGE_REGDATE, CHANGE_LASTACTIVEDATA, CHANGE_USERID } from '../types'

const initialState = {
  userId: "",
  regData: "",
  lastAct: "",
}

const inputReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_USERID:
      return { ...state, userId: action.payload }
    case CHANGE_REGDATE:
      return { ...state, regData: action.payload }
    case CHANGE_LASTACTIVEDATA:
      return { ...state, lastAct: action.payload }
    default: return state
  }
}

export default inputReducer
