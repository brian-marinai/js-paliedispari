var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
var scelta = prompt("scegli tra pari e dispari");

var numeroPc =

numeroPc = getRndInteger(1, 5);

var somma = numeroPc + numeroUtente;

if (isPari(somma)==true) {
  var temp = "pari";
} else {
  var temp = "dispari";
}

if (temp == scelta) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}

function isPari(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(numeroUtente, scelta, numeroPc);
function getRndInteger(min, max){
  return Math.floor(Math.random() * (max-min + 1) ) + min;
}
