//Unir dos objetos

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

const medidas = {
  peso : "1kg",
  medida : "1metro",
}

console.log(producto);
console.log(medidas);
const result = Object.assign(producto, medidas);

const result2 = {
  ...producto,
  ...medidas
}

console.log(result);
console.log(result2);