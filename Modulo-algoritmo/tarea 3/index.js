var  ingresar = parseInt(prompt("Ingrese valor hora"));
var  ingresar2 = prompt("nombre del empleado");
var  ingresar3 = parseInt(prompt("¿cuantos años lleva en la empresa"));
var  ingresar4 = parseInt(prompt("¿cantidad de horas trabajadas en el mes?"));


var  h2 = document.querySelector("h2");
 
//Estoy creando una var calculo que tiene el contenido de la "var ingresar" * ingresar4, Para que me calcule el valor hora * horas trabajadas

var calculo = ingresar * ingresar4;

//Estoy creando una var calculo2 que tiene el contenido de la "var calculo" * 30.

var calculo2 = calculo * 30;

//Digo que si ingresar3(antiguedad en la empresa) es mayor o igual a 10 que haga la cuenta con la "var calculo2"

if(ingresar3 >= 10){
 
   h2.textContent = ingresar2 + " tiene " + ingresar3 + " años de antiguedad " + " y su total es " + calculo2 + " pesos"
   
   

}
//Digo que si ingresar3(antiguedad en la empresa) es menor  a 10 que haga la cuenta con la "var calculo"

else{
  
  h2.textContent = ingresar2 + " tiene " + ingresar3 + " años de antiguedad " + " y su total es " + calculo + " pesos"
 
}