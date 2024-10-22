import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {

  const [token, setToken] = useState('');


  return (
    <div className='app'>
      {token === "" ? <Login /> :
        <>
          <Navbar />
          <hr />
          <div className='app-main'>
            <Sidebar />
            <div className='app-content'>
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default App
