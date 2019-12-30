import types from './types';
import {createRequestAction} from "../../utils";

const sendLoginRequest = (formValues) => (dispatch) => {
  return dispatch(createRequestAction({
    types: types.SEND_LOGIN_REQUEST,
    url: 'login',
    method: 'POST',
    body: formValues,
    successHandler: data => console.log(data)
  }))
};

export default {
  sendLoginRequest
}