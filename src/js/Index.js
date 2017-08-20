import css from '../Sass/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import ReactRouter from 'react-router'
//creating redux store
import {createStore} from 'redux';
import allReducers from './reducers/reducer-index';
const store = createStore(allReducers);

import {Provider} from 'react-redux';
//react router
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';


import App from './App';
import UserApp from './UserApp';
import RegisterApp from './RegisterApp';
import LoginApp from './LoginApp';
//polyfill to make fetchAPI work in all browser
require('es6-promise').polyfill();
require('isomorphic-fetch');
ReactDom.render(
    <Provider store={store}>
    <HashRouter>
        <div>
            
            <Route exact ={true} path='/' component={App}/>
            <Route exact ={true} path='/admin' component={UserApp}/>
            <Route exact ={true} path='/register' component={RegisterApp}/>
            <Route exact ={true} path='/login' component={LoginApp}/>
           
        </div>
    </HashRouter>
     </Provider>
     , document.getElementById('root'));
