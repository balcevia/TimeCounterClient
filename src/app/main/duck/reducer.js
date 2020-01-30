import types from "./types";
import fileTypes from '../../newFileDialog/duck/types'
const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.FETCH_FILE_LIST.FULFILLED:
      return {...state, list: action.payload};
    case fileTypes.SEND_NEW_FILE.FULFILLED:
      return {...state, list: action.payload};
    default:
      return state;
  }
};

export default reducer;