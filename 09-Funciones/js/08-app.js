//Retornando valores

function sumar(a,b){
  return a+b;
}

const resultado = sumar(2, 3)

console.log(resultado)


//Ejemplo mas avanzado

let total = 0;
function agregarCarrito(precio){
  return total += precio;
}

function calcularImpuesto(total){
  return total * 1.15;
}
total = agregarCarrito(100)
total = agregarCarrito(100)
total = agregarCarrito(100)
total = agregarCarrito(100)

const totalImpuesto = calcularImpuesto(total);


console.log(total)
console.log(totalImpuesto)