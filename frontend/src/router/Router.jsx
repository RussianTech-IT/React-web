import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react';
import Start from '../pages/Start/Start'
import Loader from '../../src/components/Loader/Loader'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog';
import Feedback from '../pages/Feedback/Feedback';

// import languages pages
import Introduction from '../pages/languages/Introduction/Introduction'
import Python from '../pages/languages/Python/Python'
import Cpp from '../pages/languages/Cpp/Cpp'
import JavaScript from '../pages/languages/JavaScript/JavaScript'
import Swift from '../pages/languages/Swift/Swift'
import CSharp from '../pages/languages/CSharp/CSharp'
import HtmlCss from '../pages/languages/HtmlCss/HtmlCss'
import PHP from '../pages/languages/PHP/PHP'
import Java from '../pages/languages/Java/Java'
import Kotlin from '../pages/languages/Kotlin/Kotlin'
import Rust from '../pages/languages/Rust/Rust'

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/feedback' element={<Feedback />} />
        {/* languages routes */}
        <Route path='/language/introduction' element={<Introduction />} />
        <Route path='/language/python' element={<Python />} />
        <Route path='/language/cpp' element={<Cpp />} />
        <Route path='/language/javascript' element={<JavaScript />} />
        <Route path='/language/swift' element={<Swift />} />
        <Route path='/language/csharp' element={<CSharp />} />
        <Route path='/language/htmlcss' element={<HtmlCss />} />
        <Route path='/language/php' element={<PHP />} />
        <Route path='/language/java' element={<Java />} />
        <Route path='/language/kotlin' element={<Kotlin />} />
        <Route path='/language/rust' element={<Rust />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Suspense>
  )
}

export default Router