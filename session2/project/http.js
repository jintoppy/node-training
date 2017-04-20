const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    console.log(request.url);
    if(request.url === '/'){
        //response.end('hello', 'utf-8');
        fs.readFile('public/index.html', (err, data) => {
            response.end(data);
        });
    }
    else {
        fs.readFile(`public${request.url}`, (err, data) => {
            if(err){
                response.writeHead(404);
                response.end('not a valid url');
            }
            else{
                response.writeHead(200, {
                    'Content-Type': 'text/css'
                });
                response.end(data);
            }
            
        });
        
    }
    
});

server.listen(3000);


