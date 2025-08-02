//let array = [1, 2, 3, 4, 5];
const readline = require("readline-sync");

let totlaArrayNums = Number(readline.question("How many number: "));
if (totlaArrayNums > 10 || totlaArrayNums < 2) {
    console.log(`We accept from 2-10 numbers only!`);
    process.exit(1);
}

//Loop the add nums into array 
let array = [];
for (let index = 0; index < totlaArrayNums; index++) {
    let addNumber = Number(readline.question(`Please input number ${index+1}: `));
    array.push(addNumber);
}

let oddNumCount = 0;
let oddNums = [];
let evenNumCount = 0;
let evenNums = [];

for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (isOddNumber(value)) {
        oddNumCount++;
        oddNums.push(value);
    } else {
        evenNumCount++;
        evenNums.push(value);
    }
}
console.log(`Total odd number: ${oddNumCount} from array ${oddNums}`);
console.log(`Total odd number: ${evenNumCount} from array ${evenNums}`);


function isOddNumber(number) {
    return number % 2 !== 0;
}