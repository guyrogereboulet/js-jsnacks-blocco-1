// Snack5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var array = [];

for (var i = 0; i < 6; i++) {
 var numeroUtente = parseInt(prompt(i + " Inserisci un numero?"));
 console.log(numeroUtente);
 // se non è un numero glielo richiedo
 while (isNaN(numeroUtente)) {
  numeroUtente = parseInt(prompt("Non hai inserito un numero?"));
 }

 if (numeroUtente % 2 != 0) {
   console.log("dispari", numeroUtente);
   array.push(numeroUtente)
 }
}

console.log(array);


// var array = [];
// var i = 0;
//
// while (i < 6) {
//
//   var numeroUtente = parseInt(prompt("Inserisci un numero?"));
//   console.log(numeroUtente);
//
//   if (numeroUtente % 2 != 0) {
//     console.log("dispari", numeroUtente);
//     array.push(numeroUtente)
//   }
//   i++
// }
//
// console.log(array)
