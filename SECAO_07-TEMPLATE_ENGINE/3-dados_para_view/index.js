// 
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    
    const user = {
        name: 'Leonardo',
        surname: 'Santos',
        age: 38,
    };

    const ocupacao = 'Estudande de Desenvolvimento'
    
    res.render('home', { user: user, ocupacao });

});

app.listen(3000, () => {
    console.log('App funcionando');
});