import actions from './actions';

const isOpen = (name) => (dispatch, getState) => {
  return getState().dialog.dialogs[name] || false;
};

const open = (name) => (dispatch) => {
  dispatch(actions.openDialog(name));
};

const close = (name) => (dispatch) => {
  dispatch(actions.closeDialog(name));
};

export default {
  isOpen,
  open,
  close
}