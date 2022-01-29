// Código del cuadrado

console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
};
function areaCuadrado (lado){
    return lado * lado;
} 
console.log("El área del cuadrado miden: " + areaCuadrado + "cm2" );

console.groupEnd();


// Código del triángulo

console.group("Triangulos");
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
};
function areaTriangulo (base, altura){
   return (base * altura) / 2;
};
console.groupEnd();



//Código del triangulo isosceles
console.group("Triángulo Isósceles");


function alturaIsosceles(lado1, lado2, base){
    if(lado1 === lado2 && lado1 !== base){
        return Math.sqrt( lado1**2 - (base**2 / 4))
    } else {
        alert("Esto no es un triángulo isósceles")
    }
}
console.groupEnd();


// Código del círculo

console.group("Círculo");


// Diámetro
function diametroCirculo(radio){
    return radio * 2;
};
console.log("El diámetro del círculo es : " + diametroCirculo + "cm");

// Número PI
const PI = Math.PI;

// Circunferencía
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
   return diametro * PI;
};


// Área
function areaCirculo(radio){
return (radio*radio) * PI;
};
console.groupEnd();


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function calcularAlturaIsosceles(){
    const inputlado1 = document.getElementById("inputlado1");
    const inputlado2 = document.getElementById("inputlado2");
    const inputbase = document.getElementById("inputbase");
    const valuelado1 = inputlado1.value;
    const valuelado2 = inputlado2.value;
    const valuebase = inputbase.value;

    const altura = alturaIsosceles(valuelado1, 
        valuelado2, valuebase);
    alert(altura);
}