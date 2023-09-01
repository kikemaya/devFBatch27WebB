// 1. RECORRER LOS DATOS

// SE ASEGURAN QUE LOS VALORES DE LA IZQUIERDA, SEAN LOS VALORES MAS CHICOS Y LOS DE LA DERECHA
// LOS MAYORES.
// PREGUNTAR DE DERECHA A IZQUIERDA, SI SOY EL ELEMENTO MAS CHICO QUE EL ELEMENTO QUE ESTOY COMPARANDO Y SI ESO OCURRE, ME INSERTO EN ESA POSICION

function ordenamientoPorInsercion(numerosAOrdenar) {
  // 3, 0, 6, 1
  for (let i = 1; i < numerosAOrdenar.length; i++) {

    // 1 = 1
    // 2 = 2
    let j = i;

    // 1 >= 1 && 0 < 3 = true
    // 0 >= 1
    // 2 >= 1 && 6 < 0
    while (j >= 1 && numerosAOrdenar[j] < numerosAOrdenar[j - 1]) {
      // [3, 0] = [0, 3]
      [numerosAOrdenar[j - 1], numerosAOrdenar[j]] = [numerosAOrdenar[j], numerosAOrdenar[j - 1]]
      // 0, 3, 6, 1
      j--
      // 0
    }
  }

  return numerosAOrdenar
}

console.log(ordenamientoPorInsercion([3, 0, 6, 1]))