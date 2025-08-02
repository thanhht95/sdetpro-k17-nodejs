const readline = require("readline-sync");
function getUserInputNum(message) {
    let inputNum = readline.question(`${message}: `);
    if (isNaN(inputNum)) {
        console.log(`It's not a number, let's try again.`)
        return getUserInputNum(message);
    } else {
        return Number(inputNum);
    }
}

const getUserInputNumFnExpression = function () {
    let inputNum = readline.question("Your number: ");
    return Number(inputNum);
}

const getUserUserInputValueToArray = function (userInputLengthOfArr) {
    let intArr = [];
    for (let index = 0; index < userInputLengthOfArr; index++) {
        let message = `Input value ${index + 1}`;
        intArr.push(getUserInputNum(message));
    }
    return intArr;
}


// Common JS Module
module.exports = {
    getUserInputNum, //TH muốn đổi tên khi export nhưng hiếm khi xảy ra
    getUserInputNumFnExpression,
    getUserUserInputValueToArray
}