import React from 'react';
import {Field, reduxForm, Form,SubmissionError  } from 'redux-form'



function saveAdmin(data) {
  return fetch('http://localhost:9000/admin/register', {
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
        <input {...input} placeholder={label} type={type} /> {touched && (error && <div className="error">{error}</div>)}
      </div>
    </div>
  )
}

class Register extends React.Component {
  //const {handleSubmit, pristine, reset, submitting} = props
  
  constructor(props){
    super(props);
    this.submit = ({firstName='', lastName='', username='', email='', password='', confirmPassword=''}) => {
     
      //VALIDATION SECTION
      let error = {};
      let isError = false;

      if (firstName.trim() ===''){
        error.firstName = 'First name isRequired';
        isError = true;
      }
      if (lastName.trim() ===''){
        error.lastName = 'Last Name Required';
        isError = true;
      }
      if (username.trim() ===''){
        error.username = 'Username is Required';
        isError = true;
      }
      if (email.trim() ===''){
        error.email = 'Email is Required';
        isError = true;
      }
      if (password.trim() != confirmPassword.trim()){
        error.password = 'Passwords do not match';
        error.confirmPassword = 'Passwords do not match';
        isError = true;
      }
      if (isError){
        throw new SubmissionError(error);
      } else {
        //submit form to server
        return saveAdmin({firstName, lastName, username, email, password, confirmPassword})
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
            name="firstName"
            component={renderField}
            type="text"
            label='First Name'
            />
        </div>

        <div>
          <Field
            name="lastName"
            component={renderField}
            type="text"
            label='Last Name'
            />
        </div>

        <div>
          <Field
            name="username"
            component={renderField}
            type="text"
            label='Username'
            />
        </div>

        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            label='Email'
            />
        </div>

        <div>
          <Field
            name="password"
            component={renderField}
            type="password"
            label='Password'
            />
        </div>

        <div>
          <Field
            name="confirmPassword"
            component={renderField}
            type="password"
            label='Confirm Password'
            />
        </div>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
 Register = reduxForm({form: 'register'})(Register);

export default Register;
