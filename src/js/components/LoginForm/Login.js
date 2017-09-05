import React, {Component} from 'react';
import {Field, reduxForm, propTypes, SubmissionError} from 'redux-form';
import {browserHistory} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {loginAdmin} from '../actions/formActions/login';

//import {authAdmin} from '../actions/formActions/action-authAdmin';

/*
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
} ;
*/

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
        
        /*submit form to server
        return loginAdmin({username, password}).then(data => {
          
          console.log(data)
          const authKey = data.entityKey.id;
          const user = data.entityData;
          const admin = {
            user: user,
            authKey: authKey,
            authStatus: true
          }
          
          console.log(admin);*/
         
          
              // Note: this won't work:
              // TodoActionCreators.addTodo('Use Redux')
          
              // You're just calling a function that creates an action.
              // You must dispatch the action, too!
          
              // This will work:
              //let action = authAdmin(admin,'AUTH_ADMIN')
              //dispatch(action)
          
          //.catch(error => console.log('error', error))
              
              //browserHistory.push('/');
          //bindActionCreators({authAdmin: authAdmin,}, dispatch)
          
        
      
    

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

  

