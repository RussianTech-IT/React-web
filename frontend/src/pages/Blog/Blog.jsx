import React, { useEffect, useState } from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CardBlog from '../../components/CardBlog/CardBlog'
import Loader from '../../components/Loader/Loader'

function Blog() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
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
          {loading ? (<Loader />) : (
            posts.map((post, index) => (
              <div key={index}>
                <CardBlog id={post.id} title={post.title} description={post.description} />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog