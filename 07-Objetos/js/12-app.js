//Object constructor

const producto = {
  nombre: 'Monitor',
  precio: 1000,
  cantidad: 10,
}

function Producto(nombre, precio, cantidad) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
  //Crea un metodo que retorna un true o false segun haya inventario
  this.disponible = () => this.cantidad > 0;
}

const producto2 = new Producto('Monitor 24"', 1000, 10);
console.log(producto2.disponible());