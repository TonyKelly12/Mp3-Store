import React from 'react';
import {Field, reduxForm, Form} from 'redux-form'
import registerAdmin from '../actions/formActions/registerAdmin'

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
        <input {...input} placeholder={label} type={type}/> {touched && (error && <Message error>{error}</Message>)}
      </div>
    </div>
  )
}

class Register extends React.Component {
  //const {handleSubmit, pristine, reset, submitting} = props
  
  constructor(props){
    super(props);
    this.submit = (values) => {
      console.log(values);
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
            name="userName"
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
