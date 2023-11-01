// ---- Exercise 1 ----


// function backward (text) {

//     let textBw = '';

//     for (i = text.length - 1; i >= 0; i --) {

//         textBw += text[i];
//     }

//     return textBw;

// }

// window.addEventListener ('load', function() {
    
//     let word = prompt('Dimmi una parola');

//     let h1 = document.getElementById('title');

//     h1.innerText = '1.';

//     let h3 = document.getElementById('result');

//     h3.innerText = `La parola a rovescio è: ${backward(word)}`;

// })





// ---- Exercise 2 ----


// function stringChainer (n) {
    
//     let char = ['a', 'b', 'c', 'd'];

//     let array = [];

//     for (let i = 0; i < n ; i ++) {

//         let word = '';

//         for (let i = 0; i < 4; i ++) {

//             word += char[Math.floor(Math.random() * 4)];
//         }

//         array.push(word);
//     }

//     return array
// }

// window.addEventListener ('load', function() {

//     let nStrings = prompt('Quante stringhe vuoi concatenare?');

//     let message = stringChainer(nStrings);

//     let h1 = document.getElementById('title');

//     h1.innerText = '2.';

//     let h3 = document.getElementById('result');

//     h3.innerText = message;

// })





// ---- Exercise 3 ----


// function double (x) {
//     return x*2;
// }

// let doubleNums = [];

// for (let i = 0; i < 10; i ++) {
//     let num = prompt('Dimmi un numero');
//     doubleNums[i] = (double(num));
// }


// window.addEventListener ('load', function() {

//     let h1 = document.getElementById('title');

//     h1.innerText = '3.';

//     let h3 = document.getElementById('result');

//     h3.innerText = `I numeri raddoppiati sono: ${doubleNums}`;

// })





// ---- Exercise 4 ----


// function upLow (text, x) {

//     if (x === 0) {

//         text = text.toLowerCase();
//     }

//     else if (x === 1) {

//         text = text.toUpperCase();
//     }

//     return text;
// } 

// let alpha = 'abcdefghijklmnopqrstuvwxyz';

// let alphaCrazy = [];

// for (i = 0; i < alpha.length; i ++) {

//     let rndm = Math.floor(Math.random() * 2);

//     alphaCrazy.push(upLow(alpha[i], rndm));

// }

// window.addEventListener ('load', function() {

//     let h1 = document.getElementById('title');

//     h1.innerText = '4.';

//     let h3 = document.getElementById('result');

//     h3.innerText = `All'alfabeto piace cambiare: ${alphaCrazy}`;

// })





// ---- Exercise 5 ----


// function coin () {

//     let rndm = Math.floor(Math.random() * 2);

//     let flip;

//     if (rndm === 0){
//         flip = 'TESTA';
//     }

//     else {
//         flip = 'CROCE';
//     }

//     return flip;
// }


// window.addEventListener ('load', function() {

//     let times = Number(prompt('Quanti lanci vuoi fare?'));

//     let bet = prompt('Punti su Testa o Croce?');

//     let win = 0;

//     let lost = 0;

//     for (i = 0; i < times; i ++) {

//         let coinFace = coin();

//         console.log(coinFace);

//         if (coinFace === bet.toUpperCase()) {

//             win ++;
//         }

//         else {

//             lost ++;
//         }

//         }

// console.log(win, lost);

//     let message;

//     if (win > lost) {
//         message = 'Hai Vinto';
//     }

//     else if (win < lost) {
//         message = 'Hai Perso';
//     }

//     else {
//         message = 'Pareggio';
//     }

//     let h1 = document.getElementById('title');

//     h1.innerText = '5.';

//     let h3 = document.getElementById('result');

//     h3.innerText = message;

// })





// ---- Exercise 6 ----


// function dice () {

//     let diceNum = Math.floor(Math.random() * 6 + 1);

//     return diceNum;

// }

// window.addEventListener ('load', function () {

