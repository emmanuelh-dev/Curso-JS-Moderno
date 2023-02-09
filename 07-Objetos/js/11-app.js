//Funciones en objetos
const producto = {
  nombre: 'monitor 20"',
  precio: 400,
  disponible: true,
  mostrarInfo: function() {
    console.log(`Este producto ${this.nombre} tiene un precio de ${this.precio} dolares`);
  }

}
const producto2 = {
  nombre: "tablet",
  precio: 800,
  disponible: true,
  mostrarInfo: function() {
    console.log(`Este producto ${this.nombre} tiene un precio de ${this.precio} dolares`);
  }

}

producto.mostrarInfo();
producto2.mostrarInfo();