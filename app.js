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



