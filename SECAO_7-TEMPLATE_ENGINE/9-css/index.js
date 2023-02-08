// 
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configuração do diretório dos partials
const hbs = exphbs.create(
    {
        partialsDir: ['views/partials'],
    }
);

app.engine(
    'handlebars',
    hbs.engine,
);

app.set(
    'view engine',
    'handlebars',
);

// Middleares definindo diretório para arquivos estáticos 
app.use(
    express.static('public')
);

app.get('/dashboard', (req, res) => {

    const items = ['Item A', 'Item B', 'Item C'];

    res.render(
        'dashboard',
        {items},
    );
    
});

app.get('/post', (req, res) => {
    
    const post = {
        title: 'Aprender Node.Js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    };

    res.render(
        'blogpost',
        {post},
    );  

});

app.get('/blog', (req, res) => {

    const posts = [
        {
            title: 'Aprender Node.Js',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender Node.js...',
            comments: 4,
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender Node.js...',
            comments: 4,
        },
        {
            title: 'Aprender Java',
            category: 'Java',
            body: 'Este artigo vai te ajudar a aprender Node.js...',
            comments: 4,
        }
    ];
   
    res.render(
        'blog',
        {posts},
    );
    
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
        {
            user: user,
            ocupacao,
            auth,
            approved,
        }
    );

});

app.listen(3000, () => {
    console.log('App funcionando');
});