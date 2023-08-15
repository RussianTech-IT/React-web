const express = require('express')
const app = express()
const PORT = 5000
const jsonFile = require("../database/data.json")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.get('/api', (req, res) => {
    res.json("You inside API")
})

app.get("/api/users", (req, res) => {
    res.json(jsonFile)
})

app.listen(PORT, () => { console.log("Server started in http://localhost:5000") })