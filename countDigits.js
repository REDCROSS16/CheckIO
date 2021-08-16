function countDigits(text) {
    const regexp = /\d{1}/g;
    const array = [...text.matchAll(regexp)];

    return array.length;
}

// console.log('Example:');
console.log(countDigits('hi'));
console.log(countDigits('hi123'));

// These "asserts" are used for self-checking
console.log(countDigits('hi'));
console.log(countDigits('who is 1st here'), 1);
console.log(countDigits('my numbers is 2'), 1);
console.log(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 8);
console.log(countDigits('5 plus 6 is'), 2);
console.log(countDigits(''), 0);
//
// console.log("Coding complete? Click 'Check' to earn cool rewards!");