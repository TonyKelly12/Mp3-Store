import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function loginSubmit(values) {
  // simulate server latency
  return sleep(500).then(() => {
   //Checks to see if the user exist
    if (!['tony', 'james', 'reggie', ].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
      //checks to see if the password matches
    } else if (values.password !== 'redux-form') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else {
      //if all passes
      return(dispatch, getState) => {
        //get the state of the form from the formReducer set as form
        const form = getState().form;
        const loggedAdmin = {
          userName: form.admin.username.value,
          password: form.admin.email.value,
        };
        //TODO: Add Bcrypt to admin!!!!!!!!
        dispatch({
          type: LOGIN_ADMIN,
          loggedAdmin,
        });



        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      }
      
    }
  })
}

export default loginSubmit