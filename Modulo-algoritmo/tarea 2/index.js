
//Llamo a los input y a las clases, que estan en index.html

var contra1 = document.querySelector(".password");
var contra2 = document.querySelector(".password2");

var lugar = document.querySelector(".contra2")


var boton = document.querySelector(".boton");
var boton2 = document.querySelector(".boton2");

var texto = document.querySelector(".texto");

var todo = document.querySelector(".todo");



 //creo una function llamado "aparecerGuardar"

function aparecerGuardar() {
    //Digo que si nadie escribe en el input, que envie un alert.

  if (contra1.value == "" ) {
    alert("Ingrese su contraseña");

      //Pero si los usuarios sí escriben en el input, entonces que aparezca el otro input.
  }  else if(contra1.value == contra1.value ){
    lugar.classList.replace("contra2","contra2-total");
    

  }

}

  
// creo 2 variables "intento" y "max".

var  intento = 1;
var max = 4;


//Creo una function comprobar.


function comprobar(){

  
while(intento < max ){
   
//Digo que si sus valores son iguales, mande una alert felicitando.

if (contra1.value == contra2.value) {
    alert("Felicitaciones,recordás tu contraseña");
    todo.classList.replace("todo","todo-opacity");
    texto.classList.replace("texto","texto-bien");
    texto.textContent = "Gracias por participar";
       break;
       
}
//Pero si los valores no son iguales, que tenga 3 intentos para poder escribir los mismos valores

else{
    alert("Intento  " + intento + " de 3" );
    intento++ 
    break
    

}
 
}

//Y si falla los 3 intentos, que mande un alert,

if(intento == max){
    alert("Tenes que ejercitar la memoria"  );
    todo.classList.replace("todo","todo-opacity");
    texto.classList.replace("texto","texto-mal");
    texto.textContent = "vuelva a intentarlo ;)";
     
}


}

 
  contra1.focus();
  contra2.focus();

  //Llamo a las funciones

boton.onclick = aparecerGuardar;
boton2.onclick = comprobar;