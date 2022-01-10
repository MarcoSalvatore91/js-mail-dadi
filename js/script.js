console.log("JS OK!");

// # Mail

// 1- Creare un array di email
// 2- Chiedi all'utente la sua email (Prompt)
// 3- Controllare se sia presente nella lista di chi può accedere
// 4- Infine stampare un messaggio in console sull'esito

// 1- Creare un array di email
const email = ['marco@hotmail.com', 'andrea@hotmail.com', 'luca@hotmail.com', 'luigi@hotmail.com'];
// 2- Chiedi all'utente la sua email (Prompt)
const askEmail = prompt('Inserisci la tua E-mail', 'marco@hotmail.com');

let emailCheck = '';
// 3- Controllare se sia presente nella lista di chi può accedere
for (let i = 0; i < email.length; i++) {
    if (email[i] === askEmail) {
        emailCheck = `Benvenuto ${askEmail}`;
    }
}
if (emailCheck === '') {
    emailCheck = `E-mail non registrata`;
} 
// 4- Infine stampare un messaggio in console sull'esito
console.log(emailCheck);

// # Gioco dei dadi

// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// 2- Stabilire in vincitore per il punteggio piu' alto
// 3- Stampare in console i tiri dei dadi e il risultato

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
} else  {
    winner = `Hai pareggiato, ritenta!`
}

// 3- Stampare in console i tiri dei dadi e il risultato

console.log(userNumber); 
console.log(cpuNumber);
console.log(winner);