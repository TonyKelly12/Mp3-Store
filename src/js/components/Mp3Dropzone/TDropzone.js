import React, {Component} from 'react';
import PropTypes from 'prop-types'
//import{
 // dropzoneOptions
//} from './dropzoneUtil'
import Dropzone from '../../../../dropzone/dist/dropzone';
import {Field, reduxForm, propTypes, SubmissionError} from 'redux-form';
import {browserHistory} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function callUploadFile(file) {
  return fetch('http://localhost:9000/admin/upload', {
    method: 'POST',
    mode: 'cors',
    headers: {
      
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(file)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}



const renderField = ({ input, label, type, meta: { touched, error } }) =>(
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>
);

const submit = ({
      title = '',
      file = {}
    }, submitAction) => {

      //VALIDATION SECTION
      let error = {};
      let isError = false;

     
      if (title.trim() === '') {
        error.password = 'Passwords Incorrect';
        isError = true;
      }
      if (isError) {
        throw new SubmissionError(error);
      } else { 
        console.log(file)
        }}
   
class TDropzone extends Component{
    constructor(props) {    // fires before component is mounted    
        super(props); 
            const acceptedFiles = ['jpeg']
        // makes this refer to this component
            this.state = {
                
                isAuthenicated:{},
                acceptedFiles: [],
                rejectedFiles: [],
                bucketName:{}
            }
            
          
         }

    componentDidMount() {
       Dropzone.options.mp3Upload = {
        init: function(event) {
              this.on("addedfile", function(file) { 
                console.log(file); 
                callUploadFile(file);
              });
            
             }
             }
    }
    render(){
      
      return(
      <form action="/file-upload" className="dropzone" id='mp3Upload'>
      <div className="fallback">
        <input name="file" type="file" multiple />
      </div>
    </form>
      )
}
songUpload = reduxForm({
    form: 'songUpload', // a unique identifier for this form
 
  })(TDropzone);
}
export default TDropzone ;