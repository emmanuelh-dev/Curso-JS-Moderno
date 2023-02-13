//Class declaretion
class Cliente{
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  }
  showInfo(){
    return `El cliente ${this.nombre} tiene un saldo de ${this.saldo}`;
  }
  //Las propiedades estaticas no requieren de una instacia
  static bienvenida(){
    return 'Bienvenido';
  }
}






const juan = new Cliente("Juan", 400);
console.log(juan.showInfo());
console.log(Cliente.bienvenida());
console.log(juan);



//Class expression, is equivalent to class declaration, but it is less used
const Cliente2 = class{

}

const juan2 = new Cliente2();
console.log(juan2);