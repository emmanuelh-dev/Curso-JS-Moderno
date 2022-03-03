// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso precionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log('cursoSeleccionado');
        leerDatosCurso()
    }
    
}
//Lee el contenido del HTML al que le dimos click y extrae  la información del curso
function leerDatosCurso(){
    console.log(curso);
}