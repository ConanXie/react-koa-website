import { LOG_IN } from '../actions/login'

const initalState = {
  status: false
}

export default function (state = initalState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state
  }
}