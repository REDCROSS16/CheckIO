
function firstWord(text) {
    let regex = /[a-zA-Z\']+/;
    var result = text.match(regex);
    return result[0];
}


console.log('Example:')
console.log(firstWord("Hello world"))

// These "asserts" using for self-checking and not for auto-testing
console.log(firstWord("Hello world"), "Hello")
console.log(firstWord("don't touch it"), "don't")
console.log(firstWord("greetings, friends"), "greetings")
console.log(firstWord("... and so on ..."), "and")
console.log(firstWord("hi"), "hi")
console.log("Coding complete? Click 'Check' to earn cool rewards!");