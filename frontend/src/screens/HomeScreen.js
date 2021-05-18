//GOD IS GREAT
import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {listProducts} from '../actions/productActions.js';
import {useSelector} from 'react-redux';
import Product from '../components/Product.js';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';
//import data from '../../../backend/data.js';
const HomeScreen = () => {
  const dispatch = useDispatch();
 const productList = useSelector( state => state.productList);
 const { loading,error,products} = productList;
  useEffect(() => {
    dispatch(listProducts())
  },[dispatch])  
  return (
    <div>
    {loading ? <LoadingBox></LoadingBox>
    :
    error? <MessageBox variant="danger" vari>{error}</MessageBox> :
    <div className="row center">
      {
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      }
  
      </div>
    } 
    </div>
       
    )
}

export default HomeScreen
