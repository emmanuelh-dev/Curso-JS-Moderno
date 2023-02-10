//Como se comunican las funciones
function iniciador() {
  console.log("Hola mundo");
  let usuario = "Emmanuel";
  primeraFuncion(usuario);
  return usuario;
}
function primeraFuncion(usuario) {
  console.log("Primera funcion");

  autenticado(usuario);
}

//Autenticado usuario
function autenticado(usuario) {
  console.log("Autenticado");
  console.log(`Usuario: ${usuario}`);
}

iniciador();
