// JavaScript no tiene nada que ver con Java
// Tipos de Datos Primitivos -> numerico, booleano, String

// Definir a como Entero;
// a <- 1;
var a;
a = true;

console.log(typeof a);

a = "false";

console.log(typeof a);
// tres formas de declarar e inicializar una variable
b = 10; // -> mala praxis
console.log(b);

var c = 20; // var -> no se recomienda.
console.log(c);

let d = 30; // let -> forma correcta.
d = 40;
console.log(d);


const PI = 3.14;
console.log(PI);

// si (condición) entonces
//  ---
// finSi

// asignación <- // asignación =
// comparación = // comparación == o ===
// alcance (scope) de la definición de variables

if (d === 40) {
  console.log('entre al si entonces', b);
  let f = "feo";
  console.log(f);
}

{
  console.log("Este es otro bloque de código");
  let f = "mas feo";
  console.log(f);
  
  {
    console.log("este es otro bloque de código, distinto al anterior");
    let f = "otro";
    console.log(f);
 
  }
  console.log(f);  
}

let nombre = "Brian";

if (nombre === "Brian") {
  console.log(nombre); 
}

// segun que variable hacer
// caso 1: 
//        ---
// caso 2:
//      ---
// finSegun

let op = 2;

switch (op) {
  case 1:
    console.log("se ejecuta la opción 1");
    break;
  case 2:
    console.log("se ejecuta la opción 2");
    break;
  case 3:
    console.log("se ejecuta la opción 3");
    break;
  default:
    console.log("No elegiste una opción válida");
    break;
}

// mientras (evaluación) hacer 
//  ---
// finMientras 

let contador = 1;

while (contador <= 3) {
  console.log(contador);
  contador = contador + 1;
}
console.log(contador);

// como sumar 1 a una variable en javascript
contador = contador + 1;
contador += 1;
contador++;
console.log(contador);

// como sumar 2 u otro número a una variable en javascript
contador = contador + 2;
contador += 2;

console.log(contador);

// repetir 
// ---
// mientras que (evaluación)
contador = 1;

do {
  console.log(contador);
  contador++;
} while (contador <= 3);

// para var <- 1 hasta 10 paso 1
//  ----
// finPara

for (let i = 0; i < 10; i++) {
  console.log(i);   
}

