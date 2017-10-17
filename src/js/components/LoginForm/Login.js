import React, {Component} from 'react';
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
      username = '',
      password = ''
    }, submitAction) => {

      //VALIDATION SECTION
      let error = {};
      let isError = false;

      if (username.trim() === undefined) {
        error.username = 'Username is Required';
        isError = true;
      }
      if (username.trim() === null) {
        error.username = 'Username is Required';
        isError = true;
      }
      if (username.trim() === '') {
        error.username = 'Username is Required';
        isError = true;
      }

      if (password.trim() === '') {
        error.password = 'Passwords Incorrect';
        isError = true;
      }
      if (isError) {
        throw new SubmissionError(error);
      } else { 
        submitAction({username, password});
        }}
   
const LoginForm = ({handleSubmit, submitAction}) => (
<form onSubmit={handleSubmit((fields) => submit(fields, submitAction))}>
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

);
const Login = reduxForm({
    form: 'login', // a unique identifier for this form
 
  })(LoginForm);

export default Login; 

  

