// creo una variable prompt, para que el usuario pueda ingresar un numero

var preguntar = parseInt(prompt("Escribe un numero"));

var esPrimo = true;

//creo un bucle for.
for (let i = 2; i < preguntar / 2 ; i++) {
 

    if (preguntar % i === 0) {
        esPrimo = false;
    }
    
}

if (esPrimo) {
    alert("es primo " + preguntar);
}else{alert("no es primo " + preguntar) ;}