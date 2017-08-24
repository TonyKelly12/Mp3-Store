import React from 'react';
import {Field, reduxForm, propTypes} from 'redux-form'
import {browserHistory} from 'react-router';
import { SubmissionError } from 'redux-form'
function loginAdmin(data) {
  return fetch('http://localhost:9000/admin/login', {
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


const renderField = ({ input, label, type, meta: { touched, error } }) =>
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

  class Login extends React.Component {
    constructor(props){
      super(props);
      this.submit = ({ username='', password=''}) => {
       
        //VALIDATION SECTION
        let error = {};
        let isError = false;
  
      
        if (username.trim() ===''){
          error.username = 'Username is Required';
          isError = true;
        }
        
        if (password.trim() ===''){
          error.password = 'Passwords Incorrect'; 
          isError = true;
        }
        if (isError){
          throw new SubmissionError(error);
        } else {
          //submit form to server
          return loginAdmin({username, password})
          .then (data => {
            console.log(data)
          }); ;
        }
        
        
      }
    }

     render() {
 
         return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
       
        <div>  
        <input type="submit" value="Login"/>
          
         
        
        </div>
      </form>
    )
  }
}
  export default reduxForm({
    form: 'Login', // a unique identifier for this form
  })(Login)