//     alert('Lancia il dado');

//     let userDice = dice();

//     let pcDice = dice();

//     let diceResult;

//     if (userDice > pcDice) {

//         diceResult = 'Hai Vinto!';
//     }

//     else if (pcDice > userDice) {

//         diceResult = 'Hai Perso!';
//     }

//     else {

//         diceResult = 'Pareggio!'
//     }

//     let message = `TU = ${userDice}
//     PC = ${pcDice}
//     ${diceResult}`;

//     let h1 = document.getElementById ('title');

//     h1.innerText = '6.';
    
//     let h3 = document.getElementById ('result');

//     h3.innerText = message;

// })





// ---- Exercise 7 ----


// function roulette () {

//     let spin = Math.floor(Math.random() * (36 + 1));

//     return spin;
// }

// function roulColors () {

//     let spin = Math.floor(Math.random() * (36 + 1));

//     let color;

//     if (spin === 0) {

//         color = 'VERDE';
//     }

//     else if (spin % 2 === 0 && spin !== 0) {

//         color = 'ROSSO';
//     }

//     else {
//         color = 'NERO';
//     }

//     return color;
// }

// window.addEventListener ('load', function () {

//     let choise = prompt('Vuoi puntare sul numero o sul colore? (N / C)');

//     let message;

//     if (choise === 'N' || choise === 'n') { 

//         let bet = Number(prompt('Scegli il numero su cui scommettere da 0 a 36'));

//         let rouN = roulette();

//         if (bet === rouN) {

//             message = 'Hai Vinto!';
//         }

//         else {

//             message = 'Hai Perso!'
//         }

//         console.log(`User: ${bet}`);

//         console.log(`Roul: ${rouN}`);

//     }

//     else if (choise === 'C' || choise === 'c') {

//         let bet = prompt('Scegli un colore (Rosso | Nero | Verde)');

//         let rouC = roulColors();

//         if (bet.toUpperCase() === rouC) {

//             message = 'Hai Vinto!';
//         }

//         else {

//             message = 'Hai Perso!'
//         }

//         console.log(`User: ${bet.toUpperCase()}`);

//         console.log(`Roul: ${rouC}`);

//     }

//     else {
//         alert('Scelta non valida');
//         message = 'Gioco non trovato';
//     }

//     let h1 = document.getElementById ('title');

//     h1.innerText = '7.';

//     let h3 = document.getElementById ('result');

//     h3.innerText = message;

// })





// ---- Exercise 8 ----


// function roulette () {

//     let spin = Math.floor(Math.random() * (36 + 1));

//     return spin;
// }

// function roulColors () {

//     let spin = Math.floor(Math.random() * (36 + 1));

//     let color;

//     if (spin === 0) {

//         color = 'VERDE';
//     }

//     else if (spin % 2 === 0 && spin !== 0) {

//         color = 'ROSSO';
//     }

//     else {
//         color = 'NERO';
//     }

//     return color;
// }

// function coin () {

//     let rndm = Math.floor(Math.random() * 2);

//     let flip;

//     if (rndm === 0){
//         flip = 'TESTA';
//     }

//     else {
//         flip = 'CROCE';
//     }

//     return flip;
// }

// function dice () {

//     let diceNum = Math.floor(Math.random() * 6 + 1);

//     return diceNum;
// }

// window.addEventListener ('load', function() {

//     let game = prompt('Vuoi giocare a Roulette, Moneta o Dado? ( R | M | D )');

//     let message;

//     if ( game === 'R' || game === 'r' ) {

//         let choise = prompt('Vuoi puntare sul numero o sul colore? (N / C)');
    
//         if (choise === 'N' || choise === 'n') { 
    
//             let bet = Number(prompt('Scegli il numero su cui scommettere da 0 a 36'));
    
//             let rouN = roulette();
    
//             if (bet === rouN) {
    
//                 message = 'Hai Vinto!';
//             }
    
//             else {
    
