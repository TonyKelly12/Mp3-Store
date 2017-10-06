import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import {startSubmit, stopSubmit} from 'redux-form';
//import loginOptions from '../requestOptions/loginOptions';
//import loginAuthToken from '../requestOptions/authOptions';
import axios from 'axios';
import jwt from 'jsonwebtoken';
//BElow is setting default header for login request
var defaultHeader = {'Content-Type': 'application/json'};
var adminHeaders = new Headers(defaultHeader);

function uploadData(data) {
   
  axios.post('http://localhost:9000/admin/upload', data).then((response) => {
    console.log(response); // do something with the response
  });
  
  
  /*return fetch('http://localhost:9000/admin/upload', {
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
      });*/
  } ; 
  

  

  //Below is adding the authorization header to every new request for authorization pages


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* callUpload(action) {
  console.log(action.data);
   yield put( startSubmit('upload'));
   let error = {};
    const result = yield call(uploadData, action.data)
    if (result.error) {
       yield put({type: "UPLOAD_FAILED", error: result.error});
       error = result.error
    } else {
        console.log('call upload function ran')
       
        
     
       yield put({type: "UPLOAD_SONG", payload: data});
    }
   yield put(stopSubmit('upload',error));
 }
 

 

 /*
   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
   Allows concurrent fetches of user.
 */
 function* uploadSaga() {
   console.log('upload saga running')
   yield takeEvery("REQUEST_UPLOAD", callUpload);
 }



 

 
 export default function* root(){
     yield[
         fork(uploadSaga),
         
     ];
 } 