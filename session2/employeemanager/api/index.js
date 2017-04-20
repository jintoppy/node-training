const Users = require('./users');
module.exports = (req, res) => {
    const apiName = req.url.replace('/api/','').split('/')[0];

    switch(apiName){
        case 'users':
            Users(req, res);
        break;
    }

};