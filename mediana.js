function calcularMediaAritmetica (lista) {  
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
}



const lista1 = [
    500, 100, 200, 400000000
];
lista1.sort(function(a,b){
    return a - b;
});

const mitadLista1 = parseInt(lista1.length/2);

function esPar(number){
    if (number % 2 === 0 ) {
        return true;
    } else {
        return false;
    }

}

let mediana;

if (esPar(lista1.length)) {
    const element1 = lista1[mitadLista1 - 1];
    const element2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        element1,
        element2
    ])

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}