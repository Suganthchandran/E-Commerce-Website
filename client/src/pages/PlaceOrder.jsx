import React, { useContext, useState } from 'react'
import '../styles/PlaceOrder.css'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='placeorder'>

      {/* Left Side */}
      <div className='placeorder-left'>
        <div style={{ margin: '2rem 0' }}>
          <Title title1={'DELIVERY'} title2={'INFORMATION'} size={'2rem'} position={'start'} />
        </div>
        <div className='placeorder-info-form-pair'>
          <input className='placeorder-info-form-input' type='text' placeholder='First name' />
          <input className='placeorder-info-form-input' type='text' placeholder='Last name' />
        </div>
        <input className='placeorder-info-form-input' type='text' placeholder='Email address' />
        <input className='placeorder-info-form-input' type='text' placeholder='Street' />
        <div className='placeorder-info-form-pair'>
          <input className='placeorder-info-form-input' type='text' placeholder='City' />
          <input className='placeorder-info-form-input' type='text' placeholder='State' />
        </div>
        <div className='placeorder-info-form-pair'>
          <input className='placeorder-info-form-input' type='number' placeholder='Zipcode' />
          <input className='placeorder-info-form-input' type='text' placeholder='Country' />
        </div>
        <input className='placeorder-info-form-input' type='number' placeholder='Phone' />
      </div>

      {/* Right Side */}
      <div className='placeorder-right'>

        <div className='placeorder-amount'>
          <CartTotal />
        </div>

        <div className='placeorder-payment-main'>
          <Title title1={'PAYMENT'} title2={'METHOD'} size={'2rem'} position={'start'} />

          {/* Payment Method Selection */}

          <div className='placorder-payment-method-list'>
            <div onClick={() => setMethod('stripe')} className='placeorder-payment-method'>
              <p className={`placeorder-payment-method-ptag ${method === 'stripe' ? 'placeorder-method-active' : ''} `}></p>
              <img className='placeorder-payment-image' src={assets.stripe_logo} alt='' />
            </div>
            <div onClick={() => setMethod('razorpay')} className='placeorder-payment-method'>
              <p className={`placeorder-payment-method-ptag ${method === 'razorpay' ? 'placeorder-method-active' : ''} `}></p>
              <img className='placeorder-payment-image' src={assets.razorpay_logo} alt='' />
            </div>
            <div onClick={() => setMethod('cod')} className='placeorder-payment-method'>
              <p className={`placeorder-payment-method-ptag ${method === 'cod' ? 'placeorder-method-active' : ''} `}></p>
              <p className='placeorder-payment-cod'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="placeorder-payment-container">
            <button onClick={()=>navigate('/orders')} className="placeorder-payment-button">PLACE ORDER</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
