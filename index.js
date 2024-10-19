let op;

do {
  op = prompt("Ingresa una opción : suma, resta, multi, divi");
  let num1;
  let num2;
  if (op !== "salir") {
    num1 = parseFloat(prompt("Ingresa el 1er número:"));
    num2 = parseFloat(prompt("ingresa el 2do número:"));    
  }
  let resultado;
  
  switch (op) {
    case "suma":
      resultado = num1 + num2;    
      break;
    case "resta":
      resultado = num1 - num2;    
      break;
    case "multi":
      resultado = num1 * num2;    
      break;
    case "divi":
      resultado = num1 / num2;    
      break;
    case "salir":
      console.log("Adios!");    
      break;
    default:
      console.log("No ingresaste una opción correcta");
      break;
  }
  if (op !== "salir") {
    console.log("El resultado es: ", resultado);
  }

} while (op !== "salir");

