
// ??? рабочий ли?
function betweenMarkers(line, left, right) {
    let regex = `(\\${left})(.+)(\\${right})`;
    return line.match(regex)? line.match(regex)[2] : null;
}

console.log(betweenMarkers('What is ><', '>', '<'));



// этот точно рабочий
function betweenMarkers(text: string, begin: string, end: string): string {
        
    let bI = (text.indexOf(begin)!= -1) ? text.indexOf(begin)+ begin.length : 0;
    let eI = (text.indexOf(end)!= -1) ? text.indexOf(end) : text.length;
    
    let res = text.slice(bI, eI);
    
    return res;
}

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers("<head><title>My new site</title></head>",
                            "<title>", "</title>"), 'My new site')
assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");