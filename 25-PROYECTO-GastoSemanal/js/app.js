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


  agregarGastoListado(gastos){

    //Iteramos sobre los gastos
    gastos.forEach((gasto) => {
      const {cantidad, nombre, id} = gasto;

      //Crear un LI
        const nuevoGasto = document.createElement("li");
        nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center";
        nuevoGasto.dataset.id = id;

        //Agregar el HTML del gasto
        nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad}</span>`

      //Boton para eliminar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "X";
        //Gastos
      gastoListado.appendChild(nuevoGasto);
    });
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

  //Generar un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() };

  //Añade nuevo gasto
  presupuesto.nuevoGasto(gasto);

  //Mensaje de todo bien!
  ui.imprimirAlerta("Gasto agregado con éxito", "success");

  //Imprimimos los gastos
  const {gastos} = presupuesto;
  ui.agregarGastoListado([gasto]);
  //Reiniciamos el formulario
  formulario.reset();
}
