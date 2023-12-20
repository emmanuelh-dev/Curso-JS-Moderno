// Sets
const carrito = new Set();

// Set no permite duplicados, solo valores unicos, no tiene keys,
// solo valores y no se puede acceder a ellos por indice como en los arreglos
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

carrito.delete('Disco #3');

console.log(carrito);

console.log(carrito.has('Camisa'));

console.log(carrito.size);

// Son iterables
carrito.forEach(producto => {
    console.log(producto);
});


const numeros = [1,2,3,4,5,6,7,8,9,10, 1, 2, 3, 4, 5]
const noDuplicados = new Set(numeros);

console.log(numeros);
console.log(noDuplicados);
