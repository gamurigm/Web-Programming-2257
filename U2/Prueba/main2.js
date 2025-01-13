
//Requisitos
// Aplicación de estructuras avanzadas de datos (objetos anidados, arreglos de objetos).
// Uso de estructuras de control (if, switch, for, while).
//Implementación de funciones complejas (funciones constructoras) y funciones autoejecutables.
//Uso de métodos get y set en Objetos.
//Uso de Constructores(Object, Object.create, etc);
//Manipulación y filtrado de datos con métodos avanzados de arreglos (map, filter, reduce,
//sort, etc).
//Creación de clases con encapsulación, herencia y métodos privados.


class Producto {
    constructor(nombre, precio, cantidad, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor(){
      this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto)
    }

    listar(){
        let productosOrdenados = this.productos.sort((a, b) => {
            return a.nombre.localeCompare(b.nombre);
        });
        return productosOrdenados;
    }

    filtrarPorCategoria(categoria){
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    mostrarProductos(){
        this.productos.forEach(p =>{
            console.log(`Nombre: ${p.nombre}, Precio: ${p.precio}, Cantidad: ${p.cantidad}`)
        })
    }
}

class Venta {
    constructor(inventario){
        this.inventario = inventario;
        this.ventasRealizadas = [];
    }
    realizarVenta(productoNombre, cantidad){
        let producto = this.inventario.productos.find(p => p.nombre === productoNombre);
        if(!producto){
            console.error("Error: El producto especificado no existe.");
            return;
        }
        if(producto.cantidad < cantidad){
            console.error("Error: La cantidad disponible del producto es insuficiente.");
            return;
        }
        producto.cantidad -= cantidad;
        this.ventasRealizadas.push({nombre: productoNombre, cantidad: cantidad, fecha: new Date()});
    }


    aplicarDescuento(categoria, porcentaje){
        this.inventario.productos.forEach(producto => {
            if(producto.categoria === categoria){
                producto.precio *= (1 - (porcentaje / 100));
            }
        });
    }
}

class Reporte{
    constructor(inventario, ventas){
        this.inventario = inventario;
        this.ventas = ventas;
    }

    calcularTotal(){
        let total = this.ventas.reduce((acumulador, venta) => {
            return acumulador + venta.cantidad * this.inventario.productos.find(p => p.nombre === venta.nombre).precio;
        }, 0);
        return total;
    }

    productoMasVendido(){
        let ventasPorProducto = this.ventas.reduce((acumulador, venta) => {
            if(!acumulador[venta.nombre]){
                acumulador[venta.nombre] = 0;
            }
            acumulador[venta.nombre] += venta.cantidad;
            return acumulador;
        }, {});
        let productoMasVendido = Object.keys(ventasPorProducto).reduce((a, b) => ventasPorProducto[a] > ventasPorProducto[b] ? a : b);
        return productoMasVendido;
    }

    imprimirReporteDetallado(){
        console.log("Inventario actualizado: ", this.inventario.productos);
        console.log("Ventas realizadas: ", this.ventas);
        console.log("Total de ingresos generados: ", this.calcularTotal());
        console.log("Producto más vendido: ", this.productoMasVendido());
    }
}
// Creación de instancias de productos
let producto1 = new Producto('jabon', 2.30, 100, 'aseo personal');
let producto2 = new Producto('shampoo', 5.60, 80, 'aseo personal');
let producto3 = new Producto('desodorante', 3.20, 120, 'aseo personal');
let producto4 = new Producto('aceite 1L', 2.99, 250, 'cocina');
let producto5 = new Producto('coca-cola 1L', 1.5, 100, 'gaseosas');
let producto6 = new Producto('v220', 0.99, 120, 'gaseosas');
let producto7 = new Producto('escoba', 3.20, 100, 'limpieza');
let producto8 = new Producto('trapeador', 5, 200, 'limpieza');
let producto9 = new Producto('sarten', 22, 35, 'cocina');
let producto10 = new Producto('microondas', 55, 50, 'electrodomestico');

// Creación de un inventario y agregado de productos
const inventario = new Inventario();
inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);
inventario.agregarProducto(producto4);
inventario.agregarProducto(producto5);
inventario.agregarProducto(producto6);
inventario.agregarProducto(producto7);
inventario.agregarProducto(producto8);
inventario.agregarProducto(producto9);

// Mostrar los productos del inventario
inventario.mostrarProductos();



//• Correcto diseño y uso de clases con encapsulación y herencia.
//• Efectivo manejo de estructuras de datos avanzadas.
//• Implementación de funciones y manipulación de arreglos con métodos avanzados.//
//• Generación precisa de reportes con datos dinámicos.
//• Documentación del código con comentarios claros y concisos.
