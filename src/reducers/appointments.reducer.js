import {
  GET_ALL_APPOINTMENTS_PENDING,
  GET_ALL_APPOINTMENTS_SUCCESS
} from '../actions/appointments.actions'

export default(state = [], action) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS_PENDING:
      return state;
    case GET_ALL_APPOINTMENTS_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
};
