function crearIterator(carrito){
    let i = 0;

    return{
        siguiente: ()=>{
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;
        
            return{
                fin, valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];


// Utilizar el iterador

const recorrerCarrito = crearIterator(carrito);


console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());