const express = require('express');
const server = express();
server.use(express.json());


server.get('/to-dos', (req, res) => {
    return res.json(to-dos);
});

server.listen(process.env.PORT || 5000, () => {
    console.log("rodando na porta 5000");
});

