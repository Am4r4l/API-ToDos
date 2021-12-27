const express = require('express');
const bcrypt = require('bcrypt');
const routers = require('./src/controllers');

const app = express();

app.use(express.json());
app.use('/', routers)




app.listen(process.env.PORT || 5000, () => {
    console.log("rodando na porta 5000");
});