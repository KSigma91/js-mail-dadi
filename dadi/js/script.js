// genero un numero random da 1 a 6 
const btn = document.querySelector(".btn");

btn.addEventListener ('click',

    function () {

        const myNut = document.querySelector("#mio_id");

        // il giocatore otterrà un numero random
        let playerChoice = Math.floor(Math.random() * 6) + 1; 

        console.log("playerChoice",playerChoice);

        // il computer otterrà un numero random
        let machineChoice = Math.floor(Math.random() * 6) + 1;

        console.log("machineChoice",machineChoice);

        // qui vengono confrontati i risultati
        if (playerChoice > machineChoice) {
            risultato = "Ha vinto l'utente";
        } else {
            machineChoice > playerChoice;
            risultato = "Ha vinto la macchina";
        }

    }
);

const result = document.querySelector(".risultato > h2").innerHTML = "Il risultato è: ";