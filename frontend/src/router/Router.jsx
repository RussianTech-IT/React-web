import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react';
import Start from '../pages/Start/Start'
import Loader from '../pages/components/Loader/Loader'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Suspense>

  )
}

export default Router