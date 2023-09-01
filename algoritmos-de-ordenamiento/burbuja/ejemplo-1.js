const arr = [0, 12, 67, 4, 2, 1];

function ordenamientoBurbuja(arregloDeNumerosAOrdenar) {
  // 6
  const total = arregloDeNumerosAOrdenar.length;

  // RECORRER TODAS LAS POSICIONES DEL ARREGLO PARA AVANZAR
  for (let i = 0; i < total; i++) {
    // COMPARAR VALORES POR PAREJAS Y ORDENARLAS DE MENOR A MAYOR
    for (let j = 0; j < total; j++) {
      if (arregloDeNumerosAOrdenar[j] > arregloDeNumerosAOrdenar[j + 1]) {
        [arregloDeNumerosAOrdenar[j], arregloDeNumerosAOrdenar[j + 1]] = [arregloDeNumerosAOrdenar[j + 1], arregloDeNumerosAOrdenar[j]];
      }
    }
  }
  // RETORNAR EL ARREGLO ORDENADO
  return arregloDeNumerosAOrdenar
}

console.log(ordenamientoBurbuja(arr));