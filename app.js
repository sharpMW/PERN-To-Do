require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

require('./db');
require('./todoModel');
const todoRouter = require('./routers');
app.use(todoRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})