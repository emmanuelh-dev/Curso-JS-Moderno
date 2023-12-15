// Variables y selectores

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventLIsteners();
function eventLIsteners(){
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

  formulario.addEventListener('submit', agregarGasto);
}


// Classes
class Presupuesto {
  constructor(presupuesto){
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto){
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }
  calcularRestante(){
    const gastado = this.gastos.reduce((total, gasto)=> total + gasto.cantidad, 0);
    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id){
    this.gastos = this.gastos.filter(gasto => gasto.id !== id)
    ui.agregarGastoListado(this.gastos);
    this.calcularRestante();
    ui.actualizarRestante(this.restante);
    ui.comprobarPresupuesto({presupuesto: this.presupuesto, restante: this.restante, gastos: this.gastos});

  }

}

class UI {
  insertarPresupuesto(cantidad){
    // Extrayendo los valores
    const {presupuesto, restante} = cantidad;

    // Se insertan al HTML
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }

  actualizarRestante(restante){
    document.querySelector('#restante').textContent = restante;
  }


  imprimirAlerta(mensaje, tipo){
    // Div Mensaje
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert');

    if(tipo === 'error'){
      divMensaje.classList.add('alert-danger');
    }else{
      divMensaje.classList.add('alert-success');
    }

    divMensaje.textContent = mensaje;
    document.querySelector('.primario').insertBefore(divMensaje, formulario);

    setTimeout(()=> {
      divMensaje.remove();
    },1000)
  }

  agregarGastoListado(gastos){

    // Limpiamos el HTML previo
    this.limpiarHTML();


    //Iteramos sobre los gastos
    gastos.forEach(gasto =>{
      const {cantidad, nombre, id } = gasto;

      //Creamos un div
      const nuevoGasto = document.createElement('li');
      nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
      nuevoGasto.dataset.id = id;
      nuevoGasto.innerHTML = `${nombre}<span class="badge badge-primary badge-pill"> $ ${cantidad}</span>`;


      // Boton para borrar el gasto

      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.innerHTML = 'Borrar &times';

      btnBorrar.onclick= () => {
        eliminarGasto(id);
      }


      nuevoGasto.appendChild(btnBorrar);
      gastoListado.appendChild(nuevoGasto);
    })
  }

  limpiarHTML(){

    while(gastoListado.firstChild){
      gastoListado.removeChild(gastoListado.firstChild);
    }

  }

  comprobarPresupuesto(presupuestoObj) {

    const restanteDiv = document.querySelector('.restante')
    const {presupuesto, restante} = presupuestoObj;

    if ((presupuesto / 4) > restante){
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-danger');
    }else if((presupuesto / 2) > restante){
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-warning');
    }
    else{
      restanteDiv.classList.remove('alert-danger', 'alert-warning');
      restanteDiv.classList.add('alert-success');
    }
  }

}


const ui = new UI();
let presupuesto;
// Funciones

function preguntarPresupuesto(){
  const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
  if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);
  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
  e.preventDefault();

  const nombre = document.querySelector('#gasto').value;
  const cantidad = document.querySelector('#cantidad').value;

  if(nombre === '' || cantidad === ''){
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    return
  }else if(cantidad <=0 || isNaN(cantidad)){
    ui.imprimirAlerta('Ingresa un valor valido', 'error');
    return
  }

  // Generar un objeto con el gasto

  const gasto = {nombre, cantidad: +cantidad, id: Date.now()};

  presupuesto.nuevoGasto(gasto);

  ui.imprimirAlerta('Gasto agregado correctamente');

  // Imprimir los gastos
  const {gastos, restante} = presupuesto;

  ui.agregarGastoListado(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);

  // Si todo salio bien, se reinicia el formulario
  formulario.reset();
}

function eliminarGasto(id){
  presupuesto.eliminarGasto(id);
}