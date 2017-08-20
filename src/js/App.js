import React from 'react';
import List from './List';
import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail'
require('../Sass/main.scss')

const App = () => (
       <div>   
    <h1>React Store</h1>
    <hr/>
    <h2>User List</h2>
    <UserList />
    <hr/>
    <h2>User Details</h2>
    <UserDetail />
    <List />
    </div> 
);

export default App;