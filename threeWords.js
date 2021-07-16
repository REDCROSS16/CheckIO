function threeWords(text) {
    let regex = /([a-zA-Zа-яА-Я]+)/g;
    let words = text.split(' ');
    let count = 0;
    let final = false;
    for (let i = 0; i < words.length; i++){
        if (words[i].match(regex)) {
            count++;
            if (count >= 3) final = true;
        } else {
            count = 0;
        }
    }
    return final;
}

console.log(threeWords("bla bla bla bla"))