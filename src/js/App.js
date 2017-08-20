import React from 'react';
import List from './components/List';

import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail'
require('../Sass/main.scss')

const App = () => (
       <div>   
    <h1>React Store</h1>
    
    <h2>Beat List</h2>
    <List />
    </div> 
);

export default App;