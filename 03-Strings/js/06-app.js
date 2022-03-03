const producto = "Monitor 24 pulgadas";

// .repeat te va a permitir repetir una cadena de texto

const texto = "En promocion ".repeat(3);

console.log(texto);
console.log(`${producto} ${texto}`);

//.split, dividir un string

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad);

const hobbies = "Leer, cantar, caminar, Escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo #JSModernoConJuan";
console.log(tweet.split("#"));