import { GET_BLOGLIST, UPDATE_PAGINATION } from '../actions/blog'

const initialState = {
  list: [],
  pagination: {
    previous: 0,
    currentLeft: 0,
    current: 1,
    currentRight: 0,
    total: 1,
    next: 0
  }
}

export default function blog(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGLIST:
      return {
        ...state,
        list: action.data
      }
    case UPDATE_PAGINATION:
      return {
        ...state,
        pagination: action.pagination
      }
    default:
      return state
  }
}