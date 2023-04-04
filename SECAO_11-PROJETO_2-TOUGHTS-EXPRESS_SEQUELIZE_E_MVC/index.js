
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flas = require('express-flash');
const app = express();
const conn = require('./db/conn');

// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');

// app.use(express.urlencoded({ extended: true }));    //  CONFIGURANDO O BODY
// app.use(express.json());                            //  CAPTURANDO O BODY EM JSON
// app.use(express.static('public'));                  //  ACESSANDO PASTA ESTÁTICA

conn.sync()
    .then(() => { app.listen(3000) })
    .catch((err) => console.log(err));