//Variables y selectores
const formulario = document.querySelector("#agregar-gasto")
const gastoListado = document.querySelector("#gasto ul")

//Events
eventListeners  ()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
}

//classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        
    }
}
class UI{

}

//Functions
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("Cual es tu presupuesto?")

    console.log(Number(presupuestoUsuario))

    if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload()
    }

    
}