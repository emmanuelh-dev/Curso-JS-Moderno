//Declaracion de una funcion
function suma(a, b) {
  a = Number(prompt("Ingrese el valor de a"));
  b = Number(prompt("Ingrese el valor de b"));
  return a + b;
}

while (true) {
  //Desea continuar?
  var continuar = prompt("¿Desea continuar?");
  if (continuar == "si") {
    resultado = suma();
    console.log("El resultado es: " + resultado);
  }else{
    break;
  }
}