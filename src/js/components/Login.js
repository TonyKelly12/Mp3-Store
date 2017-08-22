import React from 'react';
import {Field, reduxForm, propTypes} from 'redux-form'
import loginSubmit from '../actions/formActions/login'

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
      this.submit = (values) => {
        console.log(values);
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