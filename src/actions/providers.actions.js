import axios from 'axios'

export const GET_ALL_PROVIDERS_PENDING = 'GET_ALL_PROVIDERS_PENDING'
export const GET_ALL_PROVIDERS_SUCCESS = 'GET_ALL_PROVIDERS_SUCCESS'

export const getAllProviders = () => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_PROVIDERS_PENDING})
    let providers = axios.get(`http://localhost:8000/providers`)
    dispatch({
      type: GET_ALL_PROVIDERS_SUCCESS,
      payload: providers
    })
  }
}
