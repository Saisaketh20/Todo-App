const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const routes = require("./Routes/Todoroute");

app.use(routes);

mongoose.connect("mongodb://localhost:27017/todo_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})



app.listen(9002,() => {
    console.log("started at port 9002")
})