import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import alert from './common/alert/duck/reducer';
import user from './login/duck/reducer';
import { connectRouter } from 'connected-react-router'
import files from './main/duck/reducer';
import dialog from './common/dialog/duck/reducer';

const rootReducer = (history) => combineReducers({
  form,
  alert,
  user,
  router: connectRouter(history),
  files,
  dialog
});

export default rootReducer;