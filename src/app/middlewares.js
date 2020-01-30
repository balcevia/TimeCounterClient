import alertOperations from './common/alert/duck/operations';

export const requestActionMiddleware = ({dispatch}) => next => action => {
    if (!action.fetchAction) {
        return next(action);
    }

    dispatch({type: action.types.PENDING});

    return action.payload.then(response => {
      if(response.status === 200 || response.status === 201) {
        return response.json()
      }
      const message = response.status === 401 ? "Unauthorized" : "Error";
      dispatch(alertOperations.showAlert(message));
      return Promise.reject(response.statusText);
    }).then(data => {
      const successData = action.successHandler ? action.successHandler(data) : data;
            dispatch({
                type: action.types.FULFILLED,
                payload: successData
            });
            return Promise.resolve(successData);
    }).catch(error => {
        dispatch({type: action.types.REJECTED});
        return Promise.reject(error);
    })
};