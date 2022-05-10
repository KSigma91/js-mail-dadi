// genero un numero random da 1 a 6 
const btn = document.querySelector(".btn");

btn.addEventListener ('click',

    function () {

        const myNut = document.querySelector("#mio_id");

        // il giocatore otterrà un numero random
        const playerChoice = Math.floor(Math.random() * 6) + 1; 

        // stampo il numero generato dal giocatore 1
        document.querySelector("#player_1").innerHTML = "Punteggio giocatore 1: " + playerChoice;

        // console.log("playerChoice",playerChoice);

        // il computer otterrà un numero random
        const machineChoice = Math.floor(Math.random() * 6) + 1;

        // stampo il numero generato dal giocatore 2
        document.querySelector("#player_2").innerHTML = "Punteggio giocatore 2: " + machineChoice;

        // console.log("machineChoice",machineChoice);

        // qui vengono confrontati i risultati e stampato il risultato finale di ogni partita
        if (playerChoice > machineChoice) {
            document.querySelector("#result").innerHTML = "Ha vinto il giocatore 1";
        } else if (playerChoice === machineChoice) {
            document.querySelector("#result").innerHTML = "Pareggio";
        } else {
            document.querySelector("#result").innerHTML = "Ha vinto il giocatore 2";
        }

    }
);

