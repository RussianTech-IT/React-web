import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react';
import Start from '../pages/Start/Start'
import Loader from '../pages/components/Loader/Loader'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog';

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Suspense>

  )
}

export default Router