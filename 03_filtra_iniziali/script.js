/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
stringWithLetter(names);

// Invoca la funzione qui e stampa il risultato in console
function stringWithLetter(namesPeople){
    let arrayNames = [];
    for(let i = 0; i < namesPeople.length; i++){
        const isWordWithAnLetter = namesPeople[i].startsWith('A');
        if(isWordWithAnLetter){
            arrayNames.push(namesPeople[i]);
        }
    }
    return arrayNames;
}
console.log(stringWithLetter(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]