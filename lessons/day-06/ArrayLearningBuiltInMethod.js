let myArray = [1, 2, 3, 4, 5]

//Filter just even numbers from array
//filer is a HOF
//let myEvenNums = myArray.filter(isEvenNumber);

// let myEvenNums = myArray.filter(function (number){
//     return number%2===0;
// }); //có đưa tên vô hay không cũng được
// let myEvenNums = myArray.filter(function (value, index, array) {
//     console.log(`Validating value ${value} at index ${index} and the array is now: ${array}`);
//     return value % 2 === 0;
// });

//console.log(myEvenNums);


function isEvenNumber(value, index, array) {
    console.log(`Validating value ${value} at index ${index} and the array is now: ${array}`);
    return value % 2 === 0;
}

function isOddNumber(value, index, array) {
    return !isEvenNumber(value, index, array)
}

// DELETE | Splice
let startIndex = 2;
let deleteCount = 1;
let insertValue = 10;
let clonedArray = [...myArray];
//let returnedArray = myArray.splice(startIndex,deleteCount,insertValue);
clonedArray.splice(startIndex,deleteCount,insertValue);
console.log(clonedArray);
console.log(myArray);

