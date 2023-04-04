
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const conn = require('./db/conn');
const Task = require('./models/Task');
const taskRoutes = require('./routes/tasksRouters');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));    //  CONFIGURANDO O BODY
app.use(express.json());                            //  CAPTURANDO O BODY EM JSON    
app.use(express.static('public'));                  //  ACESSANDO PASTA ESTÁTICA
app.use('/tasks', taskRoutes);                      //  ROTAS

conn.sync()
    .then(() => { app.listen(3000) })
    .catch((error) => console.log(error));