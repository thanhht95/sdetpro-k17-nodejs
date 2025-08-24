// Sent request to a server and just stop when response is 5xx
const readline = require('readline-sync');
let guessingTime = 0;
let randomNumber = generateRandomNumber();
do {
    let userNumber = getUserNumber();
    console.log(randomNumber);
    if (userNumber === randomNumber) {
        console.log(`Hooray!`);
        break;
    }
    guessingTime++;
} while (guessingTime < 3)

if (guessingTime === 3) {
    console.log(`Thôi đừng buồn Tèo ơi!`);
} else {
    console.log(`Hẹn gặp lại!`);
}

function getUserNumber() {
    return Number(readline.question(`Please enter you number: `));
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}