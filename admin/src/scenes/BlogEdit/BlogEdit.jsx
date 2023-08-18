import { Box, IconButton } from "@mui/material";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import ListPosts from "../../components/ListPosts/ListPosts";
import AddIcon from '@mui/icons-material/Add'
import { Link } from "react-router-dom";
function BlogEdit() {
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

  const handleAddClick = () => {
    // Handle add logic
    console.log("add")
  }

  return (
    <Box m="20px">
      <Header title="РЕДАКТИРОВАНИЕ БЛОГА" subtitle="Изменение состояния постов на клиентской части" />
      <Link to="/new-post">
      <IconButton disableRipple={true} className='add-button' onClick={handleAddClick}>
        <AddIcon />
        <p>Добавить</p>
      </IconButton>
      </Link>
      {
        posts.map((post, index) => (
          <div key={index}>
            <div>
              <ListPosts
                id={post.id}
                title={post.title}
                description={post.description}
                text={post.text}
              />
            </div>
          </div>
        ))}
    </Box>

  );
};

export default BlogEdit;