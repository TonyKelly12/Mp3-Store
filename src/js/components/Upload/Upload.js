import React from 'react';
import {Field, reduxForm, Form} from 'redux-form'

import { SubmissionError } from 'redux-form'

function uploadContent(data) {
  return fetch('http://localhost:9000/admin/upload', {
    method: 'POST',
    mode: 'cors',
    headers: {
      
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
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
        <input {...input} placeholder={label} type={type}/> {touched && (error && <div className="error">{error}</div>)}
      </div>
    </div>
  )
}

class Upload extends React.Component {
  //const {handleSubmit, pristine, reset, submitting} = props
  
  constructor(props){
    super(props);
    this.submit = ({file ={},title='', artist='',  bpm='', genre='', exclusive=''}) => {
     
      //VALIDATION SECTION
      let error = {};
      let isError = false;

      if (file ==={}){
        error.file = 'Please upload File';
        isError = true;
      }
      if (title.trim() ===''){
        error.firstName = 'First name isRequired';
        isError = true;
      }
      if (artist.trim() ===''){
        error.lastName = 'Last Name Required';
        isError = true;
      }
      
    
   
      
      if (isError){
        throw new SubmissionError(error);
      } else {
        //submit form to server
        return uploadAction({file,title, artist, bpm, genre, exclusive})
        .then (data => {
          console.log(data)
        }); ;
      }
      
      
    }
  }
  
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>

        <div>
          <Field
            name="title"
            component={renderField}
            type="text"
            label='Title'
            />
        </div>

        <div>
          <Field
            name="artist"
            component={renderField}
            type="text"
            label='Artist'
            />
        </div>

        <div>
          <Field
            name="bpm"
            component={renderField}
            type="email"
            label='BPM'
            />
        </div>

        <div>
        <Field name="genre" component="select">
        <option />
        <option value="HipHop">HipHop</option>
        <option value="R&B">R&B</option>
        <option value="Trap">Trap</option>
      </Field>
        </div>

        <div>
          <Field
            name="exclusive"
            component={renderField}
            type="checkbox"
            label='Exclusive'
            />
        </div>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
 Upload = reduxForm({form: 'upload'})(Upload);

export default Upload;
