// genero un numero random da 1 a 6 
const btn = document.querySelector(".btn");

btn.addEventListener ('click',

    function () {
        const myNut = document.querySelector("#mio_id");

        let btn = Math.floor(Math.random() * 6) + 1;  

        console.log(myNut);
    }
);

let result = document.querySelector(".risultato > h2").innerHTML = "Il risultato è: ";