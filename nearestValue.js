function nearestValue(values, search) {
    let result = values[0];
    for (let i = 0; i <= values.length; i++ ) {
        if (Math.abs(result - search) > Math.abs(values[i] - search)) {
            result = values[i];

        } else if (Math.abs(result - search) == Math.abs(values[i] - search)) {
            if (result > values[i]) {
                result = values[i];
            } else {
                result = result;
            }
        }

    }
    return result;
}

console.log('Example:');
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));

// These "asserts" are used for self-checking
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
// assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
// assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
// assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
console.log(nearestValue([-1, 2, 3], 0));