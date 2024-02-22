import React from 'react'
import style from './MainSlider.module.css'
import slide1 from '../../Assets/images/slider-image-1.jpeg'
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide3 from '../../Assets/images/slider-image-3.jpeg'
// import image1 from '../../Assets/images/1.png'
import image1 from '../../Assets/images/1.jpg'
import image2 from '../../Assets/images/2.jpeg'
import Slider from 'react-slick'


export default function MainSlider() {

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

  return <>
  
  <div className="row gx-0">
    <div className="col-md-9">
      <Slider {...settings}>
        <img src={slide1} height={350} className='w-100' alt="" />
        <img src={slide2} height={350} className='w-100' alt="" />
        <img src={slide3} height={350} className='w-100' alt="" />
        
      </Slider>
    </div>
    <div className="col-md-3">
      <div className="images">
        <img src={image1} height={175} className='w-100' alt="" />
        <img src={image2} height={175} className='w-100' alt="" />
      </div>
    </div>
  </div>
  </>
}
