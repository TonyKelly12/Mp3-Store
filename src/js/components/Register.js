import React from 'react';
import {Field, reduxForm, Form} from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    console.log(input)
    return (
        <div className="input-row">
      <label>{label}</label>
      <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <Message error>{error}</Message>)}
        </div>
    </div>
  )}

const Register = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    
        return (
            <form onSubmit={handleSubmit}>
                
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

export default reduxForm({
    form: 'Register',
    
    }) (Register);
