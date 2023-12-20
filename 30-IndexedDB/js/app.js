let DB;
document.addEventListener("DOMContentLoaded", function () {
  crmDB();

  setTimeout(()=> {
    crearCliente();
  }, 5000)
});

function crmDB() {
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la DB');
    }

    // Si todo esta bien, asignar a database el resultado
    crmDB.onsuccess = function(){
        console.log('DB Creada');
        DB = crmDB.result;
    }

    // Configuracion de la DB
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        })

        // Definir las columnas

        objectStore.createIndex('name', 'name', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('phone', 'phone', {unique: true})

        console.log('Columnas creadas')
    }


}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }
    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion')
    }

    const objectStore = transaction.objectStore('crm');
    const nuevoCliente = {telefono: 123456789, nombre: 'Emmanuel', email: 'e805177@gmail.com'}

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}