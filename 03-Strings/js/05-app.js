const producto = "Monitor 24 pulgadas";

//replace para remplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo'))


//.Slice para cortar caracteres
console.log(producto.slice(0, 10));

//Alternativa a .slice

console.log(producto.substring(0,10))
console.log(producto.substring(2,1))

const usuario = "Emmanuel";
console.log(usuario.substring(0,10));
console.log(usuario.charAt(0));