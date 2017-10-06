import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import {Field, reduxForm, Form,SubmissionError  } from 'redux-form'

function callUploadFile(data) {
  console.log('upload data below');
  console.log(data)
    return  axios({
      url: `http://localhost:9000/admin/upload`, //*** Note these are not single quotes ' they are ` */
      method: 'post',
      data: {
        data
            
      },
    })
     .then(response => res.status(200).json(response.data.data))
     .catch((error) => res.status(500).json(error.response.data));
  }
  

var goodFiles = []
var badFiles = []
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
      <section>
      <div>
        
    <div className="dropzone">
      <Dropzone
         accept="image/jpeg, image/png"
         onDrop = {
           (acceptedFiles, rejectedFiles) => {
             acceptedFiles.forEach(file => {
              //TODO: call a function to add file to accepted state []
               goodFiles.push(file);
               console.log(goodFiles)
             })
          
           }
           
         }
       >
        <p>Try dropping some files here, or click to select files to upload.</p>
        <p>Only *.jpeg and *.png images will be accepted</p>
      </Dropzone>
    </div>
    </div>
    <aside>
      <h2>Accepted files</h2>
      <ul>
        {
          goodFiles.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
        }
      </ul>
      <h2>Rejected files</h2>
      <ul>
        {
          badFiles.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
        }
      </ul>
    </aside>
  </section>
    )
  }


  class Mp3Dropzone extends Component{
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
              
              this.submit = (goodFiles) => {
                 //VALIDATION SECTION{f
                 console.log('submited files below')
                 console.log(goodFiles)
                 let error = {};
                 let isError = false;
                 //submit form to server
                   return uploadAction(goodFiles)
                   .then (data => {
                     console.log(data)
                   }); ;
                 }    
               }
    
      componentDidMount() {   
       // fires immediately after the initial render 
      // set state 
      } 
      
        
      render(){
          console.log(this.state);
          console.log(this.props.admin)
          return(
              <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div>
                  <Field
                    name="file"
                    component={renderField}
                    type="file"
                    label='Upload File'
                    />
                </div>
  
                 <input type="submit" value="Submit"/>
              </form>)               
      }  
  }
  
      Mp3Dropzone = reduxForm({form: 'dropzone'})(Mp3Dropzone);
      
      export default Mp3Dropzone;
  
  //Exports state and connects it to UserDetail component only
  