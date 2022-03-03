//variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  //Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //Campos del formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  //Enviar email
  formulario.addEventListener("submit", enviarEmail)
}

//funciones
function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

//Valida el formulario
function validarFormulario(e) {
  if (e.target.value.length > 0) {
    //Eliminar errores
    const error = document.querySelector(".error");
    if (error){
        error.remove();
    }

    e.target.classList.remove("border-green-500");
    e.target.classList.add("border-green-500");
  } else {
    e.target.classList.add("border-green-500");
    e.target.classList.add("border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
        if (er.test(email.value)) {
      //Eliminar errores
      const error = document.querySelector(".error");
        if (error){
            error.remove();
        }
      e.target.classList.remove("border-green-500");
      e.target.classList.add("border-green-500");
    } else {
      e.target.classList.add("border-green-500");
      e.target.classList.add("border-red-500");
      mostrarError("Email no valido");
    }
  }
  if( email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border-red-500",
    "background-color-100",
    "text-red-500",
    "p-3",
    "text-center",
    "error"
  );

  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}

//Envia el email
function enviarEmail(e) {
    e.preventDefault();
    //Mostrar el spinner
    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex";

    //Despues de 3 segundos ocultar el spinner
    setTimeout(() =>{
        spinner.style.display = "none";
        const parrafo = document.createElement("p");
        parrafo.textContent = "El mensaje se envio correctamente";
        parrafo.classList.add('text-center', 'my-10', 'p-3', 'bg-green-500', 'text-white');

        //Inserta el parrafo antes del sppiner
        formulario.insertBefore(parrafo, spinner)

        setTimeout(() =>{
            parrafo.remove(); //Eliminar el parrafo
        },5000)
    }, 3000)
}