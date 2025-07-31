let number = 0; //Init value có thể đặt ra ngoài
for (let number = 0; number = 5; number++) {
    console.log(number);
}
console.log("Number: ", number);


//No Condition change: for (let number = 0; number = 5;)
//-> Unreachable statement

//No Condition: -> assume alway True -> Infinitive loop again
//-> Unreachable statement

/**
 * Initialization: Assign 0 for a scoped varible name number
 * 1st Iteration
    * Condition: number < 5
    * Body execution: 0
    * number++: number (1)
 * 2nd Iteration
    * Condition: number < 5
    * Body execution: 1
    * number++: number (2)
 * 
 */

/**
 * a. 4
 * b. 5 : TRUE
 * c. 6
 * 
 */


/**
 * Engineering solution
 */