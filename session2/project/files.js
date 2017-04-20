const fs = require('fs');

/*fs.readFile('inputfile.txt', (err,data) => {
    console.log('===============\n\n\nAsync Call result start')
    console.log(data.toString());
    console.log('===============\n\n\nAsync Call result end')
});
console.log('log inside main');

const data = fs.readFileSync('inputfile.txt','UTF8');
console.log('data is ');
console.log(data.toString());
console.log('===============\n\n\nSync Call result End');

*/

fs.watch('inputfile.txt', (err, fileName) => {
    console.log(fileName, 'changed');
});

Streams