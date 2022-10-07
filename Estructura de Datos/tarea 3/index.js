
//Creo una funcion llamada sumaRecursiva.


function sumaRecursiva(numeros){


    if(numeros.length === 1){

     return numeros[0];


    }else{

     return numeros.pop(0) + sumaRecursiva(numeros);

    }


}

//Llamo a la funcion

console.log(sumaRecursiva([1,2,3,4]));