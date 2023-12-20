// WeakSet

const weakSet = new WeakSet();

const cliente = {
    nombre: 'Emmanuel',
    saldo: 500,
}

// Solo se pueden agregar objetos, no strings, ni números, ni booleanos
// no tiene .size y no se puede usar for each

// weakSet.add('Hola');
weakSet.add(cliente);
console.log(weakSet);

// weakSet.delete(cliente);

console.log(weakSet.has(cliente));