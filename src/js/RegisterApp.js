import React from 'react';


import Register from './components/Register'
import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail'
require('../Sass/main.scss')

const RegisterApp = ({match}) => (
       <div>   
    <h1>React Store</h1>
   
    
    <h2>Register Form</h2>
    <Register />
  
    
    </div> 
);

export default RegisterApp;