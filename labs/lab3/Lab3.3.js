const {
    getInputFromKeyboard,
} = require("../../lessons/utils/UtilMethods.js");

let userInputLengthOfArr = Number(getInputFromKeyboard("Input the length of array"));
if (userInputLengthOfArr <= 0) {
    console.log("The number of length is invalid to run.");
} else if (userInputLengthOfArr === 1) {
    let value = Number(getInputFromKeyboard("Input value"));
    console.log(`Sorted Array: ${value}`);

} else {
    let inputArr = [];
    //let clonedArray = [...inputArr];

    for (let index = 0; index < inputArr.length; index++) {
        for (let comparedToIndex = index + 1; comparedToIndex < inputArr.length; comparedToIndex++) {
            if (inputArr[index] > inputArr[comparedToIndex]) {
                // let tempValue = inputArr.splice(index, 1, inputArr[comparedToIndex]);
                // inputArr[comparedToIndex] = tempValue[0];
                let tempValue = inputArr[index];
                inputArr[index] = inputArr[comparedToIndex];
                inputArr[comparedToIndex] = tempValue;
            }
        }
    }

    console.log(`Sorted Array: ${inputArr}`);

}


