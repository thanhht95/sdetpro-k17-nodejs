// Original code
console.log(myVariable);
var myVariable = 1;

// Hoisting: Hoisted by Interpreter
var myVariable; // undefined
console.log(myVariable);
myVariable = 1;

/**
 * Hoisting: 
 *  1. Declaration part is hoisted
 *  2. Assignment is REMAINED
 */