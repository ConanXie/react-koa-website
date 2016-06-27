export const GET_PROFITS ='GET_PROFITS'

export function getProfits(page = 1) {
  return async (dispatch) => {
    let response = await fetch(`/api/profits/${page}`)
    let data = await response.json()

    dispatch({
      type: GET_PROFITS,
      data: data.data,
      done: data.done
    })
  }
}