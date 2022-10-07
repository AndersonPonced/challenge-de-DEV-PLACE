 //Creo una var aleatorio para que me genero un numero aleatorio del 0 hasta 1000
 
 var aleatorio = Math.round(Math.random()*1000);

//Creo una var elejido para que el usuario pueda ingresar un numero del 0 1000.

 var elejido = parseInt(prompt("Escriba un numero del 0 al 1000"))

 var contador = 3;

 var intento = 1;




 while(intento < contador){

//Digo que si elejido es igual a aleatorio, que me mande a la consola un mensaje diciendo  "Genial lograste adivinar".

    if(elejido == aleatorio){
        
      console.log(" Genial lograste adivinar, tu numero es " + elejido +  " y el numero de la consola es " + aleatorio);
      break;

    }
    
    //Pero si elejido es menor a aleatorio que me mande a la consola un mensaje que me diga que es mayor el numero aleatorio.

    else if(elejido < aleatorio){
   
      console.log(" tu numero es menor" + " el numero de la consola es " + aleatorio);
  break;
  
  
  }
  
//Y si elejido es mayor a aleatorio que me mande a la consola un mensaje que me diga que es menor el numero aleatorio.

  else if(elejido > aleatorio){

    console.log(" tu numero es mayor" + " el numero de la consola es " + aleatorio);
    break;

  }

 }