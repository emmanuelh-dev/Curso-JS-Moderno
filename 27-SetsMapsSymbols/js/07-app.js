
function *crearGenerador(){
    yield 1;
    yield 'Emanuel';
    yield 3+3;
    yield true;
}


const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value)
console.log(iterador.next().done)