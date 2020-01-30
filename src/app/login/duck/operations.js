import types from './types';
import {createRequestAction} from "../../utils";
import {setToken} from "../../jwt-utils";
import {push} from 'connected-react-router'

const sendLoginRequest = (formValues) => (dispatch) => {
  return dispatch(createRequestAction({
    types: types.SEND_LOGIN_REQUEST,
    url: 'login',
    method: 'POST',
    body: formValues,
    successHandler: data => {
      setToken(data.token);
      return data.token
    }
  })).then(() => {
    dispatch(push("/home"))
  });
};

export default {
  sendLoginRequest
}