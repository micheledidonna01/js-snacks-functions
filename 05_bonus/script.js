/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Mario';


// Dichiara la funzione qui.
saluta(nome);

// Invoca la funzione qui e stampa il risultato in console
function saluta(persona) {
    const date = new Date();
    const hour = date.getHours();
    if (hour <= 13 && hour > 6) {
        return `Buongiorno ${persona}`;
    } else if (hour > 13 && hour <= 17) {
        return `Buon pomeriggio ${persona}`;
    } else if (hour > 17 && hour <= 6) {
        return `Buonasera ${persona}`;
    }

}

console.log(saluta(nome));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.