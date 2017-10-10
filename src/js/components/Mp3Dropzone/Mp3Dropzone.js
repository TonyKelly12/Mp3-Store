import React, { Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import {Field, reduxForm, Form,SubmissionError  } from 'redux-form';
import BucketName from './bucketName';



const FILE_FIELD_NAME = 'song';


var formData = new FormData();

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




class Mp3Dropzone extends Component {
    constructor(props) {    // fires before component is mounted    
        super(props); 
        
        // makes this refer to this component
            this.state = {
                
                isAuthenicated:{},
                acceptedFiles: [],
                rejectedFiles: [],
                
            } 
        }
        static propTypes = {
            handleSubmit: PropTypes.func.isRequired,
            reset: PropTypes.func.isRequired,
          };
        
          
          
               
          onSubmit(data) {
            
            
         
            var body = new FormData();
            Object.keys(data).forEach(( key ) => {
              body.append(key, data[ key ]);
            });
             
           
          
        
            console.info('POST',  formData);
            console.info('This is expected to fail:');
            fetch(`http://localhost:9000/admin/upload`, {
              method: 'POST',
              body: body,
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
          }
              
         
            render() {
              const {
                handleSubmit,
                reset,
              } = this.props;
              return (
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <div>
                    <label htmlFor={FILE_FIELD_NAME}>Files</label>
                    <Field
                      name={FILE_FIELD_NAME}
                      component={renderDropzoneInput}
                      type='file'
                    />
                  </div>
                  <div>
                    <button type="submit">
                      Submit
                    </button>
                    <button onClick={reset}>
                      Clear Values
                    </button>
                  </div>
                </form>
              );
            }
          }
          
        Mp3Dropzone = reduxForm({
          form: 'upload',
        })(Mp3Dropzone);

        const mapStateToProps = (state, ownProps) => {
          return {
              activeAdmin: state.activeAdmin
          }
      }

      export default connect(mapStateToProps) (Mp3Dropzone);
      
  
  //Exports state and connects it to UserDetail component only
  