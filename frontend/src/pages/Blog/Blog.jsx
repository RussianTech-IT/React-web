import React, { useEffect, useState } from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import Loader from '../../components/Loader/Loader'
import CardBlog from '../../components/CardBlog/CardBlog'

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error("Ошибка получения данных:", error);
      });
  }, []);

  return (
    <div className="blog-page">
      <Navbar />
      <div className="header-blog">
        <h1>Статьи</h1>
      </div>
      <div className="blog-component">
        <div className="container-article">
          {posts.map((post, index) => (
            <div key={index}>
              <CardBlog id={post.id} title={post.title} description={post.description} />
            </div>
          ))}
        </div>

        {/* {(typeof backendData.posts === 'undefined') ? (
        <h1>Loading...</h1>
      ) : (
        backendData.posts.map((data, i) => (
          <CardBlog key={i} title={data} />
        ))
      )} */}
      </div>
      <Footer />
    </div>
  )
}

export default Blog