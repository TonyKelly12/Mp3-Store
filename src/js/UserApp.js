import React from 'react';

import Login from './components/Login';
import Register from './components/Register'
import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail'
require('../Sass/main.scss')

const UserApp = ({match}) => (
       <div>   
    <h1>React Store Admin Page</h1>
    <hr/>
    <h2>User List</h2>
    <UserList />
    <hr/>
    <h2>User Details</h2>
    <UserDetail />
   
    
    
    </div> 
);

export default UserApp;