//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//Event listeners
eventListeners();

function eventListeners(){
  formulario.addEventListener('submit', agregarTweet);
}


//Funciones

//Funcion agregar tweet
function agregarTweet(e){
  e.preventDefault();

  //Text area donde el usuario escribe
  const tweet = document.querySelector('#tweet').value;
  //Validacion
  if(tweet === ""){
    mostrarError("No puede ir vacio");
    return;
  }
  const tweetObj = {
    id: Date.now(),
    tweet
  }
  //Agregar tweet
  tweets = [...tweet, tweetObj];
  console.log(tweets);

  //Crando el html
}

//Funcion para mostrar el mensaje de error
function mostrarError(mensaje){
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add("error");

  //Lo insertamos en el contenido
  const contendio = document.querySelector("#contenido")
  contendio.appendChild(mensajeError);

  //Lo ocultamos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}


//Muesta los tweets
function crearHTML(){
  if(tweets.length > 0){
    tweets.forEach(tweet => {
      //Creamos el HTML
      const li = document.createElement('li');
      //Añadimos el texto
      li.innerText = tweet.text;
      //Insertamos en el contenido
    })
  }
}