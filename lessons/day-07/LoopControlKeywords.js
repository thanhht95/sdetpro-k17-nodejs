let array = [1, 2, 3, 4, 5];
const TARGET_NUMBER = 3;

// for (let index = 0; index < array.length; index++) {
//     const value = array[index];
//     if (value === TARGET_NUMBER) {
//         console.log(`Found ${TARGET_NUMBER} at number ${index}`);
//         //Terminate a loop regardless the rest values
//         break;
//     }
//     console.log(value);
// }

let foundIndex = findIndex(array, TARGET_NUMBER);
if (foundIndex < 0) {
    console.log(`${TARGET_NUMBER} not found`);
} else {
    console.log(`${TARGET_NUMBER} found at index ${foundIndex}`);

}

//Where break will be ended up
/**
 * 
 * @param {*} array 
 * @param {*} targetNumber 
 * @returns a value as index, -1 if not found
 */

function findIndex(array, targetNumber) {
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if (value === TARGET_NUMBER) {
            return index; // return trong trường hợp này giống break ở trên
        }
        console.log(value);
    }
    return -1;

}

