const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const usuariosRouter = require('./userController')
const toDosRouter = require('./toDoController')



router.get('/', (req, res) => {
    res.send('App online!')
});

router.use('/usuarios', usuariosRouter)
router.use('/todos', toDosRouter)

module.exports = router;
