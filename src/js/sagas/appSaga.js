import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import {startSubmit, stopSubmit} from 'redux-form';

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
  

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* callLogin(action) {
   yield put( startSubmit('login'));
    const result = yield call(loginAdmin, action.data)
    if (result.errors) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
       errors = result.errors
    } else {
       yield put({type: "USER_FETCH_SUCCEEDED"});
    }
   yield put(stopSubmit('login',errors));
 }
 
 /*
   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
   Allows concurrent fetches of user.
 */
 function* loginSaga() {
   yield takeEvery("REQUEST_LOGIN", callLogin);
 }
 

 
 export default function* root(){
     yield[
         fork(loginSaga),
     ];
 } 