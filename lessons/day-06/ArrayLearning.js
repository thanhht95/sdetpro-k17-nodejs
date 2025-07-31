/**
 * CRUD: Create Read Update Delete + Util(Built-in) methods
 *  
 */

let myArray = [1, 2, 3, 4, 5];
// 1st element: index == 0
// last element:length - 1

// Get the array's length
console.log(`Array's length: ${myArray.length}`);

// Get the last element value
let lastElementIndex = myArray.length -1;
let lastElementValue = myArray[lastElementIndex];
console.log(`Last element's value: ${lastElementValue}`);
console.log(`Last element's value: ${myArray[myArray.length-1]}`);

// Update: Using index as well but diff syntax
myArray[lastElementIndex] = 50;


// Undefined holes
myArray[10] = 1000;
console.log(`Element's value at index 10 is: ${myArray[10]}`);

for (let index = 0; index < myArray.length; index++) {
    console.log(`Element's value at index ${index} is: ${myArray[index]}`);
}

// push/pop
myArray.push(1,2,3,4,5) //myArray[myArray.length] = 1001
myArray.pop()