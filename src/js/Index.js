import css from '../Sass/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
//creating redux store
import {createStore} from 'redux';
import allReducers from './reducers/reducer-index';
const store = createStore(allReducers);
import {Provider} from 'react-redux';
//react router
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';

//polyfill to make fetchAPI work in all browser
require('es6-promise').polyfill();
require('isomorphic-fetch');
ReactDom.render(
    <BrowserRouter>
    <div>
<Provider store = {store}>
<Route exact path='/' component={App} />
</Provider>
</div>
</BrowserRouter>

, document.getElementById('root'));