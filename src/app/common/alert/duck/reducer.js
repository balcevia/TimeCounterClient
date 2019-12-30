import types from './types';

const initialState = {
  open: false,
  message: undefined
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SET_ALERT_VISIBILITY:
      return {...state, open: action.payload.open, message: action.payload.message};
    default:
      return state;
  }
};

export default reducer;