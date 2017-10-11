import React, { Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import {Field, reduxForm, Form,SubmissionError, propTypes} from 'redux-form';
import BucketName from './bucketName';

import {bindActionCreators} from 'redux';
//GLOBAL VAR
const FILE_FIELD_NAME = 'song';


//This Function Renders React Dropzone
const renderDropzoneInput = (field) => {
  const song = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        type='file'
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {song && Array.isArray(song) && (
        <ul>
          { song.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}



const submit = ({
  song=[]}, uploadAction) => {
  
  let error = {};
  let isError = false;
  
  if (song ===[]){
    error.song = 'File is Required';
    isError = true;

  }if (isError){
    throw new SubmissionError(error);
  } else {
    
   
    //submit form to server
    uploadAction({song})
  }
}

const SongDropzone = ({handleSubmit, uploadAction}) =>(
 <form encType = 'multipart/form-data' onSubmit={handleSubmit((fields) => submit(fields, uploadAction))}>
        <div>
          <label htmlFor={FILE_FIELD_NAME}>Files</label>
          <Field
            name={FILE_FIELD_NAME}
            component={renderDropzoneInput}
            type='file'
          />
        </div>
        <div>
        <input type="submit" value="Upload Song"/>
          
        </div>
      </form>
    );
  

        
const Mp3Dropzone = reduxForm({
  form: 'upload',
})(SongDropzone);


export default Mp3Dropzone;
      
  
  //Exports state and connects it to UserDetail component only
  