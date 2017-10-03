import css from '../Sass/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import ReactRouter from 'react-router'
import store from './Store';
import {Provider} from 'react-redux';
//react router
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mp3Dropzone from './components/Mp3Dropzone/Mp3Dropzone'
import ListApp from './ListApp';
import UserApp from './UserApp';
import RegisterApp from './RegisterApp';
import LoginApp from './LoginApp';
import Upload from './components/Upload/Upload'
//Setting Auth Token
import loginAuthToken from './sagas/loginAppSaga';

loginAuthToken(localStorage.jwtToken)


//polyfill to make fetchAPI work in all browser
require('es6-promise').polyfill();
require('isomorphic-fetch');
ReactDom.render(
    
    <Provider store={store}>
        
    <HashRouter>
        <div>
       
          <Navbar />  
        <div>
            
            <Route exact ={true} path='/' component={ListApp}/>
            <Route exact ={true} path='/admin' component={UserApp}/>
            <Route exact ={true} path='/register' component={RegisterApp}/>
            <Route exact ={true} path='/login' component={LoginApp}/>
            <Route exact ={true} path='/upload' component={Mp3Dropzone}/>

           
        </div>
        </div>
    </HashRouter>
     </Provider>
     , document.getElementById('root'));
