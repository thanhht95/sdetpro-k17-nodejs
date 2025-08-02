const {
    getUserInputNum,
    getUserUserInputValueToArray
} = require("../../lessons/utils/UtilMethods.js");

let userInputLengthOfArr = Number(getUserInputNum("Input the length of array"));
if (userInputLengthOfArr <= 0) {
    console.log("The number of length is invalid to run.");
} else if (userInputLengthOfArr === 1) {
    console.log("It's the min and max number.");
} else {
    let intArr = getUserUserInputValueToArray(userInputLengthOfArr);

    let mixNum = intArr[0];
    let maxNum = intArr[0];

    for (let index = 1; index < intArr.length; index++) {
        if (mixNum > intArr[index]) {
            mixNum = intArr[index];
        }
        if (maxNum < intArr[index]) {
            maxNum = intArr[index]
        }
    }

    console.log(`Minimum: ${mixNum}`);
    console.log(`Maximum: ${maxNum}`);
}

//let intArr = [1, 2, 3, 4, 5, 0, 3, 6, 4];