//                 message = 'Hai Perso!'
//             }
    
//             console.log(`User: ${bet}`);
    
//             console.log(`Roul: ${rouN}`);
    
//         }
    
//         else if (choise === 'C' || choise === 'c') {
    
//             let bet = prompt('Scegli un colore (Rosso | Nero | Verde)');
    
//             let rouC = roulColors();
    
//             if (bet.toUpperCase() === rouC) {
    
//                 message = 'Hai Vinto!';
//             }
    
//             else {
    
//                 message = 'Hai Perso!'
//             }
    
//             console.log(`User: ${bet.toUpperCase()}`);
    
//             console.log(`Roul: ${rouC}`);
    
//         }
    
//         else {
//             alert('Scelta non valida');
//             message = 'Gioco non trovato';
//         }
//     }

//     else if ( game === 'M' || game === 'm' ) {

//         let times = Number(prompt('Quanti lanci vuoi fare?'));

//         let bet = prompt('Punti su Testa o Croce?');

//         let win = 0;

//         let lost = 0;

//         for (i = 0; i < times; i ++) {

//             let coinFace = coin();

//             console.log(coinFace);

//             if (coinFace === bet.toUpperCase()) {

//                 win ++;
//             }

//             else {

//                 lost ++;
//             }

//             }

//         console.log(win, lost);

//         if (win > lost) {
//             message = 'Hai Vinto';
//         }

//         else if (win < lost) {
//             message = 'Hai Perso';
//         }

//         else {
//             message = 'Pareggio';
//         }
//     }

//     else if ( game === 'D' || game === 'd' ) {

//         alert('Lancia il dado');

//         let userDice = dice();

//         let pcDice = dice();

//         let diceResult;

//         if (userDice > pcDice) {

//             diceResult = 'Hai Vinto!';
//         }

//         else if (pcDice > userDice) {

//             diceResult = 'Hai Perso!';
//         }

//         else {

//             diceResult = 'Pareggio!'
//         }

//         message = `TU = ${userDice}
//         PC = ${pcDice}
//         ${diceResult}`;
//     }

//     else {
//         alert('Valore non valido');
//         message = 'Gioco non trovato';
//     }


//     let h1 = document.getElementById ('title');

//     h1.innerText = '8.';

//     let h3 = document.getElementById ('result');

//     h3.innerText = message;
// })





// ---- Exercise 9 ----


// let animals = ['Leone', 'Zebra', 'Ippopotamo', 'Giraffa', 'Pinguino', 'Scimmia'];

// window.addEventListener ('load', function () {

//     let userAnimal = prompt('Quale animale vorresti vedere?');

//     let message = null;

//     for (let i = 0; i < animals.length && message === null; i ++) {

//         let animal = animals[i].toUpperCase();

//         if (animal === userAnimal.toUpperCase()) {

//             message = 'Perfetto, ti accompagno nella sua zona';
//         }
//     }

//     if (message === null) {

//         message = 'Siamo spiacenti, ma questo animale non è presente';
//     }

//     let h1 = document.getElementById ('title');

//     h1.innerText = '9.';

//     let h3 = document.getElementById ('result');

//     h3.innerText = message;
// })




// ---- Exercise 10 ----

// let disArray = [4, 9, 2, 1, 6, 3, 7, 8, 5];

// function order (array) {

//     let ordArray = [];

//     let min = 0;

//     let iSplice = 0;

//     for (let i = 0; i < array.lenght; i ++) {

//         let num = array[i];

//         if (min > num) {

//             min = num;

//             iSplice = i;
//         }
//     }

//     ordArray.push(min);

//     array.splice(iSplice, 1);

//     return ordArray;

// }

// console.log(order(disArray));

// console.log(disArray);

// window.addEventListener ('load', function () {

//     let h1 = document.getElementById ('title');

//     h1.innerText = '10.';

//     let h3 = document.getElementById ('result');

//     h3.innerText = '';

// })

