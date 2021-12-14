const express = require('express');
const router = express.Router();

const listaUsuarios = [];

router.post('/', (req, res) => {
    const usuario = req.body;
    listaUsuarios.push(usuario);
    res.send('Usuário cadastrado com sucesso!');
})

router.get('/', (req, res) => {
    res.json(listaUsuarios);
})

router.get('/:id', (req, res) => {
    res.json(listaUsuarios[req.params.id]);
})

module.exports = router;