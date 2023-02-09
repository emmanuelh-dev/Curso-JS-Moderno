//Object .keys, .values y .entries

const producto = {
  nombre: 'Monitor',
  precio: 1000,
  cantidad: 10,
}
//Retorna el nombre de la variable
console.log(Object.keys(producto))
//Retorna el valor de la variable
console.log(Object.values(producto))
//Retorna el objeto de la variable
console.log(Object.entries(producto))