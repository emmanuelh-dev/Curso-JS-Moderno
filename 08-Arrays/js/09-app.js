//Deconstructing the app object
const cart = [
  {nombre: "Camisa", precio: 100},
  {nombre: "Pantalon", precio: 100}

];

for (let producto = 0; producto < cart.length; producto++) {
  console.log(cart[producto].nombre + " " + cart[producto].precio);
}

//for each
for (let product of cart) {
  console.log(product.nombre + " " + product.precio);
}

cart.forEach( function(producto) {
  console.log(`${producto.nombre} ${producto.precio}`);
})

cart.forEach(producto => {
  console.log(producto.nombre);
});
