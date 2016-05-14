import { GET_BLOGLIST } from '../actions/bloglist'

const initialState = {
  list: []
}

export default function bloglist(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGLIST:
      return {
        ...state,
        list: action.data
      }
    default:
      return state
  }
}