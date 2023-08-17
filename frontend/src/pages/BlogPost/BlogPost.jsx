import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import './BlogPost.css'

function BlogPost() {
  const { id, title } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts", { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        console.log(data.posts)
      })
      .catch((error) => {
        console.error("Ошибка получения данных:", error);
      });
  }, []);

  const post = posts.find((post) => ((post.id === parseInt(id)) && (post.title === title.replace('%20', ' '))));

  return (
    <div className='blog-post-page'>
      <Navbar />
      <div className="back-page-post">
        <span className='btn-back-post'>
          <img src="../../icons/back_icon.svg" className='back-icon-post' height={40} alt="" />
          <a href="/blog" className='back-text-post'>Назад</a>
        </span>
      </div>
      <div className="container-post-content">
        <div className="title-post">
          <h1>{post?.title}</h1>
          <div className="block-content">
            <div className="text-post">
              <p>{post?.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost