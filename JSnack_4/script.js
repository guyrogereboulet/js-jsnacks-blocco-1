// Snack4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var nome = prompt("Inserisci il tuo nome");
var array = ["Tony", "Giacomo", "Massimo"];
var invitato = false;

for (var i = 0; i < array.length; i++) {
  array[i]

  if (nome == array[i]) {
    invitato = true;
  }
}

if (invitato == false) {
 console.log(nome + " può partecipare");
}

else {
  console.log(nome + " non può partecipare");
}
