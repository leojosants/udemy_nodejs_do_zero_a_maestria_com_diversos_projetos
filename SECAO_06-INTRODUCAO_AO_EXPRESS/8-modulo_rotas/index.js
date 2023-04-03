// 
const express = require('express');
const app = express();

// variavel de ambiente
const port = 3000;

const path = require('path');

const users = require('./users');

// Ler o body
app.use(
    express.urlencoded({ extended: true }),
);

app.use(
    express.json(),
);

const basePatch = path.join(__dirname, 'templates');

// Middleware
app.use(
    '/users', users
);

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(`${basePatch}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`);
});
