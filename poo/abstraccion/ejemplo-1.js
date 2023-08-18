// class en Javascript es azucar sintactico. En Javascript no existen las clases
// CODE REFACTOR = REFABRICAR CODIGO. PASAMOS UNA FUNCION CONSTRUCTORA A UNA CLASS
class Animal {
  // LAS CLASES CUENTAN CON UN METODO LLAMADO constructor() {},
  // EN DONDE SE CONSTRUYEN LAS PROPIEDADES
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
  }

  sonidoAnimal() {
    return `Hola, estoy emitiendo el sonido de ${this.nombre}`;
  };
};

let perro = new Animal("perro", "cafe");
let gato = new Animal("gato", "naranja");

console.log(perro);
console.log(perro.nombre);

