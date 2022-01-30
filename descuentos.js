// Definimos las variables

const coupons = [
  {
    name: "Cupon10",
    discount: 10,
  },
  {
    name: "Cupon20",
    discount: 20,
  },
  {
    name: "Cupon25",
    discount: 25,
  },
  {
    name: "Cupon50",
    discount: 50,
  },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeACobrar = 100 - descuento;
  const precioConDescuento = (precio * porcentajeACobrar) / 100;
  return precioConDescuento;
}

function onclickCalcularDescuento() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + userCouponValue + " no es válido");
  } else {
    const descuento = userCoupon.discount;

    const calcularDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultado = document.getElementById("resultado");
    resultado.innerText =
      "El precio total con descuento es de " + calcularDescuento + "€";
  }
}
