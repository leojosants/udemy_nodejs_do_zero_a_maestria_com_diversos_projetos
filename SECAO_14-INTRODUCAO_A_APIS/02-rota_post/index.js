// IMPORTANTE EXPRESS
const express = require('express');

// INICIALIZANDO EXPRESS
const app = express();

// LENDO A REQUISIÇÃO EM JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROTAS / ENDPOINTS
app.get('/', (req, res) => { res.json({ message: 'Primeira rota criada com sucesso!' }) });

app.post('/createProduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    console.log(name);
    console.log(price);

    res.json({ message: `O produto ${name} foi criado com sucesso!` });
});

// ESCUTANDO PORTA
app.listen(3000);