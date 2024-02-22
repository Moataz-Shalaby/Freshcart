import React from 'react'
import style from './Profile.module.css'
import { jwtDecode } from 'jwt-decode'



export default function Profile() {

  let encodedToken = localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken);
  return <>
  
  <div className="info vh-100">
  <h2 className='text-center py-1'>Profile</h2>
  <h3 className='text-center h1 fw-semibold text-capitalize pt-5'>Hello : {decodedToken.name}</h3>
  </div>
  </>
}
