import fetch from 'isomorphic-fetch'

export const GET_BLOGLIST = 'GET_BLOGLIST'

export function blogList(page = 1) {
  return async (dispatch) => {
    let response = await fetch(`api/bloglist/${page}`)
    let data = await response.json()
    
    dispatch({
      type: GET_BLOGLIST,
      data: data
    })
  }
}