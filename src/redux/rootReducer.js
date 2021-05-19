import { combineReducers } from 'redux';
import authReducer from './login/loginReducer';
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
