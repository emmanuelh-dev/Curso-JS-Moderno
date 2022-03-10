//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

let articulos = [];

cargarEventListeners();
function cargarEventListeners() {
  //Cuando agregas un curso
  listaCursos.addEventListener("click", agregarCurso);
}

//Funciones
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    console.log();

    leerDatosCurso(cursoSeleccionado);
  }
}

//Lee el contenido y extrae la info
function leerDatosCurso(curso) {
  console.log(curso);

  //Creando un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisa si ya existe el elemento en el carrito y solo lo actualiza
  const existe = articulos.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad
    const cursos = articulos.map(curso => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++; //Retorna el objeto actualizado
        return curso;
      } else {
        return curso; //Retorna los objetos no duplicados
      }
    });
    articulos = [...cursos];
  } else {
    //Agregamos el curso al carrito
    articulos = [...articulos, infoCurso];
  }

  //Agrega los elementos al carrito

  console.log(articulos);

  carritoHTML();
}

//Muestra el carrito de compras en el html

function carritoHTML() {
  //Limpiando el HTML
  limpiarHTML();

  //Recorre el carrito y genera el HTML

  articulos.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${imagen}" width="150"/></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>

        <td>    <a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;

    //Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos del tbody
function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
