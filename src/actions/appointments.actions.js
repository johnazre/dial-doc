import axios from 'axios'

export const GET_ALL_APPOINTMENTS_PENDING = 'GET_ALL_APPOINTMENTS_PENDING'
export const GET_ALL_APPOINTMENTS_SUCCESS = 'GET_ALL_APPOINTMENTS_SUCCESS'
export const ADD_APPOINTMENT_PENDING = 'ADD_APPOINTMENT_PENDING'
export const ADD_APPOINTMENT_SUCCESS = 'ADD_APPOINTMENT_SUCCESS'
export const SORT_PAST_APPOINTMENTS_PENDING = 'SORT_PAST_APPOINTMENTS_PENDING'
export const SORT_PAST_APPOINTMENTS_SUCCESS = 'SORT_PAST_APPOINTMENTS_SUCCESS'

export const getAllAppointments = () => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_APPOINTMENTS_PENDING})
    let appointments = await axios.get(`http://localhost:8000/appointments?filter=desc`)
    dispatch({
      type: GET_ALL_APPOINTMENTS_SUCCESS,
      payload: appointments
    })
  }
}

export const addAppointment = (appt, when) => {
  let newAppt;

  if(when === "future") {
    newAppt = {
      patient_id: 1,
      provider_id: parseInt(appt.provider_id, 10),
      appt_date: `${appt.date} ${appt.time}`
    }
  } else {
    newAppt = {
      patient_id: 1,
      provider_id: 1,
      appt_date: new Date()
    }
  }
  return async (dispatch) => {
    dispatch({type: ADD_APPOINTMENT_PENDING})
    let appointment = axios.post(`http://localhost:8000/appointments`, newAppt)
    dispatch({
      type: ADD_APPOINTMENT_SUCCESS,
      payload: appointment
    })
  };
};

export const sortAppts = (order) => {
  return async (dispatch) => {
    dispatch({type: SORT_PAST_APPOINTMENTS_PENDING})
    let appointment = await axios.get(`http://localhost:8000/appointments?filter=${order}`)
    dispatch({
      type: SORT_PAST_APPOINTMENTS_SUCCESS,
      payload: appointment
    })
  };
};
