class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Inventario{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto)
    }

    mostrarProductos(){
        this.productos.forEach(p =>{
            console.log(`Nombre: ${p.nombre}, Precio: ${p.precio}, Cantidad: ${p.cantidad}`)
        })
    }

    buscarProducto(nombre) {
        return this.productos.find(p => p.nombre === nombre) || 'Producto no encontrado';
    }

    calcularValorTotal() {
        return this.productos.reduce((total, p) => total + (p.precio * p.cantidad), 0);
    }
   
}

const inventario = new Inventario()
inventario.agregarProducto(new Producto('mouse', 1500, 5))

inventario.mostrarProductos();
console.log(inventario.buscarProducto('mouse'))
