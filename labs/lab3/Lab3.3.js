const {
    getUserInputNum,
    getUserUserInputValueToArray
} = require("../../lessons/utils/UtilMethods.js");

let userInputLengthOfArr = Number(getUserInputNum("Input the length of array"));
if (userInputLengthOfArr <= 0) {
    console.log("The number of length is invalid to run.");
} else if (userInputLengthOfArr === 1) {
    let value = Number(getUserInputNum("Input value"));
    console.log(`Sorted Array: ${value}`);

} else {
    let intArr = getUserUserInputValueToArray(userInputLengthOfArr)
    //let clonedArray = [...inputArr];

    for (let index = 0; index < intArr.length; index++) {
        for (let comparedToIndex = index + 1; comparedToIndex < intArr.length; comparedToIndex++) {
            if (intArr[index] > intArr[comparedToIndex]) {
                // let tempValue = intArr.splice(index, 1, intArr[comparedToIndex]);
                // intArr[comparedToIndex] = tempValue[0];
                let tempValue = intArr[index];
                intArr[index] = intArr[comparedToIndex];
                intArr[comparedToIndex] = tempValue;
            }
        }
    }

    console.log(`Sorted Array: ${intArr}`);
}

