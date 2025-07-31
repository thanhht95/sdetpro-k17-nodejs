const readline = require("readline-sync");
function getUserInputNum(message) {
    let inputNum = readline.question(`${message}: `);
    if (isNaN(inputNum)) {
        console.log(`It's not a number, let's try again.`)
        getUserInputNum(message);
    } else {
        return Number(inputNum);
    }
}

const getUserInputNumFnExpression = function () {
    let inputNum = readline.question("Your number: ");
    return Number(inputNum);
}


// Common JS Module
module.exports = {
    getInputFromKeyboard: getUserInputNum, //TH muốn đổi tên khi export nhưng hiếm khi xảy ra
    getUserInputNumFnExpression
}