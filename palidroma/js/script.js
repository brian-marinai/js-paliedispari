// chiedere all'utente di inserire una parola
var parola = prompt("inserisci una parola");
var palindroma = "";
// parolainvertita = invertiparola (parola);
// creare una funzione per capire se la parola è palindroma

for (var i = parola.length - 1; i >=0 ; i--) {
  palindroma += parola[i];
}
if (palindroma == parola) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}


function parolainvertita(parola) {
  var invertita = "";
  for (var i = parola.length - 1; i >=0 ; i--) {
    palindroma += parola[i];
  }
  return invertita;
}
