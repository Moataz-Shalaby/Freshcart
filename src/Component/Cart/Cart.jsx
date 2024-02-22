import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import { Puff } from 'react-loader-spinner';
import axios from 'axios';

export default function Cart() {

  let {getCartItems , deleteCartItems , updateCartItems} = useContext(CartContext);
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getItems(numOfCartItems){
    if (numOfCartItems = 0) {
      setLoading(true)
    }
    let {data} = await getCartItems();
    setCart(data)
    setLoading(false)

  }

  async function deleteItem(id){
    setLoading(true);
    let {data} = await deleteCartItems(id);
    setCart(data)
    setLoading(false)

  }

  async function clearCart(){
    let {data} = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{
      headers : {
        token : localStorage.getItem('userToken')
      }
    });
    setCart(data)
    setLoading(false)

  }

  async function updateCart(id , count){
    setLoading(true);
    if (count < 1 ) {
      let {data} = await deleteCartItems(id);
      setCart(data);
    }else {
      let {data} = await updateCartItems(id , count);
      setCart(data)
      setLoading(false)
    }
    
    

  }

  useEffect(()=>{
    getItems()
  } , [])

  return <>
  
  <h2 className='pt-1 text-center'>Cart</h2>

  <div className="bg-main-light p-2 mt-5">
  {loading? 
  <div className="row justify-content-center align-items-center vh-100">
    <Puff
  visible={true}
  height="100"
  width="100"
  color="#9BABB8"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass="d-flex justify-content-center"
  />
  </div> : <>
  <p className='text-main'> Your Cart Items : {cart.numOfCartItems}</p>
  <p className='text-main'> Total Cart Price : {cart.data.totalCartPrice} EGP </p>
  {cart.data.products.map(product => <div key={product.product.id} className="row align-items-center border-bottom border-1 p-2 m-0">
    <div className="col-md-2">
      <div className="img">
        <img src={product.product.imageCover} className='w-100' alt={product.product.title} />
      </div>
    </div>
    <div className="col-md-10 d-flex justify-content-between">
      <div className="item">
        <h3 className='h5 fw-bold'>{product.product.title.split(' ').splice(0,3).join(' ')}</h3>
        <h6 className='text-main fw-bold'> Price : {product.price} EGP </h6>
        <button onClick={()=> deleteItem(product.product.id)} className='btn btn-sm m-0 p-0'><i className='fas fa-trash-can text-danger'></i> Remove </button>
      </div>
      <div className="count">
        <button onClick={()=> updateCart(product.product.id , product.count +1)} className='btn btn-md brdr btn-outline-secondary'>+</button>
        <span className='mx-3 '>{product.count}</span>
        <button onClick={()=> updateCart(product.product.id , product.count -1)} className='btn brdr btn-outline-secondary'>-</button>
      </div>
    </div>
  </div>)}
  </>}
  </div>
  </>
}
