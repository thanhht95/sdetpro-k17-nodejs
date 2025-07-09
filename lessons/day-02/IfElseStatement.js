const readline = require("readline-sync");

let arrivalTimeStr = readline.question("Arrival Time: ");
//Convert a string into number
let arrivalTime = Number(arrivalTimeStr);
let isHeOnTime = (arrivalTime === 7); //Boolean

if (isHeOnTime) {
    console.log("Let's stalk");
} else {
    console.log("Write a letter");
}

//Ternary operator: Toan tu 3 ngoi
let msg = isHeOnTime ? "Let's stalk" : "Write a letter";
console.log(msg);



// !true  - > false
if (!isHeOnTime) {
    console.log("Write a letter")
} else {
    console.log("Let's stalk");
}


//Mimic real situation in life
if (isSalaryIncreased) {
    //Nested if..else condition
    //Stay at company
    if (isSightlyDiff) {
        //Stay for a while
    } else {
        //Stay longer
    }
} else {
    //Leave
}