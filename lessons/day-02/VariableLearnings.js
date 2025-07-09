//camelCase, snake_case, PascalCase
//console.log(myName);
let myName = "Teo";
console.log(myName);
console.log(myName_);
var myName_ = "Teo";
console.log(myName_);

//[OK] Re-assign, [X] Re-declare
myName = "Ti";

//Constant
const PI_NUMBER = 3.14;
//[X] PI_NUMBER = 11;

//1.7976931348623157e+308 -> 1.7976931348623157 * 10^38
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Check type of variable
console.log(typeof (1.7976931348623157e+308));
console.log(Infinity > 1.7976931348623157e+308);
console.log(2 / 0);

//Boolean
let amIRight = false;
amIRight = true;
console.log(amIRight);
