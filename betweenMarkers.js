

function betweenMarkers(line, left, right) {
    let regex = `(\\${left})(.+)(\\${right})`;
    return line.match(regex)? line.match(regex)[2] : null;
}

console.log(betweenMarkers('What is ><', '>', '<'));