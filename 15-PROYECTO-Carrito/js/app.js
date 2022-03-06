//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e) {
    if(e.target.classList.contains('agregar-carrito')){
        e.preventDefault();
        console.log(e.target )
    }
}