export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// 加一()
export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

// 减一
export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

// 奇数加一
export function incrementIfOdd() {
  return (dispatch, getState) => {
    const counter = getState()

    if (counter % 2) {
      dispatch(increment())
    }
  }
}

export function incrementAsync(delay = 1000) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}