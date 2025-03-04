/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterNames(namesPeople) {
    let arrayLetters = [];
    for (let i = 0; i < namesPeople.length; i++) {
        let firstLetter = namesPeople[i].charAt(0);
        arrayLetters.push(firstLetter);
    }
    return arrayLetters;
}


// Invoca la funzione qui e stampa il risultato in console
firstLetterNames(names);
console.log(firstLetterNames(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]