/**
 * <18: khong ban
 * 18-55: Unlimited
 * >55 -> 2 cahi
 */
const readline = require("readline-sync");
let clientAge = Number(readline.question("Your Age: "));

if(clientAge < 18){
    console.log("Khong ban");
} else if (clientAge<=55){
    console.log("Unlimited");
}else{
    console.log("2 chai");
    
}