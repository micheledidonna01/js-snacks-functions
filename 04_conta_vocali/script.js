/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countsVoice(word){
    let voice = 0;
    for(let i=0; i<word.length; i++){
        let likeLetterA = word[i] === 'a';
        let likeLetterE = word[i] === 'e';
        let likeLetterI = word[i] === 'i';
        let likeLetterO = word[i] === 'o';
        let likeLetterU = word[i] === 'u';
        if(likeLetterA || likeLetterE || likeLetterI || likeLetterO || likeLetterU){
            voice++;
        }
    }
    return voice;
}

// Invoca la funzione qui e stampa il risultato in console
countsVoice(word);
console.log(countsVoice(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)