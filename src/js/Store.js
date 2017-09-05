//creating redux store
import {createStore, applyMiddleware} from 'redux';

import allReducers from './reducers/reducer-index';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import AppSaga from './sagas/appSaga';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory()
const middleware = routerMiddleware(history)
import 'babel-polyfill'
const sagaMiddleware = createSagaMiddleware();
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, history, composeEnhancers(applyMiddleware(sagaMiddleware, middleware)));
    

sagaMiddleware.run(AppSaga);



export default store;