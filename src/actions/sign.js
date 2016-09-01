export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'

export function login(userName, password) {
  return async (dispath) => {
    let status = false
    let snackbar = {
      open: true,
      message: ''
    }
    if (!userName) {
      snackbar.message = '请输入用户名'
      dispath({
        type: LOG_IN,
        status,
        snackbar
      })
      return
    }
    if (!password) {
      snackbar.message = '请输入密码'
      dispath({
        type: LOG_IN,
        status,
        snackbar
      })
      return
    }
    let response = await fetch('/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: `user=${userName}&pw=${password}`
    })
    let data = await response.json()
    snackbar.message = data.msg
    if (!data.code) {
      status = true
    }

    dispath({
      type: LOG_IN,
      status,
      snackbar
    })
  }
}

export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR,
    snackbar: {
      open: false,
      message: ''
    }
  }
}

export function logout() {
  return async (dispatch) => {
    const response = await fetch('/api/logout', { credentials: 'include' })
    const data = await response.json()
    if (!data.code) {
      dispatch({
        type: LOG_OUT,
        status: false
      })
    }
  }
}