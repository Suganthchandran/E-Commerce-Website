import React from 'react'
import '../styles/Login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-head'>Admin Panel</h1>
            <form>
                <div className='login-element-container'>
                    <p className='login-label'>Email</p>
                    <input className='login-input' type='email' placeholder='your@email.com' required />
                </div>
                <div className='login-element-container'>
                    <p className='login-label'>Password</p>
                    <input className='login-input' type='password' placeholder='Enter your password' required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
