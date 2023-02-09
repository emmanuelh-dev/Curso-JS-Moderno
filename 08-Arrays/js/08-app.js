
const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
}

//Destructuring
const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);


const numeros = [1, 2, 3, 4, 5, 6]

//Destructuring
const [numero1, numero2, numero3, ...restoDeNumeros] = numeros;

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(restoDeNumeros);