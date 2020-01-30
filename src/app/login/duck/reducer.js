import types from "./types";

const initialState = {
  username: undefined
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SEND_LOGIN_REQUEST.FULFILLED:
      return {...state, username: action.payload.username};
    default:
      return state;
  }
};

export default reducer;