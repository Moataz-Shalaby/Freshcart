import React, { useEffect, useState } from 'react'
import style from './CategoryDetails.module.css'
import { Puff } from 'react-loader-spinner'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function CategoryDetails() {


  const [category, setBrand] = useState({})
  const [loading, setLoading] = useState(true)

  
  let {id} = useParams()
  
  async function getCategoryDetails(id){
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)

  setBrand(data.data)
  setLoading(false)
  }

  useEffect(()=>{
    getCategoryDetails(id)
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
        <img src={category.image} className='w-100 rounded' alt={category.name} />
        </div>
        
    </div>
    <div className="col-md-4">
    <div className="desc p-5 ">
        <p className='pt-5 fs-1 fw-semibold text-center mt-0 mb-10 align-items-center justify-content-center'>{category.name}</p>
        </div>
    </div>
  </div>
  
  }

  </>
}
