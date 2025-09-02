// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const parolaNormale = prompt("Inserisci una parola per verificare se è palindroma:");

function Palindroma(parola) {
  const parolaInvertita = parola.split("").reverse().join("");
  return parola === parolaInvertita;
}

if (Palindroma(parolaNormale)) {
  console.log("è palindroma!");
} else {
  console.log("non è palindroma!");
}