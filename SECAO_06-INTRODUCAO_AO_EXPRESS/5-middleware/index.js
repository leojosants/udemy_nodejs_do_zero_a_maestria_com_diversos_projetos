// 
const express = require('express');
const app = express();

// variavel de ambiente
const port = 3000;

const path = require('path');
const basePatch = path.join(__dirname, 'templates');

// Construção do Middleware
const checkAuth = function (req, res, next) {
    
    req.authStatus = true;

    if (req.authStatus) {
        console.log('Está logado, pode continuar!');
        next();
    }
    else {
        console.log('Não está logado, faça o login pra continuar!');
        next();
    }

};

// Utilizando Middleware
app.use(checkAuth);

app.get('/', (req, res) => {
    res.sendFile(`${basePatch}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`);
});