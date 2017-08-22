import React from 'react';


import Login from './components/Login'
import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail'
require('../Sass/main.scss')

class LoginApp extends React.Component {
    //const {handleSubmit, pristine, reset, submitting} = props
    
  
    
    
    render() {
        return(
       <div>   
    <h1>React Store</h1>
   
    
    <h2>Login</h2>
    <Login />
  
    
    </div> 
);
    }
}
export default LoginApp;