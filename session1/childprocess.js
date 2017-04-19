const execFile = require('child_process').execFile;
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log('stdout', stdout);
});

const exec = require('child_process').exec;
const child1 = exec('node --version', (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log('stdout exec', stdout);
});