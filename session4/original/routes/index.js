const express = require('express');
const router = express.Router();

const message = "Hi All. Welcome to NodeJS Class";

router.get('/', function(req, res, next) {
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

router.get('/about', function(req, res){
    res.render('about');
});

module.exports = router;
