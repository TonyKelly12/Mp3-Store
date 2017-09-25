//creating redux store
import {createStore, applyMiddleware} from 'redux';

import allReducers from './reducers/reducer-index';
import {browserHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
const history = createHistory()
const middleware = routerMiddleware(history)
//Redux Saga's
import createSagaMiddleware from 'redux-saga';
import LoginSaga from './sagas/loginAppSaga';
import UploadSaga from './sagas/uploadAppSaga'
const sagaMiddleware = createSagaMiddleware();
//Redux chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, history, composeEnhancers(applyMiddleware(sagaMiddleware, middleware)));


import 'babel-polyfill'



sagaMiddleware.run(LoginSaga);
sagaMiddleware.run(UploadSaga);





export default store;