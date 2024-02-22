import React, { useContext, useEffect } from 'react'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'
import Products from './Component/Products/Products'
import Categories from './Component/Categories/Categories'
import Brands from './Component/Brands/Brands'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import NotFound from './Component/NotFound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { UserContext } from './Context/UserContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import { Toaster } from 'react-hot-toast'
import { Helmet } from 'react-helmet'
import icon from './Assets/images/favicon.ico'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import BrandDetails from './Component/BrandDetails/BrandDetails'
import CategoryDetails from './Component/CategoryDetails/CategoryDetails'
import Profile from './Component/Profile/Profile'



export default function App() {

  let routers = createBrowserRouter([
    {path: '' , element: <Layout/> , children: [
      {index: true , element: <ProtectedRoute><Home/></ProtectedRoute>},
      {path: 'cart' , element: <ProtectedRoute><Cart/></ProtectedRoute>},
      {path: 'products' , element: <ProtectedRoute><Products/></ProtectedRoute>},
      {path: 'productdetails/:id' , element: <ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path: 'branddetails/:id' , element: <ProtectedRoute><BrandDetails/></ProtectedRoute>},
      {path: 'categorydetails/:id' , element: <ProtectedRoute><CategoryDetails/></ProtectedRoute>},
      {path: 'categories' , element: <ProtectedRoute><Categories/></ProtectedRoute>},
      {path: 'brands' , element: <ProtectedRoute><Brands/></ProtectedRoute>},
      {path: 'profile' , element: <ProtectedRoute><Profile/></ProtectedRoute>},
      {path: 'register' , element: <Register/>},
      {path: 'login' , element: <Login/>},
      {path: '*' , element: <NotFound/>},

    ]}
  ])

  let {setUserToken} = useContext(UserContext);
  useEffect(()=>{

    if (localStorage.getItem('userToken')) {
      setUserToken(localStorage.getItem('userToken'))
    }
  } , [])

  return <>
  <Provider store={store}>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Fresh Cart</title>
    <link rel="icon" href={icon} />
    </Helmet>

  <RouterProvider router={routers}></RouterProvider>

  <Toaster/>
  </Provider>
  
  
  </>
}

