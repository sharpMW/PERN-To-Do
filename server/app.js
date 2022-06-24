const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create todo
app.post('/add', async (req, res)=>{
    try {
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1)",
            [description]
        )
        res.json(newTodo.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

//get all todos
app.get('/getAll', async (req, res)=>{
    try {
        const allToDo = await pool.query(
            "SELECT * FROM todo;"
        )
        res.json(allToDo.rows);
    } catch (err) {
        console.error(err.message);
    }
})
//get one todo
app.get('/getOne/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const oneToDo = await pool.query(
            `SELECT * FROM todo WHERE todo_id = ${id};`
        )
        res.json(oneToDo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo
app.put('/update/:id', async (req, res)=>{
    try {
        const  id  = req.params.id;
        const  description  = req.body.description;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]
        );
        res.json("Updated")
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo
app.delete('/delete/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const deleteTodo = await pool.query(
            `DELETE FROM todo WHERE todo_id = ${id}`
        )
        res.send(`Deleted id ${id}`)
    } catch (err) {
        console.error(err.message);
    }
})
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})