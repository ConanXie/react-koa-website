import { LOG_IN, CLOSE_SNACKBAR } from '../actions/login'

const initalState = {
  status: false,
  snackbar: {
    open: false,
    message: ''
  }
}

export default function (state = initalState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        status: action.status,
        snackbar: action.snackbar
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