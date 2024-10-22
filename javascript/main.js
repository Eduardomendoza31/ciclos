/*estructura del ciclo for
me permite repetir n veces una seccion de código.
tiene tres parametros: Inicio. Fin, Incremento
sintaxis basica es: for(inicio;fin; incremento){
de codigo a repetir}
varable de tipo let=> (local)cuando se necesita que el dato sea utilizado dentro de una seccion de codigo, 
eso quiere decir que esta disponible en la seccion donde fue creada
variable de tipo var=(global) esta variable puede utilizarse y esta disponible
en todo mi programa
operadores aritmeticos son: suma(+) resta(-), multiplicacion(*), divicion(/), modulo(%)*/

  /*  for(let i=3;i<=19; i++){
        //creo una condicion para encontrar los numeros pares
        if(i%2==0){
            document.write(i+ "<br>")

        }
        
    }*/

 var tamanio=prompt("Ingrese el tamaño del arreglo")
     tamanio=parseInt(tamanio)
     var notas= [tamanio]
    for(j=0;j<=tamanio;j++){
        notas[j]=parseInt(prompt ("Ingrese la nota" + j+1))
       
    }
    for(j=0;j<=tamanio;j++){
        document.write (notas);
    }

    //Buscar numero mayor y menor
    /* var tamanio = parseInt(tamanio);  
    var notas = new Array(tamanio);  
    
    // Llenar el arreglo con las notasfor (var j =0; j < tamanio; j++) {  
     notas[j] = parseInt(prompt("Ingrese la nota " + (j +1))); // Se usa j+1 para mostrar el número correcto de nota}  
    
    // Inicializar las variables para el número mayor y menorvar mayor = notas[0];  
    var menor = notas[0];  
    
    // Buscar el número mayor y menor en el arreglofor (var j =1; j < tamanio; j++) {  
     if (notas[j] > mayor) {  
     mayor = notas[j];  
     }  
     if (notas[j] < menor) {  
     menor = notas[j];  
     }  
      
    
    // Mostrar las notas, el número mayor y el número menordocument.write("Notas: " + notas + "<br>");  
    document.write("Número mayor: " + mayor + "<br>");  
    document.write("Número menor: " + menor + "<br>");*/
    

