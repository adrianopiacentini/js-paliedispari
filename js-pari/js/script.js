const userChoice = prompt('Scegli tra pari e dispari');
const userNumber = parseInt(prompt('Dimmi un numero tra 1 e 5'));
console.log(userChoice, userNumber)

const computerNumber = getRandomInt(1, 5);

const sum =  userNumber + computerNumber

console.log(computerNumber, sum);

const sumResult = evenOdd(sum);
console.log(sumResult);

if(userChoice === sumResult) {
    console.log('Hai vinto!')
} else {
    console.log('Hai perso!')
}

/**
 * Genera un numero intero random tra min e max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}


/**
 * Se num = pari return "pari", se num = dispari return "dispari"
 * @param {number} num
 * @returns {string}
 */
function evenOdd(num) {
    let result = 'dispari';
    if (num % 2 === 0) {
        result = 'pari';
    }

    return result;
}