function nearestValue(values, search) {
    let result = values[0];
    for (let i = 1; i < values.length; i++ ) {
        if (result - search > values[i] - search) {
            result = values[i];
        }

    }
    return result;
}


console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));