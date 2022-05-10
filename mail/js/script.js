// lista degli utenti che possono accedere
const myUser = ["Pinco@gmail.com", "Pallo@gmail.com", "Sempronio@gmail.com", "Antani@gmail.com"];

const btn = document.querySelector(".btn");

let mail = false;

btn.addEventListener ('click',

    function() {
        // chiedo all'utente la sua email e di scriverlo nel campo apposito
        const myInput = document.querySelector("#mio_id").value;

        for (i = 0; i < myUser.length; i++) {

            let userVer = myUser[i];

            if (userVer === myInput) {
                mail = true;
            } 
       }

       // visualizza la email digitata nel campo apposito
       document.querySelector("#check").innerHTML = "La tua email è: " + myInput;

       // Se il login dell' utente va a buon fine (e quindi fa parte della lista) allora può accedere, altrimenti no
        if (mail === true) {
            document.querySelector(".verified").innerHTML = " email verificata con successo";
        } else {
            document.querySelector(".verified").innerHTML = " email non verificata, si prega di riprovare";
        }
    }
       
);


