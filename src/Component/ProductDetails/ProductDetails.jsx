import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Puff } from 'react-loader-spinner'
import Slider from "react-slick";
import { Helmet } from 'react-helmet'
import icon from '../../Assets/images/favicon.ico'

export default function ProductDetails() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000
  };

  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)

  let {id} = useParams()

  async function getProductDetails(id) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setDetails(data.data)
    setLoading(false)
  }

  useEffect(()=>{
    getProductDetails(id)
  } , [])

  return <>
  
  <h2 className='py-1 text-center'>ProductDetails</h2>

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
  <>
  <Helmet>
  <meta charSet="utf-8" />
  <title>{details.title}</title>
  <link rel="icon" href={icon} />
  </Helmet>
  <div className="row align-items-center">
    <div className="col-md-4">
      <Slider {...settings}>
      {details.images.map((image , index) => <img src={image} key={index} className='w-100' alt={details.title} />)}
    </Slider>
  

      </div>
      <div className="col-md-8">
      <div className="details">
        <h3 className='h5'>{details.title}</h3>
        <p className=' px-3'>{details.description}</p>
        <span className='font-sm text-main fw-bolder'>{details.category.name}</span>
        <div className="d-flex py-3 align-items-center justify-content-between">
          <span className='font-sm'>{details.price} EGP</span>
          <span className='font-sm'>
            <i className='fas fa-star rating-color me-1'></i>
            {details.ratingsAverage}</span>
        
        
      </div>
      <button className='btn btn-sm bg-main w-100 text-main-ligt'>add to cart</button>
      </div>
    </div>
  </div>
  </>
  
  }
  </>
}
