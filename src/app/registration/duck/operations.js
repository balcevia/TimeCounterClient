import types from './types';
import {createRequestAction} from "../../utils";
import {push} from "connected-react-router";

const onSubmit = (formValues) => (dispatch) => {
  return dispatch(createRequestAction({
    types: types.SEND_REGISTRATION_REQUEST,
    url: 'users',
    method: 'POST',
    body: formValues
  })).then(() => {
    dispatch(push("/login"))
  });
};

export default {
  onSubmit
}