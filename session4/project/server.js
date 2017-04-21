const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./routes');
const apiRouter = require('./routes/api');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:test123@ds111851.mlab.com:11851/nodelearning');


app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'my node trial app',
    resave: false,
    cookie: {
        maxAge: 60000
    }
}));
app.use(bodyParser.json());

app.use((req, res, next) => {    
    next();
});

app.use(express.static(path.join(__dirname,'public')));

app.use('/', router);

app.use('/api', apiRouter);


app.listen(3000, () => {
    console.log('listening on 3000')
});

process.on('uncaughtException', (err) => {

});

