const readline = require('readline');
const tab = require('./table');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter the table you want to create: ", (n) => {
    rl.question("Enter the range: ", (j) => {
        tab.table(Number(n), Number(j));
        rl.close();
    });
});
