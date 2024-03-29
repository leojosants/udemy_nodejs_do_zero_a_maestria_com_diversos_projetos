
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flas = require('express-flash');
const flash = require('express-flash');
const app = express();
const conn = require('./db/conn');

// MODELS
const Tought = require('./models/Tought');
const User = require('./models/User');

// IMPORT ROUTES
const toughtsRoutes = require('./routers/toughtsRoutes');
const authRoutes = require('./routers/authRoutes');

// IMPORT CONTROLLER
const ToughtController = require('./controllers/ToughtController');

// TEMPLATE ENGINE
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));    //  CONFIGURANDO O BODY
app.use(express.json());                            //  CAPTURANDO O BODY EM JSON

// SESSION MIDDLEWARE
app.use(
    session(
        {
            name: 'session',
            secret: 'nosso_secret',
            resave: false,
            saveUninitialized: false,

            store: new FileStore(
                {
                    logFn: function () { },
                    path: require('path').join(require('os').tmpdir(), 'session')
                }
            ),

            cookie: {
                secure: false,
                maxAge: 3600000,
                expires: new Date(Date.now() + 3600000),
                httpOnly: true
            }
        }
    )
);

app.use(flash());                   //  FLASH MESSAGES
app.use(express.static('public'));  //  ACESSANDO PASTA ESTÁTICA

// SET SESSION TO RES
app.use((req, res, next) => {
    if (req.session.userid) { res.locals.session = req.session }
    next();
});

// ROUTES
app.use('/toughts', toughtsRoutes);
app.use('/', authRoutes);

app.get('/', ToughtController.showToughts);

// CONEXÃO COM BD
// conn.sync({ force: true })   //  RESETA OBD
conn.sync()
    .then(() => { app.listen(3000) })
    .catch((err) => console.log(err));