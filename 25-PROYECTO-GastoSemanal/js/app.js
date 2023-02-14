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
    // Comprobar si hay datos en localStorage
    const gastosGuardados = localStorage.getItem("gastos");
    if (gastosGuardados) {
      this.gastos = JSON.parse(gastosGuardados);
    } else {
      this.gastos = [];
    }
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calculaRestante();
    this.actualizarLocalStorage();
  }

  calculaRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    this.calculaRestante();
    this.actualizarLocalStorage();
  }

  actualizarLocalStorage() {
    localStorage.setItem("gastos", JSON.stringify(this.gastos));
  }

  guardarPresupuesto() {
    localStorage.setItem('presupuesto', JSON.stringify(this));
  }

  // Método para cargar el presupuesto desde localStorage
  cargarPresupuesto() {
    if (localStorage.getItem('presupuesto')) {
      const presupuestoGuardado = JSON.parse(localStorage.getItem('presupuesto'));
      this.presupuesto = presupuestoGuardado.presupuesto;
      this.restante = presupuestoGuardado.restante;
      this.gastos = presupuestoGuardado.gastos;
    }
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
    this.calculaRestante();
    this.guardarPresupuesto(); // Guardar en localStorage
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.calculaRestante();
    this.guardarPresupuesto(); // Guardar en localStorage
  }
}


class UI {
  insertarPresupuesto(cantidad) {
    //Extraemos el valor
    const { presupuesto, restante } = cantidad;
    //Insertamos el presupuesto en el HTML
    document.querySelector("#total").textContent = presupuesto.toLocaleString();
    document.querySelector("#restante").textContent = restante.toLocaleString();
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


  mostrarGastos(gastos){
    this.limpiarHTML();//Elimina el HTML previo

    //Iteramos sobre los gastos
    gastos.forEach((gasto) => {
      const {cantidad, nombre, id} = gasto;

      //Crear un LI
        const nuevoGasto = document.createElement("li");
        nuevoGasto.className = "list-group-item mb-2 d-flex justify-content-between align-items-center";
        nuevoGasto.dataset.id = id;

        //Agregar el HTML del gasto
        nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $${cantidad.toLocaleString()}</span>`

      //Boton para eliminar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "Borrar";
      btnBorrar.onclick = () => {
        presupuesto.eliminarGasto(id);
        this.mostrarGastos(presupuesto.gastos);
        this.actualizarRestante(presupuesto.restante);
      };
      nuevoGasto.appendChild(btnBorrar);
        //Gastos
      gastoListado.appendChild(nuevoGasto);
    });
  }

  //Limpiar el HTML
  limpiarHTML(){
    while(gastoListado.firstChild){
      gastoListado.removeChild(gastoListado.firstChild)
    }
  }
  actualizarRestante(restante){
    const restanteDiv = document.querySelector("#restante");
    restanteDiv.textContent = restante.toLocaleString();
  };


  comprobarPresupuesto(presupuestoObj){
    const {presupuesto, restante} = presupuestoObj;
    const restanteDiv = document.querySelector(".restante");;
    //Comprobar 25%
    if (presupuesto > 0) {
        restanteDiv.classList.remove("alert-danger","alert-warning")
        restanteDiv.classList.add("alert-success")
        formulario.querySelector('button[type="submit"]').disabled = false;
    }
   if((presupuesto / 4) > restante){
      restanteDiv.classList.remove("alert-success","alert-warning")
      restanteDiv.classList.add("alert-danger")
      formulario.querySelector('button[type="submit"]').disabled = false;
    } else if((presupuesto / 2) > restante){
      restanteDiv.classList.remove("alert-success")
      restanteDiv.classList.add("alert-warning", "alert-danger")
      formulario.querySelector('button[type="submit"]').disabled = false;
    }

    if(restante < 0){
      ui.imprimirAlerta("El presupuesto se ha agotado", "error");
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }

}

//Instancias
const ui = new UI();
let presupuesto = localStorage.getItem("presupuesto");
//Funciones
if (presupuesto !== null) {
  presupuesto = new Presupuesto(Number(presupuesto));
}

function preguntarPresupuesto() {
  if (presupuesto === null) {
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
    presupuesto = new Presupuesto(presupuestoUsuario);
  }

  // Cargar presupuesto guardado en localStorage
  presupuesto.cargarPresupuesto();

  // Actualizar UI
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
  const {gastos, restante} = presupuesto;
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);
  //Reiniciamos el formulario
  formulario.reset();
}

function eliminarGasto(id){
  presupuesto.eliminarGasto(id);
  ui.mostrarGastos(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
}