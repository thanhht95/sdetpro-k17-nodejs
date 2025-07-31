const readline = require("readline-sync");

let height = Number(readline.question("Your height (m): "));
let weight = Number(readline.question("Your weight (kg): "));

let BMI = (weight / (height * height)).toFixed(1);

const NORMAL_BMI_MIN = 18.5;
const NORMAL_BMI_MAX = 24.9;
const OVERWEIGHT = 29.9;

if (BMI < NORMAL_BMI_MIN) {
    let ideaWeightMin = NORMAL_BMI_MIN * (height * height);
    console.log(`BMI: ${BMI} -> Underweight`);
    console.log(`Suggested idea: Increase by about ${(ideaWeightMin - weight).toFixed(1)}kg to the normal level`);
    
} else if (BMI <= NORMAL_BMI_MAX) {
    console.log(`BMI: ${BMI} -> Normal weight`);
    console.log(`Look Good! Keep going on.`);
    
} else if (BMI <= OVERWEIGHT) {
    let ideaWeightMax = NORMAL_BMI_MAX * (height * height);
    console.log(`BMI: ${BMI} -> Overweight`);
    console.log(`Suggested idea: Decrease by about ${(weight - ideaWeightMax).toFixed(1)}kg to the normal level`);

} else {
    console.log(`BMI: ${BMI} -> Obesity`);
    console.log(`Suggested idea: Decrease by about ${(weight - ideaWeightMax).toFixed(1)}kg to the normal level`);

}
