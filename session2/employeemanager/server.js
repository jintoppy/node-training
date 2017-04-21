const http = require('http');
const fs = require('fs');
const path = require('path');
const api = require('./api');

const server = http.createServer((request, response) => {
    console.log(request.method);
    if(request.url === '/'){
        //response.end('hello', 'utf-8');
        fs.readFile('public/index.html', (err, data) => {
            response.end(data);
        });
    }
    else if(request.url.startsWith('/api')){
        return api(request, response);
    }
    else {
        fs.readFile(`public${request.url}`, (err, data) => {
            if(err){
                response.writeHead(404);
                response.end('not a valid url');
            }
            else {
                const fileExtension = path.extname(`public${request.url}`).toLowerCase();
                const contentTypes = {
                    '.js': 'text/javascript',
                    '.css': 'text/css',
                    '.json': 'application/json'
                };
                response.writeHead(200, {
                    'Content-Type': contentTypes[fileExtension],
                    'customHeader': 'hello'
                });
                response.end(data);
            }
            
        });
        
    }
    
});

server.listen(3100);
