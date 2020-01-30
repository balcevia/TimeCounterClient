import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import alert from './common/alert/duck/reducer';
import user from './login/duck/reducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  form,
  alert,
  user,
  router: connectRouter(history)
});

export default rootReducer;