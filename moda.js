const lista1 = [1, 2, 3, 1, 2, 3, 1, 4, 4, 2, 2, 2, 2, 1];


function calcularModa(lista){ 
    const lista1Count = {};
    
    lista.map(function (element) {
      if (lista1Count[element]) {
        lista1Count[element] += 1;
      } else {
        lista1Count[element] = 1;
      }
    });
    
    const lista1Array = Object.entries(lista1Count).sort(function (
      elementA,
      elementB
    ) {
      return elementA[1] - elementB[1];
    });
    
    
    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}
