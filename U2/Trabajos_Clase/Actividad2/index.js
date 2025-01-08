//Inventario Inicial
const inventarioInicial = Object.freeze({
    producto1: { nombre: "Producto A", precio: 100, cantidad: 50 },
    producto2: { nombre: "Producto B", precio: 200, cantidad: 100 },
    producto3: { nombre: "Producto C", precio: 150, cantidad: 20 },
    producto4: { nombre: "Producto D", precio: 250, cantidad: 10 }
});

const inventario = Object.seal(inventarioInicial);

function venderProducto(nombre, cantidad) {
    for (let producto in inventario) {
        if (inventario[producto].nombre === nombre) {
            if (inventario[producto].cantidad >= cantidad) {
                inventario[producto].cantidad -= cantidad;
                console.log(`Venta confirmada: ${cantidad} de ${nombre} vendido(s).`);
                return;
            } else {
                console.log(`Error: No hay suficiente stock de ${nombre}.`);
                return;
            }
        }
    }
    console.log(`Error: El producto ${nombre} no existe.`);
}

// Descuentos
function aplicarDescuento(porcentaje) {
    for (let producto in inventario) {
        let nuevoPrecio = inventario[producto].precio * (1 - porcentaje / 100);
        inventario[producto].precio = nuevoPrecio;
     }
}

venderProducto("Producto A", 5);
venderProducto("Producto B", 40); // Ejemplo de error por falta de stock
aplicarDescuento(10); // Aplicar un descuento del 10%

// Mostrar el inventario final
console.log(inventario);