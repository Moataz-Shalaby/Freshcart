import React, { useEffect, useState } from 'react'
import style from './BrandDetails.module.css'
import { useParams } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'
import axios from 'axios'

export default function BrandDetails() {

  const [brand, setBrand] = useState({})
  const [loading, setLoading] = useState(true)

  
  let {id} = useParams()
  
  async function getBrandDetails(id){
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)

  setBrand(data.data)
  setLoading(false)
  }

  useEffect(()=>{
    getBrandDetails(id)
  } ,[])

  return <>
  


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
  </div> :
  <div className="row align-items-center">
    <div className="col-md-8">
    <div className="cardimg w-75 rounded py-2">
        <img src={brand.image} className='w-100 rounded' alt={brand.name} />
        </div>
        
    </div>
    <div className="col-md-4">
    <div className="desc p-5 ">
        <p className='pt-5 fs-1 fw-semibold text-center mt-0 mb-10 align-items-center justify-content-center'>{brand.name}</p>
        </div>
    </div>
  </div>
  
  }



  
  </>
  }