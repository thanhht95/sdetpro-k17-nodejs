let fooArray = [1, 12, 16, 28, 34];
let barArray = [1, 13, 16, 27, 99];
let mergedArray = [];

while (fooPosition < fooLength && barPosition < barLength) {
    const fooValue = fooArray[fooPosition];
    const barValue = barArray[barPosition];
    if (fooValue <= barValue) {
        mergedArray.push(fooValue)
        fooPosition++;
    } else {
        mergedArray.push(barValue);
        barPosition++;
    }
}

while (fooPosition < fooLength) {
    mergedArray.push(fooArray[fooPosition]);
    fooPosition++
}

while (barPosition < barLength) {
    mergedArray.push(barArray[barPosition]);
    barPosition++
}