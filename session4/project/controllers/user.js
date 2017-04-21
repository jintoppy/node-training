const User = require('../models/User');

exports.addUser = (req, res)=> {
    console.log(req.body);
    const user = new User(req.body);
    user.save((err) => {
        if(err){
            return res.status(500).send(err);
        }
        res.status(200).json({
            message: 'success'
        });
    });
};

exports.getUsers = (req, res) => {

    const callback = (err, users) => {
        if(err){
            return res.status(500).send(err);
        }
        res.json(users);
    };

    User
        .find()
        .exec(callback)
    //User.find(callback);
    
};

exports.findOneUser = (req, res) => {
    console.log(req.params.empId);

    const callback = (err, user) => {
        if(err){
            return res.status(500).send(err);
        }
        res.json(user);
    };

    User
        .findOne()
        .where('empId').equals(req.params.empId)
        .select('-_id name age empId')
        .exec(callback);

};