const fs = require("fs");

function listDirectory(path) {
  try {
    return fs.readdirSync(path);
  } catch (error) {
    return error.message;
  }
}

function saveToJson(data, filename) {
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 4));
    return true;
  } catch (error) {
    return error.message;
  }
}

function main() {
  const directoryPath = "/home/emmanuel/Desktop/Curso-JS-Moderno"; // Replace with a directory path in your case
  const contents = listDirectory(directoryPath);

  if (Array.isArray(contents)) {
    console.log("Contenidos del directorio:", contents);

    // Opción 1: Guardar en un archivo JSON
    const jsonFilename = "contenido_directorio.json";
    if (saveToJson(contents, jsonFilename)) {
      console.log(`Contenidos guardados en '${jsonFilename}'`);
    } else {
      console.log("Error al guardar en JSON.");
    }

    // Opción 2: Almacenar en un arreglo en memoria
    const inMemoryArray = contents;
    console.log("Contenidos en memoria:", inMemoryArray);
  } else {
    console.log("Error:", contents);
  }
}

main();
