var childProcess = require('child_process');

childProcess.exec('node --version', function(err, stdout){
   console.log(stdout);
});

childProcess.execFile('node', ['--version'], function(err, stdout){
    console.log(stdout);
});
