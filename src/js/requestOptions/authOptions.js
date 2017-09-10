import React, { Component } from 'react'

import adminHeaders from '../sagas/appSaga'

export default function loginAuthToken(token){
     
    if(token){
        adminHeaders.append('Authorized', token);
      
    } else{
        adminHeaders.delete('Authorized');
    }
}