/*import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function loginadmintest(values) {
  // simulate server latency
  return sleep(500).then(() => {

    //TODO: Turn this if statement into a switch
   //Checks to see if the user exist
            //TODO:  Change below to gcloud datastore
    if (['tony', 'james', 'reggie', ].includes(values.username)) {
      throw new SubmissionError({
        username: 'User already exist',
        _error: 'Login failed!'
      })
      //checks to see if the password matches
    } else if (values.password !== values.confirmPassword) {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Passwords do not match!'
      })
    } else {
      //if all passes
      return(dispatch, getState) => {
        //get the state of the form from the formReducer set as form
        const form = getState().form;
        const admin = {
          firstName: form.admin.name.value,
          lastName: form.admin.lastName.value,
          userName: form.admin.username.value,
          email: form.admin.email.value,
          password: form.admin.email.value,
        };
        //TODO: Add Bcrypt to admin!!!!!!!!
        dispatch({
          type: ADD_ADMIN,
          admin,
        });



        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      }
      
    }
  })
}

export default registerAdmin
*/