import React, { useContext, useEffect, useState } from 'react'
import '../styles/Collection.css'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [type,setType] = useState([]);
  const [clothing,setClothing] = useState([]);
  const [material,setMaterial] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));  // For deselecting the filter option (Untick the checkbox)
    }
    else {
      setCategory(prev => [...prev,e.target.value]);  // For selecting the filter option (Tick the checkbox)
    }
  }

  const toggleType = (e) => {
    if(type.includes(e.target.value)) {
      setType(prev => prev.filter(item => item!==e.target.value));
    }
    else {
      setType(prev => [...prev,e.target.value]);
    }
  }

  const toggleClothing = (e) => {
    if(clothing.includes(e.target.value)) {
      setClothing(prev => prev.filter(item => item!==e.target.value));
    }
    else {
      setClothing(prev => [...prev,e.target.value]);
    }
  }

  const toggleMaterial = (e) => {
    if(material.includes(e.target.value)) {
      setMaterial(prev => prev.filter(item => item!==e.target.value));
    }
    else {
      setMaterial(prev => [...prev,e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(type.length > 0) {
      productsCopy = productsCopy.filter(item => type.includes(item.type));
    }
    if(clothing.length > 0) {
      productsCopy = productsCopy.filter(item => clothing.includes(item.clothing));
    }
    if(material.length > 0) {
      productsCopy = productsCopy.filter(item => material.includes(item.material));
    }
    setFilterProducts(productsCopy);
  }

  useEffect(()=>{
    applyFilter();
  },[category,type,clothing,material,search,showSearch]);

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch(sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    sortProduct();
  },[sortType])

  // useEffect(()=>{
  //   console.log(category);
  // },[category])

  // useEffect(()=>{
  //   console.log(type);
  // },[type])

  // useEffect(()=>{
  //   console.log(clothing);
  // },[clothing])

  // useEffect(()=>{
  //   console.log(material);
  // },[material])
  
  return (
    <div className="collection">
      <div className="collection-filter-options">
        <p onClick={() => setShowFilter(!showFilter)} className="collection-filter-text">
          FILTERS
          <img className={`collection-filter-icon ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        <div className={`category-filter ${showFilter ? '' : 'hidden'}`}>
          <p className="category-title">CATEGORIES</p>
          <div className='categorise'>
            <p className='categorise-content'>
              <input type='checkbox' value={'Men'} onClick={toggleCategory} /> Men
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Women'} onClick={toggleCategory} /> Women
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Kids'} onClick={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        <div className={`category-filter ${showFilter ? '' : 'hidden'}`}>
          <p className="category-title">TYPE</p>
          <div className='categorise'>
            <p className='categorise-content'>
              <input type='checkbox' value={'Animewear'} onClick={toggleType} /> Animewear
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Topwear'} onClick={toggleType} /> Topwear
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Bottomwear'} onClick={toggleType} /> Bottomwear
            </p>
          </div>
        </div>

        <div className={`category-filter ${showFilter ? '' : 'hidden'}`}>
          <p className="category-title">CLOTHING</p>
          <div className='categorise'>
            <p className='categorise-content'>
              <input type='checkbox' value={'Shirt'} onClick={toggleClothing} /> Shirt
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'T-Shirt'} onClick={toggleClothing} /> T-Shirt
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Oversized T-Shirts'} onClick={toggleClothing} /> Oversized T-Shirts
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Hoodie'} onClick={toggleClothing} /> Hoodie
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Jeans'} onClick={toggleClothing} /> Jeans
            </p>
          </div>
        </div>

        <div className={`category-filter ${showFilter ? '' : 'hidden'}`}>
          <p className="category-title">MATERIAL</p>
          <div className='categorise'>
            <p className='categorise-content'>
              <input type='checkbox' value={'Cotton'} onClick={toggleMaterial} /> Cotton
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Denim'} onClick={toggleMaterial} /> Denim
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Polyester'} onClick={toggleMaterial} /> Polyester
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Ligra'} onClick={toggleMaterial} /> Ligra
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Nylon'} onClick={toggleMaterial} /> Nylon
            </p>
          </div>
        </div>
      </div>

      <div className='collection-right'>
          <div className='collection-right-up'>
            <Title title1={'ALL'} title2={'COLLECTION'} />
            
            <select onChange={(e)=>setSortType(e.target.value)} className='collection-sort'>
              <option value="relavent">Sort by: Relavent</option>
              <option value='low-high'>Sort by: Low to High</option>
              <option value='high-low'>Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Products */}
          <div className='collection-products'>
              {
                filterProducts.map((item,index)=>(
                  <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
              }
          </div>
      </div>
    </div>
  );
}

export default Collection;
