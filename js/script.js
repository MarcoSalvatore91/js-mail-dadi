// # Gioco dei dadi

// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// 2- Stabilire in vincitore per il punteggio piu' altro
// 3- Stampare in console i tiri dei dadi e il risultato

// Genera numero random per utente
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber); 
// Genera numero random per il computer
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);

