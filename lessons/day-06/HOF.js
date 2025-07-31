/** 
 * Bà 3: parameter - recipe
 * HOF(Higher Order Function): parameter - definition of ANOTHER function(callbackFn) OR RETURN definition of a function
 */

//Definition of another function
function greet(name){
    console.log(`Hello, ${name}`);
}

function elegantGreet(name){
    console.log(`Hello, ${name}. Where have you been?`);
}

//HOF: Bà 3
// I will call you back WHEN I need you!
function ba3(callbackFn){
    //...
    //..
    //...
    let name = "Teo";
    callbackFn(name)
}

ba3(greet);
ba3(elegantGreet);