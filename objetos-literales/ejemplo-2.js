const miCuentaDeAlumno = {
  // IDEALMENTE, SI LE PONES "" O '' A UN ATRIBUTO, PARA MANTENER TU BASE DE CODIGO/CODEBASE UNIFORME, TIENES QUE AÑADIRSELAS A LOS DEMAS ATRIBUTOS
  "id": "45ghj34g54h3g",
  "nombre completo": "Cinthya",
  "materias": ["Español", "Matematicas", "Fisica"],
  "mascota1": "gato",
  "mascota2": "gata",
  mostrarGrupo() {
    return `El alumno ${this["nombre completo"]}, se encuentra cursando la materia ${this.materias[2]}`;
  }
};

let claveDinamica = "nombre completo";

// UN "typo", ES UN ERROR DE ORTOGRAFIA EN EL CODIGO

// TAMBIEN PODEMOS ACCEDER A LOS VALORES DE NUESTROS OBJETOS CON LA NOTACION DE CORCHETES CUADRADOS/SQUARE BRACKET NOTATION
console.log(miCuentaDeAlumno["id"]);

console.log(miCuentaDeAlumno["mostrarGrupo"]());

// LA SQUARE BRACKET NOTATION, NOS PERMITE AÑADIR UN POCO MAS DE DINAMISMO AL PODER CONCATENRA DENTRO LOS CORCHETES
console.log(miCuentaDeAlumno["mascota" + 1]);


console.log(miCuentaDeAlumno[claveDinamica]);