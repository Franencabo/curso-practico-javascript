// Definimos las variables

const precioOriginal = 137;
const descuento = 18;



function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajeACobrar = 100 - descuento;
    const precioConDescuento = (precio * porcentajeACobrar)/100;
    return precioConDescuento;
}



function onclickCalcularDescuento(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const calcularDescuento = calcularPrecioConDescuento(priceValue, discountValue);
 
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio total con descuento es de " + calcularDescuento + "€";
}

