const readline = require('readline-sync');

let userInput = getUserInputNumber();

// if (userInput === 2) {
//     console.log("Mon");
// } else if (userInput === 3) {
//     console.log("Tue");
// } else if (userInput === 4) {
//     console.log("Web");
// } else if (userInput === 5) {
//     console.log("Thu");
// } else if (userInput === 6) {
//     console.log("Fri");
// } else if (userInput === 7) {
//     console.log("Sat");
// } else if (userInput === 8) {
//     console.log("Sun");
// } else {
//     console.log("Undefined!");
// }

// switch (userInput) {
//     case 2:
//         console.log("Mon");
//         break;
//     case 3:
//         console.log("Tue");
//         break;
//     case 4:
//         console.log("Web");
//         break;
//     case 5:
//         console.log("Thu");
//         break;
//     case 6:
//         console.log("Fri");
//         break;
//     case 7:
//         console.log("Sat");
//         break;
//     case 8:
//         console.log("Sun");
//         break;
//     default:
//         console.log("Undefined!");
// }

switch (userInput) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Weekdays");
        break;
    case 7:
    case 8:
        console.log("Weekend!");
        break;
    default:
        console.log("Undefined!");
}

function getUserInputNumber() {
    return Number(readline.question('Please input your number: '));
}