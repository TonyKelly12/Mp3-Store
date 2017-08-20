import css from '../Sass/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
//creating redux store
import {createStore} from 'redux';
import allReducers from './reducers/reducer-index';
const store = createStore(allReducers);

import {Provider} from 'react-redux';
import App from './App';

//polyfill to make fetchAPI work in all browser
require('es6-promise').polyfill();
require('isomorphic-fetch');
ReactDom.render(
<Provider store = {store}>
<App />
</Provider>

, document.getElementById('root'));