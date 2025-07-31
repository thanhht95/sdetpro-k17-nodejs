const {
    getInputFromKeyboard,
} = require("../../lessons/utils/UtilMethods.js");

let userInputLengthOfArr = Number(getInputFromKeyboard("Input the length of array"));
if (userInputLengthOfArr <= 0) {
    console.log("The number of length is invalid to run.");
} else if (userInputLengthOfArr === 1) {
    let value = Number(getInputFromKeyboard("Input value"));
    if (value % 2 === 0) {
        console.log("It's even number");
    } else {
        console.log("It's odd number");
    }
} else {
    let intArr = [];
    for (let index = 0; index < userInputLengthOfArr; index++) {
        let message = `Input value ${index + 1}`;
        intArr.push(getInputFromKeyboard(message));
    }
    console.log(`Even numbers: ${evenCount(intArr)}`);
    console.log(`Odd numbers: ${oddCount(intArr)}`);
}
//let intArr = [1, 2, 3, 4, 5, 6, 7];

function evenCount(array) {
    let count = 0;
    for (let value of array) {
        if (value % 2 === 0) {
            count++;
        }
    }
    return count;
}

function oddCount(array) {
    let count = 0;
    for (let value of array) {
        if (value % 2 !== 0) {
            count++;
        }
    }
    return count;
}