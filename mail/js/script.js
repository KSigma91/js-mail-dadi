// lista degli utenti che possono accedere
let myUser = ["Pinco", "Pallo", "Sempronio", "Antani"];

const btn = document.querySelector(".btn");

const myOutput = document.querySelector("risultato");

btn.addEventListener ('click',

    function() {
        // chiedo all'utente la sua email e di scriverlo nel campo apposito
        const myInput = document.querySelector("#mio_id").value;

        console.log(myInput);

        for (i = 0; i < myUser.length; i++) {

            let userVer = myUser[i];
            
            console.log(userVer);
     
       }
    }
);
