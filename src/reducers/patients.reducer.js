import {
  GET_ALL_PATIENTS_PENDING,
  GET_ALL_PATIENTS_SUCCESS
} from '../actions/patients.actions'

export default(state = [], action) => {
  switch (action.type) {
    case GET_ALL_PATIENTS_PENDING:
      return state;
    case GET_ALL_PATIENTS_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
};
