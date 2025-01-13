// Implementación de los requisitos solicitados

// Clase Producto para representar los productos en el inventario
class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    // Métodos get
    get getNombre() {
        return this.nombre;
    }

    get getPrecio() {
        return this.precio;
    }

    get getCantidad() {
        return this.cantidad;
    }

    // Métodos set con validaciones
    set setCantidad(cantidad) {
        if (cantidad < 0) {
            console.error("Error: La cantidad no puede ser negativa.");
            return;
        }
        this.cantidad = cantidad;
    }

    set setPrecio(precio) {
        if (precio < 0) {
            console.error("Error: El precio no puede ser negativo.");
            return;
        }
        this.precio = precio;
    }

    set setCategoria(categoria) {
        this.categoria = categoria;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }
}

// Clase Inventario para manejar los productos
class Inventario {
    constructor() {
        this.productos = [];
    }

    // Método para agregar un producto al inventario
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    // Método para listar los productos ordenados alfabéticamente (ascendente)
    listar() {
        return this.productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // Método para filtrar los productos por categoría
    filtrarPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    // Método para mostrar los productos del inventario
    mostrarProductos() {
        this.productos.forEach(p => {
            console.log(`Nombre: ${p.nombre}, Precio: ${p.precio}, Cantidad: ${p.cantidad}`);
        });
    }
}

// Clase Venta para manejar las ventas
class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventasRealizadas = [];
    }

    // Método para realizar una venta
    realizarVenta(productoNombre, cantidad) {
        let producto = this.inventario.productos.find(p => p.nombre === productoNombre);
        if (!producto) {
            console.error("Error: El producto especificado no existe.");
            return;
        }
        if (producto.cantidad < cantidad) {
            console.error("Error: La cantidad disponible del producto es insuficiente.");
            return;
        }
        producto.cantidad -= cantidad;
        this.ventasRealizadas.push({ nombre: productoNombre, cantidad: cantidad, fecha: new Date() });
    }

    // Método para aplicar un descuento a los productos de una categoría específica
    aplicarDescuento(categoria, porcentaje) {
        this.inventario.productos.forEach(producto => {
            if (producto.categoria === categoria) {
                producto.precio *= (1 - (porcentaje / 100));
            }
        });
    }
}

// Clase Reporte para generar reportes de ventas
class Reporte {
    constructor(inventario, ventas) {
        this.inventario = inventario;
        this.ventas = ventas;
    }

    // Método para calcular el total de ingresos generados
    calcularTotal() {
        return this.ventas.reduce((acumulador, venta) => {
            let producto = this.inventario.productos.find(p => p.nombre === venta.nombre);
            return acumulador + (producto ? venta.cantidad * producto.precio : 0);
        }, 0);
    }

    // Método para determinar el producto más vendido
    productoMasVendido() {
        let ventasPorProducto = this.ventas.reduce((acumulador, venta) => {
            acumulador[venta.nombre] = (acumulador[venta.nombre] || 0) + venta.cantidad;
            return acumulador;
        }, {});
        return Object.keys(ventasPorProducto).reduce((a, b) => ventasPorProducto[a] > ventasPorProducto[b] ? a : b);
    }

    // Método para imprimir el reporte detallado
    imprimirReporteDetallado() {
        console.log("Inventario actualizado: ", this.inventario.listar());
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
inventario.agregarProducto(producto10);

// Creación de una instancia de Venta
const venta = new Venta(inventario);

// Se aplica un descuento del 10% a todos los productos de Aseo Personal y se ven los productos
venta.aplicarDescuento('aseo personal', 10);
console.log('Descuento del 10% aplicado a los productos:', inventario.filtrarPorCategoria('aseo personal'));

// Realización de ventas
venta.realizarVenta('jabon', 20);
venta.realizarVenta('shampoo', 15);
venta.realizarVenta('aceite 1L', 90);

// Creación de un reporte e impresión del reporte
const reporte = new Reporte(inventario, venta.ventasRealizadas);
reporte.imprimirReporteDetallado();



