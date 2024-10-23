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

 /*var tamanio=prompt("Ingrese el tamaño del arreglo")
     tamanio=parseInt(tamanio)
     var notas= [tamanio]
    for(j=0;j<=tamanio;j++){
        notas[j]=parseInt(prompt ("Ingrese la nota" + j+1))
       
    }
    for(j=0;j<=tamanio;j++){
        document.write (notas);
    }*/

    //Buscar numero mayor y menor
    /*var tamanio = prompt("Ingrese el tamaño del arreglo");
    tamanio = parseInt(tamanio);
    var notas = [];
    
    for (var j = 0; j < tamanio; j++) {
        notas[j] = parseInt(prompt("Ingrese la nota " + (j + 1)));
    }
    
    // Mostrar las notas ingresadas
    document.write("Notas ingresadas: " + notas + "<br>");
    
    // Inicializamos las variables mayor y menor con el primer valor del arreglo
    var mayor = notas[0];
    var menor = notas[0];
    
    // Recorremos el arreglo para encontrar el mayor y el menor
    for (var j = 1; j < tamanio; j++) {
        if (notas[j] > mayor) {
            mayor = notas[j];
        }
        if (notas[j] < menor) {
            menor = notas[j];
        }
    }
    
    // Mostrar el mayor y el menor
    document.write("La nota mayor es: " + mayor + "<br>");
    document.write("La nota menor es:"+ menor);  */
    

 
    /*var tamanio = parseInt(prompt("ingresa el tamaño del arreglo"))
    var arreglo = [tamanio]
    //inicial
    mayor=arreglo[0]
    menor=arreglo[0]
    for(i=0; i<tamanio;i++){
        arreglo[i]=(parseInt(prompt("ingreso el numero " + (i+1))));
    }
    //imprimimos en pantalla los datos
    document.write(arreglo)
    for(i=0; i<tamanio;i++){
        if(arreglo[i]>mayor){
            mayor=arreglo[i]
        }
        if(arreglo[i]<menor){
            menor=arreglo[i]
        }
    }
    document.write("el numero mayor es " + mayor + "<br>" )
    document.write("el numero menor es " + menor )*/

    //en clase
    


/*var numero=prompt("Ingrese el número")
//va a contar la veces que se repite el numero 0
var contador= 0
//realizo un ciclo desde 1 hasta el numero ingresado
//y se va a incrementar en 1
for(i=1; i<=numero;i++){
    modulo=numero%i
    if(modulo==0){
    contador=contador+1

    }
    document.write(modulo +("<br>"))
}

if(contador==2){
    document.write("el número es primo")
}else[
    document.write("El número no es primo")
]*/