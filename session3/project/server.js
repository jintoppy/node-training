const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

const message = "Hi All. Welcome to NodeJS Class";

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/user', (req, res)=> {
    console.log(req.body);
    res.status(200).json({
        message: 'success'
    });
});

app.get('/', (req, res) => {
    res.render('index',{
        msg: message,
        users: [
            {
                name: 'user1',
                age: 10
            },
            {
                name: 'user2',
                age: 20
            }
        ]
    });
});


app.listen(3000, () => {
    console.log('listening on 3000')
});

