// 
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

    const items = ['Item A', 'Item B', 'Item C'];

    res.render('dashboard', {items}); 
});

app.get('/post', (req, res) => {
    
    const post = {
        title: 'Aprender Node.Js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    };

    res.render('blogpost', { post });  
});

app.get('/', (req, res) => {
    
    const user = {
        name: 'Leonardo',
        surname: 'Santos',
        age: 38,
    };

    const ocupacao = 'Estudande';
    const auth = false;
    const approved = false;
    
    res.render(
        'home',
        { user: user, ocupacao, auth, approved }
    );

});

app.listen(3000, () => {
    console.log('App funcionando');
});