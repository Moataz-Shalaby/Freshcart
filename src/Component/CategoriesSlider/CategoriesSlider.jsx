import React from 'react'
import style from './CategoriesSlider.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function CategoriesSlider() {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000
  };

  function getCactegories(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  let {data} = useQuery('Categories' , getCactegories)
  return <>
  
  <div className="row">
  <Slider {...settings}>
        {data?.data.data.map( category => <div key={category._id} className="col-md-2">
          <Link to={`/categorydetails/${category._id}`}>
          <div className="image">
            <img src={category.image} height={250} className='w-100' alt="" />
            <span>{category.name}</span>
          </div>
          </Link>
        </div>)}
        
      </Slider>
  </div>
  </>
}
