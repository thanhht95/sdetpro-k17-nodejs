const readline = require("readline-sync");

let number = Number(readline.question("Input a number: "));
if (Number.isNaN(number)) {
    console.log("The input value is not a number.");
}
else if (number === 0) {
    console.log("Zero is not considered as an odd/even number.");

} else {
    if (number % 2 === 0) {
        console.log(`${number} is a even number`)
    } else {
        console.log(`${number} is a odd number`)
    }
}
