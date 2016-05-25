import { GET_BLOGLIST, UPDATE_PAGINATION } from '../actions/blog'
import { LOCATION_CHANGE } from 'react-router-redux'
import { getPagination } from '../actions/blog'

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
    case LOCATION_CHANGE:
      if (action.payload.action === 'POP') {
        const store = require('../main')
        const pathname = action.payload.pathname
        if (/blog\/page/.test(pathname)) {
          let page = + pathname.split('/')[3]
          store.dispatch(getPagination(page))
        }
      }
    default:
      return state
  }
}