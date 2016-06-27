import { GET_PROFITS } from '../actions/profits'

const initialState = {
  data: [],
  page: 1,
  done: false
}

export default function profits(state = initialState, action) {
  switch (action.type) {
    case GET_PROFITS:
      return {
        ...state,
        data: [...state.data, ...action.data],
        page: state.page + 1,
        done: action.done
      }
    default:
      return state
  }
}