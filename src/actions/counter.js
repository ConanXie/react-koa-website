import fetch from 'isomorphic-fetch'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const GET_DATA = 'GET_DATA'

// 加一
export function increment() {
  return {
    type: INCREMENT_COUNTER,
    value: 'increment'
  }
}

// 减一
export function decrement() {
  return {
    type: DECREMENT_COUNTER,
    value: 'decrement'
  }
}

// 奇数加一
export function incrementIfOdd() {
  return (dispatch, getState) => {
    let { count } = getState().counter
    if (count % 2) {
      dispatch(increment())
    }
  }
}

// 延迟一秒加一
export function incrementAsync(delay = 1000) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

// ajax获取数据

export function getData() {
  return async (dispatch) => {
    let response = await fetch('/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: 'name=conan&author=谢杰'
    })
    let data = await response.json()
    dispatch({
      type: GET_DATA,
      value: `The user name is ${data.name}. He said ${data.data}. The author is ${data.author}`,
      results: data.results
    })
  }
}