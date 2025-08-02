const {
    getUserInputNum,
    getUserUserInputValueToArray
} = require("../../lessons/utils/UtilMethods.js");

let userInputLengthOfArr = Number(getUserInputNum("Input the length of array"));
if (userInputLengthOfArr <= 0) {
    console.log("The number of length is invalid to run.");
} else if (userInputLengthOfArr === 1) {
    let value = Number(getUserInputNum("Input value"));
    if (value % 2 === 0) {
        console.log("It's even number");
    } else {
        console.log("It's odd number");
    }
} else {
    let intArr = getUserUserInputValueToArray(userInputLengthOfArr);
    let evenCount = 0;
    let oddCount = 0;
    for (let value of intArr) {
        if (value % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(`Even numbers: ${evenCount}`);
    console.log(`Odd numbers: ${oddCount}`);
}