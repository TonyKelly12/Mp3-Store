import React, {Component} from 'react';
import PropTypes from 'prop-types'
//import{
 // dropzoneOptions
//} from './dropzoneUtil'

//import Dropzone from '../../../../dropzone/dist/dropzone';


import {Field, reduxForm, propTypes, SubmissionError} from 'redux-form';
import {browserHistory} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
        submitAction({username, password});
        }}
   
const TDropzone = ({handleSubmit, submitAction}) => (
<form onSubmit={handleSubmit((fields) => submit(fields, submitAction))}>
        <Field
          name="title"
          type="text"
          component={renderField}
          label="Title"
        />
        <Field
          name="mp3Uplaod"
          type="File"
          component={renderField}
          label="Mp3 uplaod"
        />
       
        <div>  
        <input type="submit" value="Song Upload"/>
          
         
        
        </div>
      </form>

);
const songUpload = reduxForm({
    form: 'songUpload', // a unique identifier for this form
 
  })(TDropzone);

export default songUpload;