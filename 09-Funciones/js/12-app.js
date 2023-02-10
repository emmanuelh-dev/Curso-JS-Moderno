//.map para iterar un array, y sus diferencias con forEach
const cart = [
  {nombre: "Camisa", precio: 100},
  {nombre: "Pantalon", precio: 100}
];

//Con arrow function
cart.forEach(producto => {
  console.log(producto.nombre);
});

const nuevoArray = cart.map(producto => producto.nombre);

console.log(nuevoArray);
//.map para iterar un array, y sus diferencias con filter
const cart2 = [
  {nombre: "Camisa", precio: 100},
  {nombre: "Pantalon", precio: 100}
];

const productos = cart2.filter(producto => producto.precio > 100);