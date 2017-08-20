import React from 'react';


import Login from './components/Login'
import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail'
require('../Sass/main.scss')

const RegisterApp = ({match}) => (
       <div>   
    <h1>React Store</h1>
   
    
    <h2>Login</h2>
    <Login />
  
    
    </div> 
);

export default RegisterApp;