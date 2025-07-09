const readline = require("readline-sync");

let number = Number(readline.question("Input a number: "));
let msg = (number%2 == 0) ? console.log("It's a even number") : console.log("It's a odd number");
