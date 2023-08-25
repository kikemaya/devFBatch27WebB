// ¿COMO PUEDO CREAR UN ARREGLO DESDE CERO CON CODIGO?
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  };
  get(index) {
    return this.data[index];
  }
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.data;
  }
};

const arr1 = new MyArray();
console.log(arr1);

console.log(arr1.get(1));

arr1.push("Dolores");
arr1.push(["Español", "Matematicas"]);
arr1.push(78);

console.log(arr1.get(0));
console.log(arr1);