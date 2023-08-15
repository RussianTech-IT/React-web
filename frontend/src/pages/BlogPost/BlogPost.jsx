import React, { useState, useEffect } from 'react'

import './BlogPost.css'

function BlogPost() {

  const [text, setText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(response => response.json())
      .then(data => {
        const textValue = data.text;
        setText(textValue);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}


export default BlogPost