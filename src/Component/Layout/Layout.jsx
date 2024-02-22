import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";
import errimg from '../../Assets/images/400 Error Bad Request-pana.png'

export default function Layout() {
  return <>
  
  <Navbar/>

  <div className="container">
    <Offline><div className="offline">
      <img src={errimg} className='w-50' alt="" />
      </div></Offline>
    <Outlet></Outlet>
  </div>

  <Footer/>
  </>
}
