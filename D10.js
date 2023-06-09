/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = function (a , b){
  
  let result = a + b
  console.log("result",  result)
  return result 

}

sum(10 , 20)




/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/


const random = function (){

  let number = Math.floor(Math.random() * 20) +1;
  console.log(number)

  return number
}

random()


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


let me = {
  name: "federico",
  surname: "maso",
  age: 34 
}

console.log(me)



/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age

console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["html" , "java"] ;

console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("non conosco phyton")
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me)





// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/


function dice (min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random)
  return random
}

dice();


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (a , b){

  
    if (a > b) {
      return a; 
      
    } else {
      return b;
    }
    
  }
  

console.log(whoIsBigger(99 , 7))


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/



const splitMe = function (str){
   splitted = str.split(" ")
return splitted
}
console.log(splitMe("I love coding"))





/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function(str, noFirst) {
  if (noFirst) {
    return str.substring(1);                                                    //uso una sottostringa partendo dall'indice 1 (cosi elimino il primo carattere)
  } else {
    return str.substring(0, str.length - 1);                                    //uso una sottostringa partendo dall'indice 0 fino all'ultimo indice - 1 cosi rimuovo l'ultimo carattere
  }
}


console.log(deleteOne("Epicode", true));  
console.log(deleteOne("Epicode", false)); 




/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function(str){
let text = str.replace(/[0-9]/, "");                                          //  <=== ho provato questa ma mi elimina solo il primo numero e non tutti, immagino sia da fare un ciclo for each ma  
                                                                              //        mi sono incartato 
return text 
}

console.log(onlyLetters("I dont 234 33 2 3 have 8 plane "))




/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  let at = email.indexOf('@');                       
  let dot = email.lastIndexOf('.');

  
  if (at > 0 && dot > at + 1 && dot < email.length - 1) {                         // Verifico che l'indirizzo contenga una @ e un punto dopo la @ e che non ci siano più di un punto consecutivo dopo la @ 
    let onlyOneDot = email.indexOf('..', at);                                     // sincero qui ho googlato tantissimo trovando un esempio molto simile perchè non ne venivo fuori :)
    
    if (onlyOneDot === -1) {
      return true;
    }
  }

  return false;
}


console.log((isThisAnEmail('esempio@indirizzo.mail')));
console.log((isThisAnEmail('indirizzo email')));



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

let weekdays= ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]


const whatDayIsIt = function () {
  let day = new Date();
  let dayIndex = day.getDay();

  let currentDay = weekdays[dayIndex];
  return currentDay
}

console.log(whatDayIsIt())


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

 const howManyDays = function(date){ 
  let currentDate = new Date();               // data corrente
  let timeDifference = Math.abs(currentDate.getTime() - date.getTime());  // differenza in millisecondi tra data corrente e quella parametro convertita in valore assoluto
  let millysecInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));          //millisecondi convertiti in giorni
  return millysecInDays;
}

let initialDate = new Date ("2000-06-09");
console.log("sono passati", howManyDays(initialDate) , "giorni")



/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/


const myBirthday = "1989-10-08"
let today = new Date();

const isTodayMyBirthday = function(birthday) {
  
  let birthDate = new Date(birthday);

  birthDate.setFullYear(today.getFullYear());                                     // Imposto l'anno di nascita sulla data corrente per confrontare solo il giorno e il mese

  let isTodayBirthday = birthDate.getDate() === today.getDate() && birthDate.getMonth() === today.getMonth();   // verifico se il giorno E mese della data di compleanno sono uguali a quelli correnti > valore booleano in risposta

  return isTodayBirthday;
}


console.log( "è il mio compleanno oggi?" , isTodayMyBirthday( myBirthday))




// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let fede = {
  name: "federico",
  surname: "maso",
  age: 34 
}

const deleteProp = function(obj, str) {
  if (obj.hasOwnProperty(str)) {
    delete obj[str];
  }
  return obj;
}

console.log(deleteProp(fede, "age"))






/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]







/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (array) => {
  let result = { }
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year)
    if (!result.Year || currentYear > parseInt(result.Year)) {
      result = movie;
    }
  })

  return result
}

console.log(newestMovie(movies))


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (array) {
  return array.length;
};


console.log(countMovies(movies));



/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function(movies){
  const years = movies.map((movie) => movie.Year);
  return years;
};



console.log(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


const onlyInLastMillennium = function(movies){
  const lastMillenniumMovies = movies.filter((movie) => {
    const year = parseInt(movie.Year);
    return year >= 2000 && year <= 2099;
  });

  return lastMillenniumMovies;
};



console.log(onlyInLastMillennium(movies))






/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/


const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0)
}

console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function(index){
  if (index < 0 || index >= movies.length) {
   
    return movies;
  }

  const updatedMovies = [...movies];                                                 // Crea una copia dell'array originale
  updatedMovies.splice(index, 1);                                                    // Rimuovi l'elemento dall'array

  return updatedMovies;
};


const indexToRemove = 2;
const updatedMovies =
console.log (removeIndex(indexToRemove))



// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


const selectContainer = function (){
  let tdsel = document.getElementById("container");
 return tdsel
  
}

selectContainer()



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectTd = function (){
  let tdsel = document.querySelectorAll("td");
  tdsel.forEach(function() {
    console.log(tdsel)
  })

}

selectTd()


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTableCellText = function() {
  let tds = document.querySelectorAll('td');
  
  for (var i = 0; i < tds.length; i++) {
    var text = tds[i].textContent;
    console.log(text);
  }
}


printTableCellText()



/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const backgroundColor = function (){
let links = document.querySelectorAll("a");
links.forEach(function(linkscoloured) {
  linkscoloured.style.backgroundColor = "red";
})
}

backgroundColor()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addLi = function (){
  
  let newListItem = document.createElement("li");
  console.log(newListItem)
  newListItem.innerText = "provaprovaEpicode";

  let parentUl = document.getElementById("myList");

        parentUl.appendChild(newListItem)
}

addLi()



/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const clearList = function() {
  let myList = document.getElementById("myList");
  myList.innerHTML = " ";
}

clearList();



/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassToTr = function () {
  let tableRows = document.querySelectorAll("tr");
  tableRows.forEach(function(row) {
    row.classList.add("test");
  });
}

addClassToTr()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  
    if ((number / 1 === number) && (number / number === 1)) {                               // il ragionamento è che un numero primo è divisibile solo per se stesso e per 1, di conseguenza ho posto questa condizione
                                                                                             // solo che anche inserendo un numero non primo il return è sempre true, e non capisco perchè :V
      return true;
    }
  
else {}
  return false;
}


console.log(isItPrime(3));  // true
console.log(isItPrime(7)); // false



