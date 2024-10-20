import React, { useState } from 'react'
import '../styles/Login.css'
import Title from '../components/Title'

const Login = () => {

  const [currentState,setCurrentState] = useState('Sign Up');

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-heading-container'>
            <Title title2={currentState} size={'2.5rem'} position={'start'}/>
        </div>
        {currentState === 'Login' ? '' : <input type='text' placeholder='Name' className='login-input' required /> }
        <input type='email' placeholder='Email' className='login-input' required />
        <input type='password' placeholder='Password' className='login-input' required />
        <div className='login-forgot-password'>
          <div><p style={{cursor:'pointer'}}>Forgot your Password ?</p></div>
          <div>
            {
              currentState === 'Login' 
              ?
              <p style={{cursor:'pointer'}} onClick={()=> setCurrentState('Sign Up')}>Create Account</p>
              :
              <p style={{cursor:'pointer'}} onClick={()=> setCurrentState('Login')}>Login Here</p>
            }
          </div>
        </div>
        <button className='login-button'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
