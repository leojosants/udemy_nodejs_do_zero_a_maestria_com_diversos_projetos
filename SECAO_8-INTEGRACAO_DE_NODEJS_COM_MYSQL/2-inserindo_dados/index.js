
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();

// CONFIGURANDO O BODY
app.use(
    express.urlencoded({ extended: true })
);

// CAPTURANDO O BODY EM JSON    
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/books/insertbook', (req, res) => {

    const title = req.body.title;
    const pageqty = req.body.pageqty;

    // INTRUÇÃO DA QUERY
    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

    // EXECUÇÃO DA QUERY
    conn.query(sql, function (err) {

        if (err) { console.log(err); }
        res.redirect('/');
    })
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

    if (err) { console.log(err); }
    console.log('Conectou ao HeidiSQL!');
    app.listen(3000);
});