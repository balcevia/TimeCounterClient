import actions from './actions';

const showAlert = (message) => (dispatch) => {
  dispatch(actions.showAlert(message));
};

const hideAlert = () => (dispatch) => {
  dispatch(actions.hideAlert());
};

export default {
  showAlert,
  hideAlert
}