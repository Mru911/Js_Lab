const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter a number: '));

console.log(`Multiplication Table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

let i = 1;

console.log(`Multiplication Table for ${number} (using while loop):`);
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
let j=1;
console.log(`Multiplication Table for ${number} (using do-while loop):`);
do {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
} while (j <= 10);