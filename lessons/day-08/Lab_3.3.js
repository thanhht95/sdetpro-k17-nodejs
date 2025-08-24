/*
unsortedPosition = L - 1

Outer Loop: unsortedPosition -> 1
    Inner Loop: 0 - > unsortedPosition - 1
unsortedPosition -;
 */

let array = [12, 34, 1, 16, 28];
let unsortedPosition = array.length - 1;
for (; unsortedPosition > 0; unsortedPosition--) {
    for (let innerIndex = 0; innerIndex < unsortedPosition; innerIndex++) {
        let currentValue = array[innerIndex];
        let rightPositionValue = array[innerIndex + 1];
        if (currentValue > rightPositionValue) {
            //Swap
            //swap(array, innerIndex);
            let temp = currentValue;
            array[innerIndex] = array[innerIndex + 1];
            array[innerIndex + 1] = temp;
        }
    }
}


while (unsortedPosition > 0) {
    for (let innerIndex = 0; innerIndex < unsortedPosition; innerIndex++) {
        let currentValue = array[innerIndex];
        let rightPositionValue = array[innerIndex + 1];
        if (currentValue > rightPositionValue) {
            //Swap
            //swap(array, innerIndex);
            let temp = currentValue;
            array[innerIndex] = array[innerIndex + 1];
            array[innerIndex + 1] = temp;
        }
    }
    unsortedPosition--;
}


// Time Complexity: O(n^2)

console.log(array);


function swap(array, index) {
    let currentValue = array[index];
    let temp = currentValue;
    array[index] = array[index + 1];
    array[index + 1] = temp;
}