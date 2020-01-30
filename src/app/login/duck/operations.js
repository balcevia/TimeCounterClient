import types from './types';
import {createRequestAction} from "../../utils";
import {push} from 'connected-react-router'

const sendLoginRequest = (formValues) => (dispatch) => {
  return dispatch(createRequestAction({
    types: types.SEND_LOGIN_REQUEST,
    url: 'login',
    method: 'POST',
    body: formValues
  })).then(() => {
    dispatch(push("/home"))
  });
};

export default {
  sendLoginRequest
}