const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const  nombreProducto = "Monitro";

producto.disponible = false;
delete producto.precio;
console.log(producto);

