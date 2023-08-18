// DEFINICION: JAVASCRIPT, ES UN LENGUAJE MULTIPARADIGMA,
// PRINCIPALMENTE ORIENTADO A OBJETOS Y BASADO EN PROTOTIPOS
function Animal(nombre, color) {
  this.nombre = nombre;
  this.color = color;
  // DIRENCIA DE METODO Y FUNCION:
  // * UN METODO, ES UNA FUNCION QUE SE DECLARA DENTRO DE UN PROTOTIPO
  this.sonidoAnimal = function sonidoAnimal() {
    return `Hola, estoy emitiendo el sonido de ${this.nombre}`;
  };
};

// UN OBJETO, ES UNA INSTANCIA DE UN PROTOTIPO
const jaguar = new Animal("jaguar", "amarillo");
const jirafa = new Animal("jirafa", "amarillo con manchas");
const conejo = new Animal("conejo", "gris");

// PARA ACCEDER A LAS PROPIEDADES DE UN OBJETO, HACEMOS USO DE LA NOTACION DEL PUNTO, DOT NOTATION
console.log(jaguar.nombre);
console.log(jirafa.color);

// TAMBIEN PUEDO ACCEDER A LAS PROPIEDADES DE UN OBJETO CON LA NOTACION DE CORCHETES CUADRADOS/SQUARE BRACKET NOTATION
console.log(conejo["nombre"]);

// DIRENCIA DE METODO Y FUNCION:
// * UN METODO, SE EJECUTA UTILIZANDO EL OBJETO Y LA NOTACION DEL PUNTO
console.log(jaguar.sonidoAnimal());





