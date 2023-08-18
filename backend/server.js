const express = require('express')
const app = express()
const PORT = 5000
const jsonPosts = require("./database/posts.json")
const fs = require('fs')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// security send requiests header CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next()
})

// admin panel
app.get('/api', (req, res) => {
    res.json("You inside API")
})

app.get("/api/posts", (req, res) => {
    res.json(jsonPosts)
})

app.get("/api/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id)
    const post = jsonPosts.posts.find(post => post.id === postId)
    res.json(post)
})

// delete posts request
app.delete('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    fs.readFile('./database/posts.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let postsData = JSON.parse(data);
        let posts = postsData.posts;
        posts = posts.filter(post => post.id !== postId);

        postsData.posts = posts;

        fs.writeFile('./database/posts.json', JSON.stringify(postsData), 'utf8', err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json({ message: 'Post deleted successfully' });
        });
    });
});

// put posts request
app.put('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, description, text } = req.body;

    fs.readFile('./database/posts.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
      
        let jsonData = JSON.parse(data);
        let { posts } = jsonData; // Обратите внимание на это
      
        const updatedPosts = posts.map(post => {
          if (post.id === postId) {
            return {
              ...post,
              title: title || post.title,
              description: description || post.description,
              text: text || post.text
            };
          }
          return post;
        });
      
        jsonData.posts = updatedPosts; // Обратите внимание на это
      
        fs.writeFile('./database/posts.json', JSON.stringify(jsonData), 'utf8', err => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
          }
      
          res.json({ message: 'Post updated successfully' });
        });
    });
});

app.get('/api/posts/:id/:title', (req, res) => {
    const id = parseInt(req.params.id)
    const title = req.params.title
    res.json({ id, title });
});

app.listen(PORT, () => { console.log("Server started in http://localhost:5000") })