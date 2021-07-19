function sumNumbers(test) {
    let regex = /(?:^|\s)[0-9]+(\s|$)/g;

    let result = 0
    let num = test.match(regex);
    if (num != null) {
        for ( let i = 0; i < num.length; i++){
            result += +num[i];
        }
    }
    return result
}

console.log('Example:');
console.log(sumNumbers('hi'));

// These "asserts" are used for self-checking
console.log(sumNumbers('hi'), 0);
console.log(sumNumbers('who is 1st here'), 0);
console.log(sumNumbers('my numbers is 2'), 2);
console.log(sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 3755);
console.log(sumNumbers('5 plus 6 is'), 11);
console.log(sumNumbers(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");