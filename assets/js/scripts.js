let cantidad = document.querySelector("#cantidad");
let color = document.querySelector("#color");
let precio = document.querySelector("#precio");
let t_precio = document.querySelector("#t-precio span");
let t_cantidad = document.querySelector("#t-cantidad span");
let color_c = document.querySelector("#color-circle");

let precioproducto = 2449990;
price.innerHTML = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
}).format(total);

function total() {
  let total = Number(cantidad.value) * precioproducto;
  t_precio.innerHTML = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(total);
  t_cantidad.innerHTML = cantidad.value;
  color_c.style.backgroundColor = color.value;
}
