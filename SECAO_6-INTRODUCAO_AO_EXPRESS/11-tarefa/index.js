// 
const express = require('express');
const app = express();

// variavel de ambiente
const port = 5000;

const path = require('path');

const users = require('./users');

// Ler o body
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Arquivos estáticos
app.use(express.static('public'));

const basePatch = path.join(__dirname, 'templates');

// Middleware
app.use('/users', users);

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(`${basePatch}/index.html`);
});

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePatch}/404.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`);
});