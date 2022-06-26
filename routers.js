//ROUTES
const express = require('express')
const router = express.Router()
const db = require('./db');
const Todo = db.todos;
//create todo
router.post('/add', async (req, res)=>{
    try {
        const newTodo = await Todo.create(req.body)
        res.status(200).send(newTodo)

    } catch (err) {
        console.error(err.message);
    }
});

//get all todos
router.get('/getAll', async (req, res)=>{
    try {
        const allToDo = await Todo.findAll();
        res.status(200).send(allToDo)
    } catch (err) {
        console.error(err.message);
    }
})
//get one todo
router.get('/getOne/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const oneToDo = await Todo.findOne( {
            attributes: ["todo_id"],
            where: {todo_id: id}
        })
        res.status(200).send(oneToDo)
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo
router.put('/update/:id', async (req, res)=>{
    try {
        const  id  = req.params.id;
        const  description  = req.body.description;
        const updateTodo = await Todo.update({
            description: description
        }, {
            where: {todo_id:id}
        })
        res.status(200).send(updateTodo)
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo
router.delete('/delete/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const deleteTodo = await Todo.destroy({
            where: {todo_id:id}
        })
        res.status(200).send(deleteTodo)
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;