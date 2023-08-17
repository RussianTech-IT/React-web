import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
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
    <div>
      s
      <h1>{post?.text}</h1>
    </div>
  );
}
export default BlogPost