import types from './types';

const showAlert = (message) => ({
  type: types.SET_ALERT_VISIBILITY,
  payload: {open: true, message}
});

const hideAlert = () => ({
  type: types.SET_ALERT_VISIBILITY,
  payload: {open: false}
});

export default {
  showAlert,
  hideAlert
}