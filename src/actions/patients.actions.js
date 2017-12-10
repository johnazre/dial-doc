import axios from 'axios'

export const GET_ALL_PATIENTS_PENDING = 'GET_ALL_PATIENTS_PENDING'
export const GET_ALL_PATIENTS_SUCCESS = 'GET_ALL_PATIENTS_SUCCESS'

export const getAllPatients = () => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_PATIENTS_PENDING})
    let patients = await axios.get(`http://localhost:8000/patients`)
    dispatch({
      type: GET_ALL_PATIENTS_SUCCESS,
      payload: patients
    })
  }
}
