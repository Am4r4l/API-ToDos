const express = require('express');
const router = express.Router();

const listaToDos = [];

router.post('/', (req, res) => {
    const toDo = req.body;
    listaToDos.push(toDo);
    res.send('to-do cadastrado com sucesso!');
})

router.get('/', (req, res) => {
    res.json(listaToDos);
})

router.get('/:id', (req, res) => {
    res.json(listaToDos[req.params.id]);
})

module.exports = router;