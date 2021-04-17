import { ADD_TOTABLE, ADD_NEWDATA, CLEAR_NEWDATA } from '../types'


const initialState = {
  data: [],
  newData: []
}

const dataReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TOTABLE:
      return { ...state, data: [...action.payload] }
    case ADD_NEWDATA:
      return { ...state, newData: [...action.payload] }
    case CLEAR_NEWDATA:
      return { ...state, newData: [] }
    default: return state
  }
}

export default dataReducer
