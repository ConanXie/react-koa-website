import fetch from 'isomorphic-fetch'

export const GET_BLOGLIST = 'GET_BLOGLIST'
export const UPDATE_PAGINATION = 'UPDATE_PAGINATION'

export function blogList(page = 1) {
  return async (dispatch) => {
    let response = await fetch(`/api/blog/list/${page}`)
    let data = await response.json()
    
    dispatch({
      type: GET_BLOGLIST,
      data: data
    })
  }
}

export function getPagination(page = 1) {
  return async (dispatch) => {
    let response = await fetch(`/api/blog/pagination/${page}`)
    let data = await response.json()

    dispatch({
      type: UPDATE_PAGINATION,
      pagination: data
    })
  }
}