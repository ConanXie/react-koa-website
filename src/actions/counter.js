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
    if (getState().counter % 2) {
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
  return (dispatch) => {
    $.ajax({
      url: 'data',
      type: 'get',
      data: {
        name: 'conan'
      },
      dataType: 'json',
      success: function (d) {
        // console.log(d)
        dispatch({
          type: GET_DATA,
          value: `The user name is ${d.name}. He said ${d.data}`
        })
      }
    })
  }
}