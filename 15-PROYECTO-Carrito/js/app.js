//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulos = [];



cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log()

        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido y extrae la info
function leerDatosCurso(curso){
    console.log(curso);

    //Creando un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso)
}