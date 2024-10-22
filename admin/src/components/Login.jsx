import React, { useState } from 'react'
import '../styles/Login.css'

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const handleSubmit =  async (e) => {
        try {
            e.preventDefault();
            console.log(email)
            console.log(password)
        }
        catch(error) {

        }
    }

  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-head'>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <div className='login-element-container'>
                    <p className='login-label'>Email</p>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} className='login-input' type='email' placeholder='your@email.com' required />
                </div>
                <div className='login-element-container'>
                    <p className='login-label'>Password</p>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} className='login-input' type='password' placeholder='Enter your password' required />
                </div>
                <div className='login-button-container'>
                <button className='login-button' type='submit'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
