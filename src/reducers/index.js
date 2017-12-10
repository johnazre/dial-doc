import appointments from './appointments.reducer'
import providers from './providers.reducer'
import patients from './patients.reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    appointments,
    providers,
    patients
});

export default rootReducer;
