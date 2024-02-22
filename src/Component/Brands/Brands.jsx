import React, { useEffect } from 'react'
import style from './Brands.module.css'
import { getBrands } from '../../Redux/brandsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Puff } from 'react-loader-spinner'
import { Link } from 'react-router-dom'





export default function Brands() {

  let {brands , isLoading} = useSelector(({brand}) => brand)

  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getBrands())
  } , [])


  return <>
  
  <h2 className='text-center mt-5'>All Brands</h2>
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
  </div> : <div className="row py-5">
    {brands.map(brand => 
      <div key={brand.id} className="col-md-3">
      <div className="product p-2 overflow-hidden">
        <Link to={`/branddetails/${brand._id}`}>
        <div className="cardimg">
        <img src={brand.image} className='w-100' alt={brand.name} />
        </div>
        <div className="desc p-5 ">
        <p className='pt-  text-center mt-0 mb-10'>{brand.name}</p>
        </div>
        </Link>
        
      </div>
    </div>)}
    </div>}
  </>
}
