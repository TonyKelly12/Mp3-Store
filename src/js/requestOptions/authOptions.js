import React, { Component } from 'react'

import authHeader from '../sagas/appSaga'

export default function loginAuthToken(token){
     
    if(token){
        authHeader.append('Authorized', token);
      
    } else{
        authHeader.delete('Authorized');
    }
}