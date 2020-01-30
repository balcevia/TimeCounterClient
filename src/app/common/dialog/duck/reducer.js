import types from "./types";

const initialState = {
  dialogs: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.OPEN_DIALOG:
      return {...state, dialogs: {...state.dialogs, [action.payload]: true}};
    case types.CLOSE_DIALOG:
      return {...state, dialogs: {...state.dialogs, [action.payload]: false}};
    default:
      return state;
  }
};

export default reducer;