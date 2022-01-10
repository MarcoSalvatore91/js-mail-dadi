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
        console.log(emailCheck);
    }
}
if (emailCheck === '') {
    emailCheck = `E-mail non registrata`;
    console.log(emailCheck);
} 

// # Gioco dei dadi

// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// 2- Stabilire in vincitore per il punteggio piu' altro
// 3- Stampare in console i tiri dei dadi e il risultato
