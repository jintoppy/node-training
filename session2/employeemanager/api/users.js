const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    const readStream = fs.createReadStream(__dirname + '/mockData/users.json');
    let usersData = '';
    readStream.setEncoding('UTF8');
    readStream.on('data', (chunks)=>{
        usersData += chunks;
    });
    readStream.on('end', () => {
        usersData = JSON.parse(usersData);
        if(req.url=== '/api/users'){
            responseData = usersData;
        }
        else if(req.url.startsWith('/api/users/')){
            const userId = req.url.split('/').pop();
            responseData = usersData.find((user) => {
                                return user.id === parseInt(userId);
                            });
        }

        res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
        res.end(JSON.stringify(responseData));
    });
    readStream.on('error', (err) => {
        console.log(err);
        res.writeHead(500);
        res.end('some error occurred');
    });
    
};

