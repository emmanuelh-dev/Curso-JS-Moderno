// Maps si permiten usar objetos con llave valor
const cliente = new Map();

cliente.set('nombre', 'Emmanuel');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));

cliente.delete('saldo')
console.log(cliente);
console.log(cliente.has('saldo'));

// Para limpiar el map
cliente.clear();
console.log(cliente);


const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

console.log(paciente);