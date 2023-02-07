// 
const express = require('express');
const app = express();

// variavel de ambiente
const port = 3000;

const path = require('path');
const basePatch = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => {

    const id = req.params.id;

    // Leitura da tabela users, resgatar um usuário do banco.
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePatch}/users.html`);

});

app.get('/', (req, res) => {
    res.sendFile(`${basePatch}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`);
});