import React, { Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import {Field, reduxForm, Form,SubmissionError  } from 'redux-form';
import BucketName from './bucketName';



const FILE_FIELD_NAME = 'files';
const FILE_FIELD_BUCKET ='bucketName';



const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
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
        
          
          
          onSubmit(data, bucketName) {
            console.log(bucketName);
            console.log(data);
            
            
            data.bucketName = bucketName;
            console.info('POST', data, bucketName);
            console.info('This is expected to fail:');
            axios({
                url: `http://localhost:9000/admin/upload`, //*** Note these are not single quotes ' they are ` */
                method: 'post',
                data: data,
               

                
                 
              })
               .then(response => res.status(200).json(response.data.data))
               .catch((error) => res.status(500).json(error.response.data));
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
                  />
                  <Field
                    name={FILE_FIELD_BUCKET}
                    component={BucketName}
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
  