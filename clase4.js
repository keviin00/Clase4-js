let CantidadProducto = parseInt(prompt("Ingrese la cantidad del producto"))
const PrecioProducto = 50;


while(CantidadProducto != "0" ) 

{
  productos(CantidadProducto, PrecioProducto);
  CantidadProducto = prompt("Ingrese la cantidad del producto");
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

console.log(CantidadProducto);
