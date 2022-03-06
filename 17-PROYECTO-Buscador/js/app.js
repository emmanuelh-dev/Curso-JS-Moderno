//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor para los resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//Eventos

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //muestra los resultados al cargar

  //Llena las opciones de año
  llenarSelect();
});

//EventListener para los formularios
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;

  filtrarAutos();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;

  filtrarAutos();
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;

  filtrarAutos();
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;

  filtrarAutos();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;

  filtrarAutos();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;

  filtrarAutos();
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;

  filtrarAutos();
});
//Funciones

function mostrarAutos(autos) {
  limpiarHTML(); //Limpia el html previo

  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `${marca} ${modelo} - ${year} - $${precio} - ${puertas} Puertas - Transmisión: ${transmision} Color: ${color}`;

    //Insertamos en el HTML
    resultado.appendChild(autoHTML);
  });
}

//Limpiar HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

//Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agrega las opciones del año al select
  }
}

//Filtrando los autos
function filtrarAutos() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  mostrarAutos(resultado);

  if (resultado.length) {

  }else{
      noResultado();
  }

  console.log(resultado);
}

function noResultado(){

    limpiarHTML();

    const noResultado = document.createElement("div");
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);

}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === parseInt(year);
  }
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= parseInt(minimo);
  }
  return auto;
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= parseInt(maximo);
  }
  return auto;
}

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === parseInt(puertas);
  }
  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
      return auto.color === color;
    }
    return auto;
  }