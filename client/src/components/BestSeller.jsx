import React, { useContext, useEffect, useState } from 'react'
import '../styles/BestSeller.css'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSeller,setBestSeller] = useState([]);
    console.log(bestSeller);

    useEffect(()=>{
        const BestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(BestProduct.slice(0,5));
    },[])

  return (
    <div className='bestseller'>
        <div>
          <Title title1={'BEST'} title2={'SELLER'} />
          <p className='bestseller-text'>Here Visit the Best Sellers of Diago and I hope you will buy and make your life happier and fruitfully</p>
        </div>
        <div className='bestseller-images'>
          {bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
    </div>
  )
}

export default BestSeller
