const express = require('express');
const server = express();
server.use(express.json());

// parte de teste por enquanto sem pegar dados externos 

(async () => {
    const database = require('./db');
    const Usuario = require('./usuario');
    await database.sync();
    
    const novoUsuario = await Usuario.create({
        email: 'guilhermeamaral@frwk.com',
        senha: 'frameworksystem'
    })

    console.log(novoUsuario)
  })();

//


server.get('/to-dos', (req, res) => {
    return res.json(to-dos);
});

server.listen(process.env.PORT || 5000, () => {
    console.log("rodando na porta 5000");
});

