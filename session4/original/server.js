const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const apiRoutes = require('./routes/api');

//Set up default mongoose connection
mongoose.Promise = global.Promise;
const mongoDB = 'mongodb://admin:test123@ds111851.mlab.com:11851/nodelearning';
mongoose.connect(mongoDB);


const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));


app.post('/user', (req, res)=> {
    console.log(req.body);
    res.status(200).json({
        message: 'success'
    });
});

app.use('/', routes);
app.use('/api', apiRoutes);



app.listen(3000, () => {
    console.log('listening on 3000')
});

