const fs = require('fs');

/*const readerStream = fs.createReadStream('inputfile.txt');
readerStream.setEncoding('UTF8');
let data = '';
readerStream.on('data', (d) => {
    console.log('this is inside data event');
    data += d;
});

readerStream.on('end', () => {
    console.log('this is inside end event');
    console.log(data);
});
const content = "This is a test content";
const writeStream = fs.createWriteStream('outputfile.txt');
writeStream.write(content, 'UTF8');
writeStream.end();
writeStream.on('finish', () => console.log('completed writing'));*/

const readerStream = fs.createReadStream('inputfile.txt');
const writeStream = fs.createWriteStream('outputfile.txt');
readerStream.pipe(writeStream);


