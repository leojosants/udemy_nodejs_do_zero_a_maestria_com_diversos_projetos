
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const conn = require('./db/conn');
const Task = require('./models/Task');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// CONFIGURANDO O BODY
app.use(express.urlencoded({ extended: true }));

// CAPTURANDO O BODY EM JSON    
app.use(express.json());

// ACESSANDO PASTA ESTÁTICA
app.use(express.static('public'));

conn.sync()
    .then(() => { app.listen(3000) })
    .catch((error) => console.log(error));