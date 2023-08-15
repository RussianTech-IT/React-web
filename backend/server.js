const express = require('express')
const app = express()
const PORT = 5000
const jsonPosts = require("./database/posts.json")

// security send requiests header CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
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
    // Ваш код для обработки запроса по id
    // Например, можно найти пост с определенным id из jsonPosts и вернуть его
    const post = jsonPosts.posts.find(post => post.id === postId)
    res.json(post)
})
app.get('/api/posts/:id/:title', (req, res) => {
    const id = parseInt(req.params.id)
    const title = req.params.title
    // Далее можно выполнить необходимые действия, например, обработку данных и отправку ответа
    // Например, можно вернуть JSON с информацией об этой статье
    res.json({ id, title });
});

app.listen(PORT, () => { console.log("Server started in http://localhost:5000") })