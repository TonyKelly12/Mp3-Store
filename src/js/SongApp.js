import React from 'react';

import AdminDetail from './containers/adminContainer/admin-detail';
import Mp3Dropzone from './components/Mp3Dropzone/dropzoneIndex';
import UserList from './containers/userContainers/user-list';
import UserDetail from './containers/userContainers/user-detail';
require('../Sass/main.scss');

class SongApp extends React.Component {
    //const {handleSubmit, pristine, reset, submitting} = props
    
  
    
    
    render() {
        return(
       <div>   
    <h1>React Store</h1>
   
    
    <h2>Upload Songs Below</h2>
    <Mp3Dropzone />
    </div>
);
    }
}
export default SongApp;