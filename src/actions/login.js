export const LOG_IN = 'LOG_IN'

export function login(userName, password) {
  return async (dispath) => {
    let response = await fetch('/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `user=${userName}&pw=${password}`
    })
    let data = await response.json()

    dispath({
      type: LOG_IN,
      payload: data
    })
  }
}