let CantidadProducto = parseInt(prompt("Ingrese la cantidad del producto"))
const PrecioProducto = 50;

for (let i = 1; i<=1;i++){
  productos(CantidadProducto, PrecioProducto);

}

function productos() {
  Compra = CantidadProducto * PrecioProducto;
  if (CantidadProducto >= 20) {
    Desc = Compra * 0.15;
    Total = Compra - Desc;
    console.log("el total de su compra es" + " " + Total);
  } else if (CantidadProducto < 20) {
    console.log("el total de su compra es" + " " + Compra);
  }
}
