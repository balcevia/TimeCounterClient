import types from "./types"
import {createRequestAction} from "../../utils";
import {push} from "connected-react-router";

const onSubmit = (formValues) => (dispatch) => {
    return dispatch(createRequestAction({
      types: types.SEND_NEW_FILE,
      url: 'files',
      method: 'POST',
      body: {
        filename: formValues.filename,
        isPublic: formValues.isPublic,
        data: formValues.file.base64
      }
    })).then(() => {
      dispatch(push("/home"))
    });
};

export default {
  onSubmit
}