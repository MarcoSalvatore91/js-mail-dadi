console.log("JS OK!")
// # Gioco dei dadi

// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// 2- Stabilire in vincitore per il punteggio piu' alto
// 3- Stampare in console i tiri dei dadi e il risultato
// 5- Stampare in pagine

// 1a- Genera numero random per utente
const userNumber = Math.floor(Math.random() * 6) + 1;
// 1b- Genera numero random per il computer
const cpuNumber = Math.floor(Math.random() * 6) + 1;

// 2- Stabilire in vincitore per il punteggio piu' alto

let winner = '';

if (userNumber > cpuNumber) {
    winner = `Hai Vinto!!!`
} else if (userNumber < cpuNumber) {
    winner = `Mi dispiace, hai perso`
} else {
    winner = `Hai pareggiato, ritenta!`
}

// 3- Stampare in console i tiri dei dadi e il risultato

console.log(userNumber); 
console.log(cpuNumber);
console.log(winner);

document.getElementById('user').innerHTML = userNumber;
document.getElementById('cpu').innerHTML = cpuNumber;
document.getElementById('result').innerHTML = winner;