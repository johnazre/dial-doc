import {
  GET_ALL_PROVIDERS_PENDING,
  GET_ALL_PROVIDERS_SUCCESS
} from '../actions/providers.actions'

export default(state = [], action) => {
  switch (action.type) {
    case GET_ALL_PROVIDERS_PENDING:
      return state;
    case GET_ALL_PROVIDERS_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
};
