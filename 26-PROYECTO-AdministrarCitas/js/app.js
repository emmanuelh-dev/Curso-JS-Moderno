//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const textInput = document.querySelector('#sintomas');

//User Interface
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector("#citas")

class Citas {

}

class UI {
  imprimirAlerta(mensaje, tipo) {
    //crear el div
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

    //agregar clase en base al tipo de error
    if(tipo){
      divMensaje.classList.add('alert-danger');
    }else{
      divMensaje.classList.add('alert-success');
    }

    //mensaje de error
    divMensaje.textContent = mensaje;

    //agregar al DOM
    document.querySelector("#contenido").insertBefore(divMensaje, document.querySelector('.agregar-cita'));

    //quitamos la alerta
    setTimeout(() => {
      divMensaje.remove();
  }, 5000);
  }
}

const ui = new UI();
const administrarCitas = new Citas();



//Registrar eventos
eventListeners();
function eventListeners(){
  mascotaInput.addEventListener('input', datosCita);
  propietarioInput.addEventListener('input', datosCita);
  telefonoInput.addEventListener('input', datosCita);
  telefonoInput.addEventListener('input', datosCita);
  horaInput.addEventListener('input', datosCita);
  textInput.addEventListener('input', datosCita);

  formulario.addEventListener("submit", nuevaCita);

}
//Objeto con la información de la cita
const citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
}

//Agrega datos al objeto cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;

  console.log(citaObj);
}


//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
  e.preventDefault();

  //Extraer la información del objeto de cita
  const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

  //Validar
  if(mascota === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === ""){
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    return;
  }
}