const List = [
  ".DS_Store",
  ".git",
  ".gitattributes",
  "01-Introduccion",
  "02-Variables",
  "03-Strings",
  "04-Numeros",
  "05-Operadores",
  "06-Booleans",
  "07-Objetos",
  "08-Arrays",
  "09-Funciones",
  "10-Estructuras",
  "11-Iteradores",
  "12-ArrayMethods",
  "13-DOM",
  "14-Eventos",
  "15-PROYECTO-Carrito",
  "16-PROYECTO-EnviarEmail",
  "17-PROYECTO-Buscador",
  "18-LocalStorage",
  "19-PROYECTO-LocalStorage",
  "20-PROYECTO-Carrito-LS",
  "21-Fechas",
  "22-Prototypes",
  "23-PROYECTO-Prototypes-Seguro",
  "24-POO",
  "25-PROYECTO-GastoSemanal",
  "26-PROYECTO-AdministrarCitas",
  "27-SetsMapsSymbols",
  "28-Modulos",
  "29-PROYECTO-CitasModulos",
  "30-IndexedDB",
  "31-PROYECTO-IndexedDB",
  "32-PROYECTO-CRMIndexedDB",
  "33-Promises",
  "34-APIs-JS",
  "35-FetchAPI",
  "36-PROYECTO-Clima",
  "37-PROYECTO-BuscarCanciones",
  "38-PROYECTO-PixabayImagenes",
  "39-PROYECTO-Criptomonedas",
  "40-PROYECTO-Calculadora de Propinas con JSON-Server",
  "41-AsyncAwait",
  "42-PROYECTO-AsyncAwait-Pixabay",
  "43-PROYECTO-AsyncAwait-Criptomonedas",
  "44-PROYECTO-CRM-CRUD-REST",
  "45-FunctionalJS",
  "46-DominandoJavaScript",
  "47-ServiceWorkers-PWA",
  "48-DesignPatterns",
  "49-Seguridad-Performance-Debug",
  "50-Testing-JS",
  "51-Testing-Jest",
  "52-Testing-Cypress",
  "53-Webpack-ESLint",
  "assets",
  "package.json",
  "script.js",
];
document.addEventListener("DOMContentLoaded", function () {
  const appDiv = document.getElementById("app");

  if (Array.isArray(List)) {
    const listLinks = List.map(
      (element) => `<li><a href="/${element}">${element}</a></li>`
    ).join("");
    appDiv.innerHTML = `<ul>${listLinks}</ul>`;
  } else {
    appDiv.innerHTML = "Error al cargar la lista desde el archivo JSON.";
  }
});