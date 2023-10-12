// # VERIFICARE SE UNA PAROLA E' PALINDROMA

// ## Chiedere all'utente di inserire una parola tramite prompt
const userWord = prompt("Inserisci una parola e ti dico se è palindroma");

// ## Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome() {
  // Divido la parola in un array di caratteri
  let diviseWord = userWord.split("");

  // Inverto i caratteri dell'array
  diviseWord = diviseWord.reverse();

  // Creo una variabile che mi transforma di nuovo l'array nella parola invertita
  const invertedWord = diviseWord.join("");

  // SE la parola inserita dall'utente è uguale al suo contrario allora è palindroma
  if (userWord === invertedWord) {
    return true;
  // ALTRIMENTI non è palindroma
  } else {
    return false;
  }
}

// Invoco la funzione passando come parametro la parola inserita dall'utente
if (isPalindrome(userWord)) {
  console.log(userWord + " è una parola palindroma");
} else {
  console.log (userWord + " non è una parola palindroma");
}

// PARI O DISPARI 

// utente inserisce un numero da 1 a 5 che salvo in una variabile
const userNum = parseInt(prompt("Scegli pari o dispari e poi inserisci un numero da 1 a 5"));
console.log("hai scelto " + userNum);

// creo una piccola funzione che sceglie per il pc un numero random da 1 a 5
function getRandomNum() {
  return parseInt((Math.random() * (5 - 1) + 1));
}

// salvo in una variabile il numero random del pc
const pcNum = getRandomNum();
console.log ("il pc ha scelto " + pcNum );

// faccio la somma dei due numeri
const numSum = userNum + pcNum;
console.log ("la somma dei due numeri è " + numSum);

// creo una funzione che mi restituisce vero se la somma è pari e falso se è dispari
function isEven() {
  //  SE la somma dei due numeri è pari allora restituisci vero
  if (numSum % 2 === 0) {
    return true;
  // ALTRIMENTI restituisci falso
  } else {
    return false;
  }
}

// stampo il vincitore
if (isEven(numSum)) {
  console.log("Se hai scelto pari hai vinto! Se hai scelto dispari invece hai perso!")
} else {
  console.log("Se hai scelto pari hai perso! Se hai scelto dispari invece hai vinto!")
}
