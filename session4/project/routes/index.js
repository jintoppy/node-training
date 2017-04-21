const express = require('express');

const router = express.Router();


const message = "Hi All. Welcome to NodeJS Class";
router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/', (req, res) => {
    req.session.views = req.session.views? req.session.views+1 : 1;
    console.log(req.session.views);
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

module.exports = router;