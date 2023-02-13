class Cliente{
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  }
  showInfo(){
    return `Usted ${this.nombre} tiene un saldo de ${this.saldo}`;
  }
  //Las propiedades estaticas no requieren de una instacia
  static bienvenida(){
    return 'Bienvenido';
  }
}
//Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria){
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  static bienvenida(){//Reescribir un metodo
    return 'Bienvenido al cajero de la empresa';
  }
}


const juan = new Cliente('Juan', 1000);
const empresa = new Empresa("Codigo con juan", 1000, 812230312, 'Economia');

console.log(juan.showInfo());
console.log(empresa.showInfo());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());