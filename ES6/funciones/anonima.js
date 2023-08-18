// FUNCIONES ANONIMAS AUTOEJECUTABLES//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function () {
  return console.log("Soy una funcion anonima autoejecutable...")
})();

(() => {
  return console.log("Soy una funcion anonima autoejecutable de flecha...")
})();

(function (a, b) {
  return console.log(a + b);
})(67, 9);

// TRANSFORMAR LA IIFE ANTERIOR EN UNA FUNCION FLECHA
((a, b) => console.log(a + b))(3, 16);
