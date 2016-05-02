import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_DATA } from '../actions/counter'

const initialState = {
  counter: 12,
  value: 'init',
  results: []
}
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
        value: action.value
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
        value: action.value
      }
    case GET_DATA:
      console.log([...state.results, action.results])
      return {
        ...state,
        value: action.value,
        results: [...state.results, ...action.results]
      }
    default:
      return state
  }
}