
const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const User = require('./models/User');
const app = express();

// CONFIGURANDO O BODY
app.use(express.urlencoded({ extended: true }));

// CAPTURANDO O BODY EM JSON    
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.get('/users/create', (req, res) => { res.render('addUsers'); });

app.post('/users/create', async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;

    let newsletter = req.body.newsletter;

    if (newsletter === 'on') { newsletter = true; }
    else { newsletter = false; }

    console.log(req.body);

    await User.create({ name, occupation, newsletter });

    res.redirect('/');

});

app.get('/', (req, res) => { res.render('home'); });

conn.sync()
    .then(() => { app.listen(3000); })
    .catch((error) => console.log(error));