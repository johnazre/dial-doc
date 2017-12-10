import axios from 'axios'

export const GET_ALL_APPOINTMENTS_PENDING = 'GET_ALL_APPOINTMENTS_PENDING'
export const GET_ALL_APPOINTMENTS_SUCCESS = 'GET_ALL_APPOINTMENTS_SUCCESS'
export const ADD_APPOINTMENT_PENDING = 'ADD_APPOINTMENT_PENDING'
export const ADD_APPOINTMENT_SUCCESS = 'ADD_APPOINTMENT_SUCCESS'

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

export const addAppointment = (appt) => {
  let newAppt = {
    patient_id: 1,
    provider_id: parseInt(appt.provider_id),
    appt_date: `${appt.date} ${appt.time}`
  }
  console.log('appt', newAppt)
  return async (dispatch) => {
    dispatch({type: ADD_APPOINTMENT_PENDING})
    let appointment = axios.post(`http://localhost:8000/appointments`, newAppt)
    dispatch({
      type: ADD_APPOINTMENT_SUCCESS,
      payload: appointment
    })
  };
};
