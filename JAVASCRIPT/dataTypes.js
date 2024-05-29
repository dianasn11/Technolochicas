//TIPOS DE DATOS
//1. STRING -- CADENA 
const nombre = "Diana";
const edad = "24"; 
const space = ""; 

//2. NUMBERS -- NUMEROS (cualquier numero)
const favNum = 15; 
const favNum1 = 15.9; 

//3. BOOLEAN -- VERDADERO O FALSO (no llevan comillas)
const iLoveCodign = true; 
const iHateCoding = false; 

//4. UNDEFINED -- NO SE LE AGREGA UN VALOR 
let casa; 
console.log(casa); 

//5. NULL -- NULO (no se le agrega un valor por defecto)
const hoja = null; 

/*CHALLENGE*/
//1. STRING CONCATENATION
//Crear 3 variables constantes y asignarles unas palabras a cada una
const first = "Welcome"; 
const second = "to the"; 
const third = "Jungle";
//Hacer un console.log concatenando las variables PERO se van a 
//guardar la frase en otra variable:  
// (se concateno todo para que se guardara en una const, crear una variable y aseignarle otras variables)
//-- CODIGO
const welcome = first + " " + second + " " + third; 

console.log(welcome); 
//OUTPU: "Welcome to the jungle"

//TIPOS DE DATOS COMPUESTOS
/* Permiten guardar en variables colecciones de datos asociados o no */

//1. OBJECT puede ser con muchos valores, con uno o con cero 
//guarda grandes cantidades de informacion en una sola variable

const persona = {
    //NOMBRE --- VALOR // KEY VALUE PAIRS
    //KEY -- VALUE
    nombre: "Diana Shareni SN", //string
    nacimiento: "21/11/2001", //string
    colorOjos: "cafes", //string
    edad: 22,  //number
    solerta: true, //boolean
}
console.log(persona); 

/*acceder a valores del objeto especificos 
por ejemplo, se quiere acceder al nombre de la persona
solo se pone el nombre del (objeto.valor)*/
console.log(persona.nombre);  
console.log("Mi edad es " + persona.edad); 

//objeto vacio
const empty = {}; 

//2. ARRAY se peude tener de uno, vacio
//EJEMPLO -- valores dentro de corchetes
const frutas = ["banana", "manzana", "melón", "pera"]; 
//array vacio
const vacio = []; 
//array de un solo valor
const fruta = ["guanaba"]; 
//tipos de datos distintos dentro de un array
const miArray = [21, "ramen", true, undefined];
//varios dentro de uno con un objeto
const miArray2 = [15, "manzana", [1,2,3, true, "banana"], {uno:1}]

//como acceder a los objetos especificos (se ocupan los indices empezando con el cero)
console.log(frutas[3]); 
//imprimir normal el array
console.log(frutas); 

//accerde a una letra en especifico, igual comienza con index desde el valor 0 con []
const fruta1 = "sandia"; 
console.log(fruta1[1]); 

//AGREGAR VALORES A MI ARRAY INDIRECTAMENTE
//MEOTOD PUSH (function)
vacio.push("holis");
console.log(vacio); 