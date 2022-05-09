// lista degli utenti che possono accedere
let myUser = ["Pinco", "Pallo", "Sempronio", "Antani"];

const btn = document.querySelector(".btn");

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

// faccio un debug
// const myMail = prompt ("Inserisci la tua Mail");




// if () {
//     alert("La tua mail è valida");
// } else {
    
// }
