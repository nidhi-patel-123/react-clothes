import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Testimonials from './pages/Testimonials'
import Cart from './pages/Cart'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'
import PlacrOrder from './pages/PlacrOrder'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Verify from './pages/Verify'

function App() {
  return (
    <main className='overflow-hidden text-[#404040]'>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
       {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlacrOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
    </main>
  )
}

export default App