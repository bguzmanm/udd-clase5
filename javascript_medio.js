// tipo de dato Objeto (Object)
let perro = {
  nombre: "Amapolo",
  raza:"Chiguagua",
  edad: 10,
  color: 'café',
  ladrar: function () {
    console.log("wow!");    
  }
}

console.log(perro);

perro.ladrar();

let gato = "gato feo";


//arreglos -> unidimensionales, multidimensionales
let letras = ['a', 'b', 'c'];

for (let i=0; i < letras.length;i++) {
  console.log(letras[i]);  
}

letras.push('d'); //agrega un elemento al final
console.log(letras);

letras.unshift('e'); // agrega un elemento al principio
console.log(letras);

letras.pop(); //elimina el último elemento
console.log(letras);

letras.shift();//elimina el primer elemento
console.log(letras);

letras.forEach(
  (val) => {
    console.log(val)
  });

letras.forEach(
  function (val)
  {
    console.log(val)
  }
);

// Como se declara una función de forma tradicional en JS.
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

saludar("Brian");

const saludar2 = (nombre) => {
  console.log("Hola, " + nombre + " soy yo otra vez.");
  
}

saludar2("Pepito");

let zeroPlusLetter = letras.map(val => "0" + val);

console.log(zeroPlusLetter);
console.log(letras);

let soloA = letras.filter(val => val === 'a');

console.log(soloA);

for (const atributo in perro) {
  console.log(atributo);
  console.log(perro[atributo]);
}

for (const element of letras) {
  console.log(element);
}