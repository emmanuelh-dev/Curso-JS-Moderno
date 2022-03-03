//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// EventListener
eventListeners();

function eventListeners() {
  //Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  document.addEventListener("DOMContentLoaded", () => {
    tweet = JSON.parse(localStorage.getItem("tweets")) || [];

    console.log(tweets);

    crearHTML();
  });
}

//Funciones
function agregarTweet(e) {
  e.preventDefault();

  //Text area donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  //Validacion
  if (tweet === "") {
    mostrarError("No puede ir vacio");

    return; //Evita que se sigan ejecuntando más lineas de código
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  //Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  //Creamos el HTML
  crearHTML();

  //Reiniciamos el formulario
  formulario.reset();
}

//Mostrar mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //Insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  //Elimina la alerta después de 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//Muestra un listado de los tweets
function crearHTML() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar un boton de eliminar
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X";

      //Añadir la funcion de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };
      //Creamos el HTML
      const li = document.createElement("li");

      //Creamos el texto
      li.innerText = tweet.tweet;

      //Asignamos el boton
      li.appendChild(btnEliminar);

      //Lo insertamos en el crearHTML
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}
//Agrega los tweets actuales a local storage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Borrar tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);

  console.log(tweets);
}

//Limpiamos el HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
