import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='app-main'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productid' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/placeorder' element={<PlaceOrder/>} />
      </Routes>

    </div>
  )
}

export default App