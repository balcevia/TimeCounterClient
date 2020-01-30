import types from "./types";

const initialState = {
  token: undefined
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SEND_LOGIN_REQUEST.FULFILLED:
      return {...state, token: action.payload};
    default:
      return state;
  }
};

export default reducer;