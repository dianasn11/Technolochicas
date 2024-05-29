/* Function es una palabra reservada de JS 
e indica que es una funcion 
FUNCION -- BLOQUE DE CODIGO */

function saludo(){
    //  RETURN ES EL PEDAZO DE LOGICA QUE REGRESA LA FUNCION
    return "hola"; 
}

//LLAMAR O INVOCAR LA FUNCION -- CALL THE FUNCTION OR INVOKE THE FUNCTION
console.log(saludo()); 
//invocando la funcion
suma()

//PARAMETROS DE UNA FUNCION
function suma(numero1, numero2){
    return numero1 + numero2; 
}
//invocando y pasando argumentos
// suma(5,3); 
console.log(suma(5,3)); 

//FUNCIONES QUE RECIBEN DATOS Y QUE NO RECIBEN DATOS
//addTwo -- cerar una funcion addTwo que acepta un número y regresa el numero +2
function addTwo(number){
    //guardar el resultado del numero +2 en una variable
    const result = number + 2; 
    //regresar el resultado
    return result; 
}

//se llama la funcion - ejecutar la funcion, si no solo se esta guardando la logica
//addTwo () - correcta 
//addTwo - no es correcta, no se llama la funcion

//comprobación 
console.log(7); 