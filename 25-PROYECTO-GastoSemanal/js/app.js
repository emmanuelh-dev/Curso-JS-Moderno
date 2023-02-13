//Variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
  formulario.addEventListener("submit", agregarGasto);
}

//Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = this.presupuesto;
    this.gastos = [];
  }
  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    //Extraemos el valor
    const { presupuesto, restante } = cantidad;
    //Insertamos el presupuesto en el HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, type) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (type === "error") {
      divMensaje.classList.add("alert-danger");
    } else if (type === "success") {
      divMensaje.classList.add("alert-success");
    }

    //Mensaje
    divMensaje.textContent = mensaje;

    //Insertamos el mensaje en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);
    //Eliminamos el mensaje
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

//Instancias
const ui = new UI();
let presupuesto;
//Funciones

function preguntarPresupuesto() {
  let presupuestoUsuario = prompt("Ingrese el presupuesto de la semana");
  presupuestoUsuario = Number(presupuestoUsuario);
  while (
    !presupuestoUsuario ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    alert("Entrada inválida. Por favor, ingrese un número válido.");
    presupuestoUsuario = prompt("Ingrese el presupuesto de la semana");
    presupuestoUsuario = Number(presupuestoUsuario);
  }
  //Instanciamos el presupuesto
  presupuesto = new Presupuesto(presupuestoUsuario);

  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
  e.preventDefault();

  //Leemos los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  //Validamos que el nombre no este vacío
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Debe ingresar un valor valido", "error");

    return;
  }
  const gasto = { nombre, cantidad, id: Date.now() };

  presupuesto.nuevoGasto(gasto);
  ui.imprimirAlerta("Gasto agregado con éxito", "success");
  formulario.reset();
}
