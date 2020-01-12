// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.



var primaParola = prompt("Inserisci la prima parola?");
var secondaParola = prompt("Inserisci la seconda parola?");

if (primaParola == secondaParola) {
  alert("Hai inserito 2 parole con la stessa lunghezza");
}

if (primaParola.length > secondaParola.length) {
  console.log(primaParola);
}
else {
  console.log(secondaParola);
}
