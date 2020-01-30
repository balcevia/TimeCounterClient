import types from './types';

const openDialog = (name) => ({
  type: types.OPEN_DIALOG,
  payload: name
});

const closeDialog = (name) => ({
  type: types.CLOSE_DIALOG,
  payload: name
});

export default {
  openDialog,
  closeDialog
}