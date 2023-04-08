// IMPORTANTE EXPRESS
const express = require('express');

// INICIALIZANDO EXPRESS
const app = express();

// LENDO A REQUISIÇÃO EM JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROTAS / ENDPOINTS
app.post('/createProduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if (!name) {
        res.status(422).json({ message: "O campo 'name' é obrigatório!" });
        return;
    }

    console.log(name);
    console.log(price);

    res.status(201).json({ message: `O produto ${name} foi criado com sucesso!` });
});

// ROTAS / ENDPOINTS
app.get('/', (req, res) => { res.status(200).json({ message: 'Primeira rota criada com sucesso!' }) });

// ESCUTANDO PORTA
app.listen(3000);