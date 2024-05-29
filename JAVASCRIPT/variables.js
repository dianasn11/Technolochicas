// Esto es un comentario de 1 línea

/* Comentario de
varias 
líneas */

// se ejecuta de arriba - abajo de izquiera - derecha

console.log(); 
// CONSOLE.LOG es una funcion para imprimir o ver cualquier variable o data
console.log("hola mundo"); 

/* variables y constantes: 
    las variables son contenedores y para usarla 
    se ocupan palabras reservadas (var, let y const)
    
    1. variables que se pueden cambiar mas adelante, usamos VAR o LET
    2. variables que sean constantes, usamos CONST 
*/

/* EJERCICIO 1 */

// 1. LET y CONST 
// keyword(LET or CONST) name = value;
// se esta creando la variable fridge e inicializandola con el valor "empty" 
let fridge = "empty"; 
console.log(fridge)
//cambiar el valor de la varibale usamos solo el nombre
fridge = "full"; 
console.log(fridge); 

/*CONST es una manera de proteger la variable*/
const colorFavorito = "morado"; 
console.log(colorFavorito); 

// colorFavorito = "azul"; 

/* REGLAS DE NOMBRE DE VARIABLES
        1. Nombres se distinguen entre mayusculas y minusculas
        let a = "Hola"
        let A = "Adios"
        2. Nombres deben comenzar con un caracter en minuscula
        3. Nombres no se pueden comenzar con numeros
        4. Nombres no pueden contener simbolos
        5. Nombres en camelCased son las mejores practias */

// VALIDAS
let user; 
let estudiante3; 
let favoriteCandy; 
let favFood; 
let camelCasedVariable; 

/* EJERCICIO 2 "CHALLENGE VARIABLES" */

let firstName = "Jenny"; 
console.log("hello " + firstName); 

let lastName = "González"; 
console.log("Hello " + firstName + " " + lastName); 

