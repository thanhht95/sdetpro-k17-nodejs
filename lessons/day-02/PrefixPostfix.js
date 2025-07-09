/*
//++, --
let a = 1;

//Prefix
// let myNumber = ++a;

//Postfix 
let myNumber = a++;
console.log(myNumber);
console.log(a);
*/

let a = 1;
let b = 2;

let c = ++a + b++;


/**
 * Prefix > right operand > assign for left operand
 * a = 2
 * b = 3
 * c = 4
 */
console.log(`a = ${a}, b = ${b}, c = ${c}`);
