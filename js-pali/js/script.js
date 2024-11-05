const word = prompt('Inserisci una parola!')

/**
 * Description
 * @param {string} word
 * @returns {string}
 */
function reverseWord(word) {
    let result = '';
    for(let i = word.length - 1; i >= 0; i--) {
        const curChar = word[i];
        result = result + curChar;
    }
    return result;  
    
}

if(word === reverseWord(word)) {
    const message = 'La parola che hai inserito è palindroma!'
    console.log(message)
} else {
    const message = 'La parola che hai inserito non è palindroma!'
    console.log(message)
}

