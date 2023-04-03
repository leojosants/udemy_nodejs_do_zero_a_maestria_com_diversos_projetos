// 
const express = require('express');
const app = express();

// variavel de ambiente
const port = 3000;

const path = require('path');

// Ler o body
app.use(
    express.urlencoded({ extended: true }),
);

app.use(
    express.json(),
);

const basePatch = path.join(__dirname, 'templates');

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePatch}/userForm.html`);    
});

app.post('/users/save', (req, res) => {
    
    console.log(req.body);
    
    // Exatraindo dados do formulário
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e idade de ${age} anos!`);
    
    res.sendFile(`${basePatch}/userForm.html`);    

});

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