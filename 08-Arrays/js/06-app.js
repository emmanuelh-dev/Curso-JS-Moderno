const carrito = [];

//Definir un producto
const producto = {
  nombre: 'Camisa',
  precio: 100,
  cantidad: 1,
}

const producto2 = {
  nombre:"pantalon",
  precio: 100,
  cantidad: 1
}
const producto3 = {
  nombre:"blusa",
  precio: 100,
  cantidad: 1
}

let resultado;
resultado = [...carrito, producto, producto2, producto3];
console.table(resultado);
