import { LOG_IN, LOG_OUT, CLOSE_SNACKBAR } from '../actions/sign'

const initialState = {
  status: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        status: action.status,
        snackbar: action.snackbar
      }
    case LOG_OUT:
      return {
        ...state,
        status: action.status
      }
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbar: action.snackbar
      }
    default:
      return state
  }
}