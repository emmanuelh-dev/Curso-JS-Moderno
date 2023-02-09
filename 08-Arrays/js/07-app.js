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

const producto4 = {
  nombre:"teclado",
  precio: 100,
  cantidad: 1
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);
console.table(carrito);

// Eliminar ultimo producto
// carrito.pop();
// console.table(carrito);

// Eliminar un producto del inicio
// carrito.shift();
// console.table(carrito);

//Eliminar un producto
carrito.splice(0,1);
console.table(carrito);