/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const petsReversed = pets.reverse();
console.log(petsReversed);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstToLast = function () {
  let primo = pets[0];
  pets.splice(0, 1);
  pets.push(primo);
  console.log(pets);
};

firstToLast();

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AA111BB";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  name: "Audi",
  model: "R8",
  color: "yellow",
  trims: ["sport", "carbon fiber"],
  licensePlate: "AA111BB",
});

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice(-1, 1);
  console.log("-1 trims", cars[i].trims);
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++)
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let counter = 0;
while (numericArray[counter] !== 32) {
  console.log(numericArray[counter]);
  counter++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const charactersNumber = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      charactersNumber.push("1");
      break;
    case "b":
      charactersNumber.push("2");
      break;
    case "c":
      charactersNumber.push("3");
      break;
    case "d":
      charactersNumber.push("4");
      break;
    case "e":
      charactersNumber.push("5");
      break;
    case "f":
      charactersNumber.push("6");
      break;
    case "g":
      charactersNumber.push("7");
      break;
    case "h":
      charactersNumber.push("8");
      break;
    case "i":
      charactersNumber.push("9");
      break;
    case "l":
      charactersNumber.push("10");
      break;
    case "m":
      charactersNumber.push("11");
      break;
    case "n":
      charactersNumber.push("12");
      break;
    case "o":
      charactersNumber.push("13");
      break;
    case "p":
      charactersNumber.push("14");
      break;
    case "q":
      charactersNumber.push("15");
      break;
    case "r":
      charactersNumber.push("16");
      break;
    case "s":
      charactersNumber.push("17");
      break;
    case "t":
      charactersNumber.push("18");
      break;
    case "u":
      charactersNumber.push("19");
      break;
    case "v":
      charactersNumber.push("20");
      break;
    case "z":
      charactersNumber.push("21");
      break;
  }
}
console.log(charactersNumber);
