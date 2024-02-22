import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/cart-large-logo.svg'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'


export default function Navbar() {

  let {userToken , setUserToken} = useContext(UserContext)
  let {updateCartItems} = useContext(CartContext)
  const [cart, setCart] = useState({updateCartItems})
  let navigate = useNavigate()

  

  function logOut(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login')
  }
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to={'/'}>
      <img src={logo} alt="fresh cart" />
      <span>FreshCart</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {userToken !=null? <>
          <li className="nav-item">
          <Link className="nav-link" to={'/'}>Home {cart.numOfCartItems}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'cart'}>Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'products'}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'categories'}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'brands'}>Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'profile'}>Profile</Link>
        </li>
        
        </> : ''}
       
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex align-items-center">
          <i className='fa-brands fa-instagram me-3'></i>
          <i className='fa-brands fa-facebook me-3'></i>
          <i className='fa-brands fa-x-twitter me-3'></i>
          <i className='fa-brands fa-linkedin me-3'></i>
          <i className='fa-brands fa-youtube me-3'></i>
        </li>
        {userToken !=null? <>
          <li className="nav-item">
          <span onClick={logOut} className="nav-link cursor-pointer">Logout</span>
        </li>
        </> : <>
        <li className="nav-item">
          <Link className="nav-link" to={'register'}>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'login'}>Login</Link>
        </li>
        </>}
        
        
      </ul>
      
    </div>
  </div>
</nav>
  
  </>
}
