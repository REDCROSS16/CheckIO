
function beginningZeros(text) {
    let count = 0;
    for(let i = 0; i < text.length; i++ ) {
        if (text[i] === '0') {
            count++;
            // continue;
        } else {
            break;
        }

    }
    return count;
}

console.log(beginningZeros('100'), 0);
console.log(beginningZeros('001'), 2);
console.log(beginningZeros('100100'), 0);
console.log(beginningZeros('001001'), 2);
console.log(beginningZeros('012345679'), 1);
console.log(beginningZeros('0000'), 4);
console.log(beginningZeros('0000'), 4);