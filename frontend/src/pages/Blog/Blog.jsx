import React, { useEffect, useState } from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import Loader from '../../components/Loader/Loader'

function Blog() {
  const [backendData, setBackend] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api/users").then(
      response => response.json()
    ).then(
      data => {
        setBackend(data)
      }
    )
  }, [])

  return (
    <div className="blog-page">
      <Navbar />
      <div>Blog</div>
      {(typeof backendData.users === 'undefined') ? (
        <h1>Loading...</h1>
      ) : (
        backendData.users.map((user, i) => (
          <p className='listUsers' key={i}>{i + 1}) {user}</p>
        ))
      )}

      <Footer />
    </div>
  )
}

export default Blog