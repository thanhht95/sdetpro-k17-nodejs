let myNum1 = 1;
let myNum2 = 2;

//1. Right operand and left operand
let result = myNum1 + myNum2;
console.log('Total value: ' + result);
console.log('Total value: ', result);
//String litteral/template: backstick

console.log(`5/2: ${5 / 2}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`);

//Rounding nearest
let roundingNearest = Math.round(9 / 2);
console.log(`9/2(Rounding nearest): ${roundingNearest}`);

//Rouding floor
let roundingFloor = Math.floor(9 / 2);
console.log(`9/2(Rouding floor): ${roundingFloor}`);

//Rouding ceiling
let roundingCeiling = Math.ceil(9 / 2);
console.log(`9/2(Rouding ceiling): ${roundingCeiling}`);

//To fixed number
let anotherResult = 10 / 3;
let MAX_FLOATING_NUMBER = 2;
let toFixedNumber = anotherResult.toFixed(MAX_FLOATING_NUMBER);
console.log(`10/3(To fixed number): ${toFixedNumber}`);

//Square up a number
let squareNumber = 9 ** 3;
console.log(squareNumber);
