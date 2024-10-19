let opciones = ['piedra', 'papel', 'tijera'];

const jugador1 = prompt("Ingresa piedra, papel o tijera:");

if (!esValido(jugador1)) {
  alert("No elegiste la opción correcta");
} 

const jugador2 = prompt("Ingresa piedra, papel o tijera:");

if (!esValido(jugador2)) {
  alert("No elegiste la opción correcta");
}

let ganador = evaluar(jugador1, jugador2);

if (ganador === 0) {
  console.log("Empate");  
} else {
  console.log("Ganó el jugador " + ganador);  
}

// if (ganador === 1) {
//   console.log("Ganó el jugador 1");  
// }
// if (ganador === 2) {
//   console.log("Ganó el jugador 2");  
// }
// if (ganador === 0) {
//   console.log("Empate");  
// }


function evaluar(op1, op2) {
  if ((op1 === 'piedra' && op2 === 'tijera')
    || (op1 === 'papel' && op2 === 'piedra')
    || (op1 === 'tijera' && op2 === 'papel')) {
    return 1;
  }

  if ((op1 === "piedra" && op2 === 'papel')
    || (op1 === 'papel' && op2 === 'tijera')
    || (op1 === 'tijera' && op2 === 'piedra')) {
    return 2;
  }

  return 0;
}

function esValido(valor) {
  // opcion de algoritmo con find
  // const valorEncontrado = opciones.find(function (element) {
  //   return element == valor
  // });
  // console.log(valorEncontrado);


  // return valorEncontrado != undefined;
  
  // opcíon de algoritmo tradicional y aburrido
  // let encontrado = false;
  // for (let i = 0; i < opciones.length; i++) {
  //   if (opciones[i] === valor) {
  //     encontrado = true;
  //   }
  // }

  // return encontrado;

  return opciones.find(element => element == valor) !== undefined;
}


