const fs = require('fs');

const readable = fs.createReadStream('./somefile.txt');

function readWithOnData() {
    readable.on('data', (chunk) => {
        console.log(`read a chunk of: ${chunk}`);
    });
}

function pipeToStdout() {
    readable.pipe(process.stdout, { end: false });
    readable.on('end', () => {
        process.stdout.write('\n');
    });
}

pipeToStdout();

