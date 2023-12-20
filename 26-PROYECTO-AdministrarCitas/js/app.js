//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput  = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas{
  constructor(){
    this.citas = [];

  }

  agregarCita(cita){
    this.citas = [...this.citas, cita];
  }

  eliminarCita(id){
    this.citas = this.citas.filter(citas => citas.id !== id)
  }

  editarCita(citaActualizada){
    this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
  }
}

class UI{
  imprimirAlerta(mensaje, tipo){
    // Crear el div
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

    // Agregar clase en base al tipo de error
    if(tipo === 'error'){
      divMensaje.classList.add('alert-danger');
    }else{
      divMensaje.classList.add('alert-success');
    }

    divMensaje.textContent = mensaje;

    // Agregar al DOM
    document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

    // Quitar la alerta después de 5 segundos
    setTimeout(()=>{
      divMensaje.remove();
    }, 3000)
  }

  imprimirCitas({citas}){
    this.limpiarHTML();
    citas.forEach((cita)=>{
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

      const divCita = document.createElement('div');
      divCita.classList.add('cita', 'p-3');
      divCita.dataset.id = id;

      // Scripting de los elementos de la cita
      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = `
        <span class="font-weight-bolder">Propietario: </span> ${propietario}
      `;

      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = `
        <span class="font-weight-bolder">Teléfono: </span> ${telefono}
      `;

      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = `
        <span class="font-weight-bolder">Fecha: </span> ${fecha}
      `;

      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = `
        <span class="font-weight-bolder">Hora: </span> ${hora}
      `;

      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = `
        <span class="font-weight-bolder">Síntomas: </span> ${sintomas}
      `;

      // Botón para eliminar esta cita
      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
      btnEliminar.textContent = 'Eliminar';

      const btnEditar = document.createElement('button');
      btnEditar.classList.add('btn', 'btn-info');
      btnEditar.textContent = 'Editar';

      // Acciones
      btnEliminar.onclick = () => eliminarCita(id);
      btnEditar.onclick = () => editarCita(cita);

      //Agregar los párrafos al divCita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      //Agregar las citas al HTML
      contenedorCitas.appendChild(divCita);
    })
  }

  limpiarHTML(){
    while(contenedorCitas.firstChild){
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }

}

const ui = new UI();
const administrarCitas = new Citas();

// Eventos
eventListeners();
function eventListeners(){

  mascotaInput.addEventListener('input', datosCita)
  propietarioInput.addEventListener('input', datosCita)
  telefonoInput.addEventListener('input', datosCita)
  fechaInput.addEventListener('input', datosCita)
  horaInput.addEventListener('input', datosCita)
  sintomasInput.addEventListener('input', datosCita)

  formulario.addEventListener('submit', nuevaCita)
}

// Objeto con la información de la cita
citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: ''
}

// Funciones
function datosCita(e){
  citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
  e.preventDefault();

  // Extraer la información del objeto de cita
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  // Validar
  if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
    return;
  }
  if ( editando ){
    ui.imprimirAlerta('Editado correctamente', 'success');
    // Pasar el objeto de la cita a edición
    administrarCitas.editarCita({...citaObj})
    // Restaurar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    // Quitando el modo edicion
    editando = false;
  } else{
      // Agregando un id unico
    citaObj.id = Date.now();
    administrarCitas.agregarCita({...citaObj});
    ui.imprimirAlerta('Se agregó correctamente', 'success');

  }


  // Reiniciamos el formulario y el objeto
  formulario.reset();
  reiniciarObjeto();

  // Reenderizamos las citas
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){
  citaObj.mascota = '';
  citaObj.propietario = '';
  citaObj.telefono = '';
  citaObj.fecha = '';
  citaObj.hora = '';
  citaObj.sintomas = '';
}

function eliminarCita(id){
  // Elimina la cita
  administrarCitas.eliminarCita(id);
  // Muestra un mensaje
  ui.imprimirAlerta('La cita se eliminó correctamente', 'success')

  // Refresca la lista
  ui.imprimirCitas(administrarCitas);

}

function editarCita(cita){
  const { mascota, propietario, telefono, fecha, hora, sintomas } = cita;

  // Llenar los inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  // Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;

  formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

  editando = true;
}