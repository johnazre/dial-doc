import axios from 'axios'

export const GET_ALL_APPOINTMENTS_PENDING = 'GET_ALL_APPOINTMENTS_PENDING'
export const GET_ALL_APPOINTMENTS_SUCCESS = 'GET_ALL_APPOINTMENTS_SUCCESS'

export const getAllAppointments = () => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_APPOINTMENTS_PENDING})
    let appointments = await axios.get(`http://localhost:8000/appointments`)
    dispatch({
      type: GET_ALL_APPOINTMENTS_SUCCESS,
      payload: appointments
    })
  }
}
