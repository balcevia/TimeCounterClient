import types from './types';
import {createRequestAction, fetchFileByPath} from "../../utils";

const fetchFiles = () => (dispatch) => {
  return dispatch(createRequestAction({
    types: types.FETCH_FILE_LIST,
    url: 'files/all-list',
    method: 'GET'
  }))
};

const fetchFile = (id) => {
  return fetchFileByPath(`files?id=${id}`);
};

export default {
  fetchFiles,
  fetchFile
}