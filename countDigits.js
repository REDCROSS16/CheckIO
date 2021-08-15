function countDigits(text) {
    let num = [0,1,2,3,4,5,6,7,8,9];
    let arr = text.split('');
    let count = 0;
    for(let i = 0; i < arr.length; i++) {


    }
    return count;
}

// console.log('Example:');
// console.log(countDigits('hi'));
// console.log(countDigits('hi123'));

// These "asserts" are used for self-checking
// console.log(countDigits('hi'));
// console.log(countDigits('who is 1st here'), 1);
// console.log(countDigits('my numbers is 2'), 1);
console.log(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 8);
// console.log(countDigits('5 plus 6 is'), 2);
// console.log(countDigits(''), 0);
//
// console.log("Coding complete? Click 'Check' to earn cool rewards!");