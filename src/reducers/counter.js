import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_DATA } from '../actions/counter'

const initialState = {
  count: 12,
  value: 'init',
  results: []
}
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
        value: action.value
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
        value: action.value
      }
    case GET_DATA:
      return {
        ...state,
        value: action.value,
        results: [...action.results]
      }
    default:
      return state
  }
}