let array = [1, 2, 3, 4, 12, 12345, 3, 3];
//1,2,3,3,3,3,3,4,10,20,40
const TARGET_NUMBER = 3;
let foundIndexes = [];

for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (value === TARGET_NUMBER) {
        foundIndexes.push(index);
    }
}
if (foundIndexes.length === 0) {
    console.log(`The ${TARGET_NUMBER} not found`);

}
console.log(`These are found index(es) for the ${TARGET_NUMBER}: ${foundIndexes}`);


// Enhancement
// Sort 1,2,3,3,3,3,3,4,10,20,40 -> break
// 

