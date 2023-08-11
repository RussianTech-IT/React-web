import React from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function Blog() {
  return (
    <div className="blog-page">
      <Navbar />
      <div>Blog</div>
      <Footer />
    </div>
  )
}

export default Blog