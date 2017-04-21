const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

const myMiddleWare = (req, res, next) => {
    if ( req.headers.mymiddlewareheader  && 
        req.headers.mymiddlewareheader === 'trial'){
            next();
        }
    else{
        return res.status(500).json({
            message: 'not allowed'
        });
    }
};

router.post('/user', userController.addUser);
router.get('/user', userController.getUsers);
router.get('/user/:empId', userController.findOneUser);

router.get('/admin', () => {

});

module.exports = router;



