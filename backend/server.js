const express = require('express')
const app = express()
const PORT = 5000
const jsonFile = require("./database/data.json")

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

app.get("/api/users", (req, res) => {
    res.json(jsonFile)
})

app.listen(PORT, () => { console.log("Server started in http://localhost:5000") })