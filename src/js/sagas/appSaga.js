import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import {startSubmit, stopSubmit} from 'redux-form';
//import loginOptions from '../requestOptions/loginOptions';
//import loginAuthToken from '../requestOptions/authOptions';

import jwt from 'jsonwebtoken';
//BElow is setting default header for login request
var defaultHeader = {'Content-Type': 'application/json'};
var adminHeaders = new Headers(defaultHeader);

function loginAdmin(data) {
    return fetch('http://localhost:9000/admin/login', {
      method: 'POST',
      mode: 'cors',
      headers: adminHeaders ,
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
  

  function logoutAdmin() {
    return fetch('http://localhost:9000/admin/logout', {
      method: 'POST',
      mode: 'cors',
      headers: adminHeaders ,
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

  //Below is adding the authorization header to every new request for authorization pages
  function loginAuthToken(token){
    
   if(token){
       adminHeaders.append('Authorized', token);
     
   } else{
       adminHeaders.delete('Authorized');
   }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* callLogin(action) {
   yield put( startSubmit('login'));
   let error = {};
    const result = yield call(loginAdmin, action.data)
    if (result.error) {
       yield put({type: "USER_FETCH_FAILED", error: result.error});
       error = result.error
    } else {
        //const authKey = result.entityKey.id;
        //const user = result.entityData;
        const token = result;
        const admin = jwt.decode(token);
        //const adminDetail = result.entityData;
        admin.isAuthenticated = true;
        console.log(admin);
        localStorage.setItem('admin', admin);
        localStorage.setItem('jwtToken', token);
        //TODO: fix below function to set headers for future request
        loginAuthToken(token);
       
       yield put({type: "AUTH_ADMIN", payload: admin});
    }
   yield put(stopSubmit('login',error));
 }
 
 function* callLogout(action) {
 localStorage.removeItem('jwtToken', 'admin');
 loginAuthToken(false);
  logoutAdmin();
  
      
     
   }
 

 /*
   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
   Allows concurrent fetches of user.
 */
 function* loginSaga() {
   yield takeEvery("REQUEST_LOGIN", callLogin);
 }

 function* logoutSaga() {
  yield takeEvery("REQUEST_LOGOUT", callLogout);
}

 

 
 export default function* root(){
     yield[
         fork(loginSaga),
         fork(logoutSaga),
     ];
 } 