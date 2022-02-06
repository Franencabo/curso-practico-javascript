//Helpers
function esPar(number) {
  return number % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista1 = sumaLista / lista.length;
  return promedioLista1;
}

// Calculadora de medianas
function medianaSalariosCol(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personMiddle1 = lista[mitad] - 1;
    const personMiddle2 = lista[mitad] - 2;

    const mediana = calcularMediaAritmetica([personMiddle1, personMiddle2]);
    return mediana;
  } else {
    const personMiddle = lista[mitad];
    return personMiddle;
  }
}

//Mediana general

const salariesCol = colombia.map(function (person) {
  return person.salary;
});

const salariesColSorted = salariesCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});



const medianaGeneralCol = medianaSalariosCol(salariesColSorted);

//Mediana del top 10%
const spliceStart = (salariesColSorted.length * (100 - 10)) / 100;
const spliceCount = salariesColSorted.length - spliceStart;
const salariosColTop10 = salariesColSorted.splice(
    spliceStart, 
    spliceCount
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);


console.log({
medianaGeneralCol,
medianaTop10Col
});
