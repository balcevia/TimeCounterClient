import {applyMiddleware, createStore} from 'redux';
import createRootReducer from './reducer';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import {createBrowserHistory} from 'history';
import {requestActionMiddleware} from "./middlewares";
import {routerMiddleware} from 'connected-react-router'

export const history = createBrowserHistory();
const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware(history), logger, thunk, requestActionMiddleware));

export default store;