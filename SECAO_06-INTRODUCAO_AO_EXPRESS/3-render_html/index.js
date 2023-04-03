// 
const express = require('express');
const app = express();

// variavel de ambiente
const port = 3000;

const path = require('path');

const basePatch = path.join(__dirname, 'templates');

app.get('/', (req, res) => {
    res.sendFile(`${basePatch}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`);
});