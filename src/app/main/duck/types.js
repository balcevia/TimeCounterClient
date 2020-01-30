import {createFetchActionTypes} from "../../utils";

const FETCH_FILE_LIST = createFetchActionTypes("FETCH_FILE_LIST");
const FETCH_FILE = createFetchActionTypes("FETCH_FILE");

export default {
  FETCH_FILE_LIST,
  FETCH_FILE
}