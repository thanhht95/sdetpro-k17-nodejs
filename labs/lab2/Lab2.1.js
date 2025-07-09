const readline = require("readline-sync");

let height = Number(readline.question("Your height (m): "));
let weight = Number(readline.question("Your weight (kg): "));

let BMI = (weight / (height * height)).toFixed(1);

const NORMAL_WEIGHT_MIN = 18.5;
const NORMAL_WEIGHT_MAX = 24.9;
const OVERWEIGHT = 29.9;

if (BMI < NORMAL_WEIGHT_MIN) {
    console.log(`BMI: ${BMI} -> Underweight`);
} else if (BMI <= NORMAL_WEIGHT_MAX) {
    console.log(`BMI: ${BMI} -> Normal weight`);
} else if (BMI <= OVERWEIGHT) {
    console.log(`BMI: ${BMI} -> Overweight`);
} else {
    console.log(`BMI: ${BMI} -> Obesity`);
}