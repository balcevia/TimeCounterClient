import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import alert from './common/alert/duck/reducer';

const rootReducer = combineReducers({
  form,
  alert
});

export default rootReducer;