console.log("JS OK!");

// # Mail

// 1- Creare un array di email
// 2- Chiedi all'utente la sua email (Prompt)
// 3- Controllare se sia presente nella lista di chi può accedere
// 4- Infine stampare un messaggio in console sull'esito
// 5- Stampare in pagina

const emailValidation = document.getElementById('email')

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

// 5- Stampare in pagina

emailValidation.innerText = emailCheck;
