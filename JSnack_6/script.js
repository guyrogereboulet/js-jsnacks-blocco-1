// Snack6
// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

numeroUtente = parseInt(prompt("Scrivi un numero"));

for (var i = 1; i <= numeroUtente; i++) {
  console.log(Math.pow(i, 3));
}
