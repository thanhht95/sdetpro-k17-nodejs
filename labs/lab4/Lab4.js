const {
    getUserInputNum,
} = require("../../lessons/utils/UtilMethods.js");
const userAccountA = {
    name: "user A",
    accountNumber: "123",
    routingNumber: "1111111111",
    balance: 100.00
}
const userAccountB = JSON.parse(JSON.stringify(userAccountA));
userAccountB.name = "User B";
userAccountB.accountNumber = "456"
userAccountB.balance = 50.00;

let bankAccounts = [userAccountA, userAccountB];

let isStillUsing = true;
while (isStillUsing) {
    printAccountOption();
    const userOption = getUserOption();

    if (userOption === 0) {
        isStillUsing = false;
    } else if (userOption === 1) {
        let userInputAccNum = getUserInputNum("Input the account number to find");
        let { isExist, name, accountNumber } = checkAccountIfExit(userInputAccNum, bankAccounts)
        if (isExist) {
            console.log(`Account name: ${name}`);
            console.log(`Account number: ${accountNumber}`);
        } else {
            console.log(`Cannot find the account number ${userInputAccNum}`);
        }
    } else if (userOption === 2) {
        let userInputAccNum = getUserInputNum("Input the account number to withdraw");
        let { isExist, balance, pointingUser } = checkAccountIfExit(userInputAccNum, bankAccounts)
        if (isExist) {
            let userWithdrawNumber = getUserInputNum("How much do you need");
            if (isSufficientBalance(balance, userWithdrawNumber)) {
                balanceUpdate(pointingUser, userWithdrawNumber);
                console.log(`Withdraw ${userWithdrawNumber} Successfully! Current balance updated: ${pointingUser.balance}`);
            } else {
                console.log(`Insuffient Balance. Please try again!`);
            }
        } else {
            console.log(`Cannot find the input info. Please try again!`);
        }
    }
}

function printAccountOption() {
    console.log(`=== Banking application===
1. Find an account
2. Update balance
0. Exit the program`);
}

function getUserOption() {
    return getUserInputNum("Input the number of option above");
}

function checkAccountIfExit(userInputAccNum, userAccountList) {
    let isExist = false;
    for (const user of userAccountList) {
        if (JSON.stringify(userInputAccNum) === user.accountNumber) {
            isExist = true;
            pointingUser = user;
            return {
                pointingUser,
                name: user.name,
                accountNumber: user.accountNumber,
                balance: user.balance,
                isExist: isExist
            }
        }
    }
    return isExist;
}

function isSufficientBalance(balance, userWithdrawNumber) {
    if (balance > userWithdrawNumber) {
        return true;
    } else {
        false
    }
}

function balanceUpdate(user, userWithdrawNumber) {
    user.balance = user.balance - userWithdrawNumber;
}