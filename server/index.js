require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controllers/controller'),
    authCtrl = require('./controllers/authController');
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());
app.use(session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 14},
        secret: SESSION_SECRET
    })
);

// auth endpoints
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.delete('/api/logout', authCtrl.logout)

//app endpoints
app.get('/api/user/:user_id', ctrl.getUserpage)
// app.get('/api/search', ctrl.search)
// app.put('/api/:user_id', ctrl.editProfile)

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('Your db has been connected!')
    app.listen(SERVER_PORT, () => console.log(`Server awaiting commands on port ${SERVER_PORT}`))
}).catch(error => console.log(error));