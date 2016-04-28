import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_DATA } from '../actions/counter'

const initialState = {
  counter: 12,
  value: ''
}
export default function counter(state = initialState, action) {
  console.log(action)
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
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}