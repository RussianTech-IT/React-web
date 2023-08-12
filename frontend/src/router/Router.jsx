import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react';
import Start from '../pages/Start/Start'
import Loader from '../../src/components/Loader/Loader'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog';
import Feedback from '../pages/Feedback/Feedback';

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Suspense>
  )
}

export default Router