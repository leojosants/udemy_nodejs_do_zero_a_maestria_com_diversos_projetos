// 
const express = require('express');
const app = express();

// variavel de ambiente
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`);
});