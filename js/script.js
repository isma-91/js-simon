// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*
  //- Mi serve un container nella quale poi poterci stampare i numeri random
  //- Creare un array vuoto  per i numeri casuali
  //- Con il math.random creare 5 numeri casuali da 1 a 100 che non si ripetono
  //- Pushare i numeri random non uguali nell'array dei numeri random
  //- Stampare la lista dei numeri random generati nella pagina
  - Creare un setTimeout che dopo 30 secondi faccia nascondere i numeri random. 
  - Chiedere all'utente tramite il prompt dei comandi quali erano i 5 numeri
  - Creare un array dove andranno pushati i numeri che ci darà l'utente
  - Inseriti tutti e 5 i numeri da parte dell'utente confrontare quali e quanti numeri ha ricordato (confrontando i 2 array?)
*/
const arrRandomNumbers = [];
const arrUserNumbers = [];
const eleUSer = document.querySelector(".user-numbers");
const eleListNumber = document.querySelector(".n-random");
const eleVerify = document.querySelector(".verify");
const eleForm = document.querySelector("form");
// const eleBtn = document.querySelector(".btn");
// let eleN1 = document.querySelector("#n1");
// let eleN2 = document.querySelector("#n2");
// let eleN3 = document.querySelector("#n3");
// let eleN4 = document.querySelector("#n4");
// let eleN5 = document.querySelector("#n5");

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
  let randomNumbers;
  do {
    randomNumbers = getRandomInteger(1, 100);
  } while (arrRandomNumbers.includes(randomNumbers));
  arrRandomNumbers.push(randomNumbers);
}

console.log(arrRandomNumbers);

eleListNumber.innerHTML += arrRandomNumbers;

setTimeout(hidden, 1000);

function hidden() {
  eleListNumber.classList.add("hidden");
  eleUSer.classList.remove("hidden");
  // parseInt(prompt("Quali erano i 5 numeri che erano a schermo?"));
}

eleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let eleN1 = document.querySelector("#n1");
  let eleN2 = document.querySelector("#n2");
  let eleN3 = document.querySelector("#n3");
  let eleN4 = document.querySelector("#n4");
  let eleN5 = document.querySelector("#n5");

  arrUserNumbers.push(
    parseInt(eleN1.value),
    parseInt(eleN2.value),
    parseInt(eleN3.value),
    parseInt(eleN4.value),
    parseInt(eleN5.value)
  );
  // arrUserNumbers.push(eleN2.value);
  // arrUserNumbers.push(eleN3.value);
  // arrUserNumbers.push(eleN4.value);
  // arrUserNumbers.push(eleN5.value);
  console.log(arrUserNumbers);
  if (arrUserNumbers.includes(arrRandomNumbers)) {
    eleVerify.innerHTML += "Hai vinto!";
  } else {
    eleVerify.innerHTML += "Hai perso!";
  }
  eleUSer.classList.add("hidden");
  eleVerify.classList.remove("hidden");
});
