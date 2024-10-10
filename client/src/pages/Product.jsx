import React, { useContext, useEffect, useState } from 'react'
import '../styles/Product.css'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');

  const fetchProductdata = async () => {
    products.map((item)=>{
      if(item._id == productId) {
        setProductData(item)
        console.log(item)
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductdata();
  },[productId,products])

  return productData ? (
    <div className='product-details'>
      {/* Product Data */}
        <div className='product-detail-main'>
            {/* Product Images */}
            <div className='product-images-main'>
                <div className='product-images-list'>
                  {
                    productData.image.map((item,index)=>(
                       <img onClick={()=>setImage(item)} src={item} key={index} className='product-images'/> 
                    ))
                  }
                </div>
                <div className='product-active-image'>
                      <img style={{width:'100%',height:'auto'}} src={image} />
                </div>
            </div>

            {/* Product Info */}
            <div style={{flex:'1'}}>
                  <h1>{productData.name}</h1>
            </div>
        </div>
    </div>
  ) : <div style={{opacity:'0'}}></div>
}

export default Product
