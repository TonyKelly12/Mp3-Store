import React from 'react';

import AdminDetail from './containers/adminContainer/admin-detail';
import Login from './components/LoginForm/indexAdmin';
import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail';
require('../Sass/main.scss');

class LoginApp extends React.Component {
    //const {handleSubmit, pristine, reset, submitting} = props
    
  
    
    
    render() {
        return(
       <div>   
    <h1>React Store</h1>
   
    
    <h2>Login</h2>
    <Login />
    <h2>Admin Details</h2>
    <AdminDetail />
    
    </div> 
);
    }
}
export default LoginApp;