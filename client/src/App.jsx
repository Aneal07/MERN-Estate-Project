import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import PriviteRoute from './components/PriviteRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Signup/>} />     
      <Route path='/about' element={<About/>} />
       <Route path='/listing/:listingId' element={<Listing />} />
      <Route  element={<PriviteRoute/>}>
      <Route path='/profile' element={<Profile />} />
      <Route path='/create-listing' element={<CreateListing />} />
      <Route path='/update-listing/:listingId' element={<UpdateListing />} />
      </Route> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
