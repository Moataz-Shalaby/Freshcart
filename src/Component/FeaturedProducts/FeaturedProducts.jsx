import React, { useContext, useEffect, useState } from 'react'
import style from './FeaturedProducts.module.css'
import axios from 'axios'
import { Puff } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'






export default function FeaturedProducts() {
  

  function getProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  let {data , isLoading , isError , isFetching} = useQuery('featuredProducts' , getProducts);


  let {addToCart} = useContext(CartContext);

  async function postToCart(id){
    let {data} = await addToCart(id);
    if (data.status == 'success') {
      toast.success(data.message)
      
    }
  }


  return <>
  
  <h2 className='py-1'>FeaturedProducts</h2>
  {isLoading? 
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
  </div>


  : <div className="row gy-4">
    {data?.data.data.map(product =>
      <div key={product.id} className="col-lg-2">
      <div className="product p-2 overflow-hidden">
      <Link to={`/productdetails/${product.id}`}>
        <img src={product.imageCover} className='w-100' alt={product.title} />
        <span className='font-sm text-main fw-bold d-block pt-2'>{product.category.name}</span>
        <h3 className='h5'>{product.title.split(' ').splice(0,2).join(' ')}</h3>
        <div className="d-flex py-3 align-items-center justify-content-between">
          <span className='font-sm'>{product.price} EGP</span>
          <span className='font-sm'>
            <i className='fas fa-star rating-color me-1'></i>
            {product.ratingsAverage}</span>
        </div>
        </Link>
        <button onClick={()=> postToCart(product.id)} className='btn btn-sm bg-main w-100 text-main-ligt'>add to cart</button>
      </div>
    </div>)}
  </div>
  }
  </>
}
