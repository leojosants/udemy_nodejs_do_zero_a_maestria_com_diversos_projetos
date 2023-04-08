// IMPORTANTE EXPRESS
const express = require('express');

// INICIALIZANDO EXPRESS
const app = express();

// LENDO A REQUISIÇÃO EM JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROTAS / ENDPOINTS
app.get('/', (req, res) => { res.json({ message: 'Primeira rota criada com sucesso!' }) });

// ESCUTANDO PORTA
app.listen(3000);