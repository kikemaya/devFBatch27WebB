// ¿COMO PUEDO CREAR UN ARREGLO DESDE CERO CON CODIGO?
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  };
  get(index) {
    return this.data[index];
  };
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.data;
  };
  pop() {
    //TODO: VALIDAR QUE EL ARREGLO NO ESTE VACIO
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  };
  // AÑADIR UN PRIMER ELEMENTO
  unshift(item) {
    // - PEDIR UN VALOR A AGREGAR
    // - MODIFICAR LOS INDICES, DESPLAZANDOLOS HACIA ADELANTE
    // - UNA VEZ QUE LO TENGAMOS Y QUE LOS INDICES SE HAYAN MODIFICADO
    // - COLOCAR ESE VALOR EN EL INDICE 0
    // - AUMENTAR LA LONGITUD DEL ARREGLO EN UNA UNIDAD
    // - RETORNAR LA CANTIDAD NUEVA DE ELEMENTOS DEL ARREGLO
    const lastItem = this.data[this.length - 1];

    for (let i = 0; i <= this.length - 1; i++) {
      // VALORES: undefined, 1, 2, 4
      // INDICES: 0, 1, 2, 3
      this.data[i + 1] = this.data[i];
    };

    this.data[this.length] = lastItem;
    this.data[0] = item;

    this.length++;
    return this.length;
  };
  // TODO: CREAR EL METODO PARA REMOVER EL PRIMER ELEMENTO
  shift() { }
};

const arr1 = new MyArray();
console.log(arr1);

console.log(arr1.get(1));

arr1.push("Dolores");
arr1.push(["Español", "Matematicas"]);
arr1.push(78);

console.log(arr1.get(0));
console.log(arr1);

arr1.unshift("cero");

console.log(arr1);