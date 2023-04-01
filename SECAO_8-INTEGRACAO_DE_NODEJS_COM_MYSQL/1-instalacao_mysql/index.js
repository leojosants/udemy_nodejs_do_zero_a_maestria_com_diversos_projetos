
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

// CRIANDO CONEXÃO
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

// EXECUTANDO CONEXÃO
conn.connect(function (err) {

    if (err) {
        console.log(err);
    }

    console.log('Conectou ao HeidiSQL!');

    app.listen(3000);

})