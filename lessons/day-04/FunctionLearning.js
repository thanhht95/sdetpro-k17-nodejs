// DRY stands for Don't Repeat Yourself -> gather the logic and reuse
// Single Responsibility (Tính đơn nhiệm):
// Clean Code

/**
 * Basic naming convention for function
 * ---
 * 1. Meaning
 * 2. Start with a verb + lowercase
 * 3. camelCase
 */

const readline = require("readline-sync");

// let userInputNumer = getUserInputNum();
// console.log(`User input number: ${userInputNumer}`);

// let userInputNumer = getUserInputNumFnExpression(); //=> error
// console.log(`User input number: ${userInputNumer}`);

let result = addNumber(1, 2);
let result1 = addNumber(1, 2, 3); //case truyền thừa
console.log(`Add result: ${result}`);

// Method 01: [Function Declaration] | hoisting
function getUserInputNum() {
    let inputNum = readline.question("Your number: ");
    return Number(inputNum);
}

// Method 02: [Function Expression] | NO hoisting
const getUserInputNumFnExpression = function () {
    let inputNum = readline.question("Your number: ");
    return Number(inputNum);
}

//Parameter
function addNumber(num1, num2) {
    if (num1 && num2) { //JS support: if(undefined/null) -> false
        console.log(`num1: ${num1}, num2: ${num2}`);
        return num1 + num2
    } else {
        throw new Error("Num1 and Num2 must be numbers!")
    }
}