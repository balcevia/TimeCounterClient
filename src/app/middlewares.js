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

      dispatch(alertOperations.showAlert(response.statusText));
      return Promise.reject(response.statusText);
    }).then(data => {
            dispatch({
                type: action.types.FULFILLED,
                payload: action.successHandler(data)
            });
            return Promise.resolve(action.successHandler(data))
    }).catch(error => {
        dispatch({type: action.types.REJECTED});
        return Promise.reject(error);
    })
};