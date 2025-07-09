if (get1stNumber() != 0 || get2ndNumber() != 0) {
    console.log("All number are zero!!");
}

function get1stNumber() {
    console.log("Calling 1st function...");
    return 1;
}

function get2ndNumber() {
    console.log("Calling 2nd function...");
    return 2;
}

/**
 |: Bitwise operator, Process something then combine
 1. Resolve all values
 2. Combine: ex false | true: true
 --
 ||: Combine operator
 1. Resolve values from left to right, ONE BY ONE
 true || get2ndNumber() != 0
 if it sees the FIRST TRUE, will ignore the rest right ones
 2.

 */