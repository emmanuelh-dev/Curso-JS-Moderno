class Cliente{
  #name;
  setName(name){
    this.#name = name;
  }
  getName(){
    return this.#name;
  }
}

const juan = new Cliente('Juan', 1000);
juan.setName('Pablo');
console.log(juan.getName());