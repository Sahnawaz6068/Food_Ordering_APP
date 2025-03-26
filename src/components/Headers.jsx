import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from './Home'
import About from './NavBar/About'
import Cart from './NavBar/Cart'

function Headers() {
  return (
    <>
      <div >
        <div className='flex'>
          <img className='w-16 h-16 rounded-full' src="logo.webp" alt="" />
        </div>
        <BrowserRouter>
          <div className='flex'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Headers