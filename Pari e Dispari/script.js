// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const scelta = prompt("Scegli 'pari' o 'dispari':");
console.log("Hai scelto:", scelta);

const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"), 10);
console.log("Il tuo numero:", numeroUtente);

function generaRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

const numeroComputer = generaRandom();
console.log("Numero del computer:", numeroComputer);

const somma = numeroUtente + numeroComputer;
console.log("la somma dei due numeri è:", somma)

if (somma % 2 === 0) {
    console.log(somma, "è pari")
} else{
    console.log(somma, " è dispari")
}