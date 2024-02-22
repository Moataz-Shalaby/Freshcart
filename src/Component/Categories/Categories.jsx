import React, { useEffect } from 'react'
import style from './Categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redux/CategoriesSlice'
import { Puff } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

export default function Categories() {

  let {categories , isLoading} = useSelector(({category}) => category)

  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCategories())
  } , [])


  return <>
  
  <h2>Categories</h2>

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
    {categories.map(category => 
      <div key={category._id} className="col-md-3">
      <div className="product p-2 overflow-hidden">
        <Link to={`/categorydetails/${category._id}`}>
        <div className="cardimg">
        <img src={category.image} height={300} className='w-100' alt={category.name} />
        </div>
        <div className="desc p-5 ">
        <p className='pt-  text-center mt-0 mb-10'>{category.name}</p>
        </div>
        </Link>
      </div>
    </div>)}
    </div>}
  </>
}
