"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getProductData } from '../redux/productSlice';

const page = () => {
    const {productLoading,productError,productArray} = useSelector(store=>store.productReducer);
    console.log(productLoading,productError,productArray)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getProductData());      
    },[])
  return (
    <div>
        {productLoading?<div>Loading...</div>:productError?<div>{productError}</div>:productArray.length && productArray.map(({id,title})=><div key={id}>{title}</div>)}
    </div>
  )
}

export default page