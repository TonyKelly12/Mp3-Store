import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Dropzone from '../../../../dropzone/dist/dropzone';
import {Field, reduxForm, propTypes, SubmissionError} from 'redux-form';
import {browserHistory} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


Dropzone.options.mp3Upload = {
  uploadMultiple: true,
  acceptedFiles: "image/jpeg",
  accept: function (file, done) {
    if (file.name == "justinbieber.jpg") {
      done("Naha, you don't.");
    } else {
      done();
    }
  },

  init: function (event) {
    this
      .on("addedfile", function (file) {
        console.log(file);
        acceptedFiles.unshift(file);

      });
  }
}


const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
    warning
  }
}) => {
  console.log(input)
  
  return (
    
    <div className="input-row">
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          className='dropzone'
          action="/file-upload"
          id='mp3Upload'/>
      </div>
    </div>
    ) }; 
   


     
var upload = () => {console.log(' upload working');}
    

var acceptedFiles = []
var rejectedFiles = []

const TDropzone = () => (
  
  <form action="/file-upload" className="dropzone" id='mp3Upload' onSubmit={upload(acceptedFiles)}>
          
         
          <div>  
          <input type="submit" value="Submit"/>
          </div>
          <section>

          <aside>
             <h2>Accepted files</h2>
             <ul>
               {
                acceptedFiles.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
               }
             </ul>
             <h2>Rejected files</h2>
             <ul>
               {
                 rejectedFiles.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
               }
             </ul>
           </aside>
          </section>
          <div className="fallback">
            <input name="file" type="file" multiple />
          </div>
        </form>
  
  );
     


     const mapDispatchToProps = (dispatch) => {return bindActionCreators({
      upload: upload
    }, dispatch)
}



export default TDropzone;