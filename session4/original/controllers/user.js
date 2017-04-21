const User = require('../models/User');

exports.addUser = (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).json({
            message: 'created'
        });        
    });
};


exports.getAllUsers = (req, res) => {
    const callback = (err, users) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).json(users);
    };

    // User.find(callback);

    User
        .find()
        .select('-_id empId name age')
        .exec(callback);
};

exports.getUser = (req, res) => {
    User.findOne({empId: req.params.userId},'-_id empId name age', (err, user) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).json(user);
    });
};

exports.deleteUser = (req, res) => {

};