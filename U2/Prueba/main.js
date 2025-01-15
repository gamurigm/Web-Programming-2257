// Clase Producto 
class Producto {
    nombre;
    #precio;
    #cantidad;
    #categoria;

    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
        this.#categoria = categoria;
    }

    // Métodos privados para validación
    #validarCantidad(cantidad) {
        if (cantidad < 0) {
            throw new Error("Error: La cantidad no puede ser negativa.");
        }
        return true;
    }

    #validarPrecio(precio) {
        if (precio < 0) {
            throw new Error("Error: El precio no puede ser negativo.");
        }
        return true;
    }

    // Métodos get    
    get precio() {
        return this.#precio;
    }

    get cantidad() {
        return this.#cantidad;
    }

    get categoria() {
        return this.#categoria;
    }

    // Métodos set
    set cantidad(cantidad) {
        if (this.#validarCantidad(cantidad)) {
            this.#cantidad = cantidad;
        }
    }

    set precio(precio) {
        if (this.#validarPrecio(precio)) {
            this.#precio = precio;
        }
    }

    set categoria(categoria) {
        this.#categoria = categoria;
    }
}

// Clase Inventario
class Inventario {
    #productos;

    constructor() {
        this.#productos = [];
    }


    // Método para agregar un producto al inventario
    agregarProducto(producto) {
            this.#productos.push(producto);
    }

    // Getter para productos
    get productos() {
        return this.#productos;
    }

    // Método para listar los productos ordenados alfabéticamente
    listar() {
        this.#productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      
        return this.#productos.map(producto => ({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidad,
            categoria: producto.categoria
        }));
    }

    // Método para filtrar los productos por categoría
    filtrarPorCategoria(categoria) {
        return this.#productos.filter(producto => producto.categoria === categoria);
    }

    // Método para mostrar los productos del inventario
    mostrarProductos() {
        this.#productos.forEach(p => {
            console.log(`Nombre: ${p.nombre}, Precio: ${p.precio}, Cantidad: ${p.cantidad}`);
        });
    }
}

// Clase Venta para manejar las ventas
class Venta {
    #inventario;
    #ventasRealizadas;

    constructor(inventario) {
        this.#inventario = inventario;
        this.#ventasRealizadas = [];
    }

    // Método privado para validar venta
    #validarVenta(productoNombre, cantidad) {
        const producto = this.#inventario.productos.find(p => p.nombre === productoNombre);
        if (!producto) {
            throw new Error("Error: El producto especificado no existe.");
        }
        if (producto.cantidad < cantidad) {
            throw new Error("Error: La cantidad disponible del producto es insuficiente.");
        }
        return producto;
    }

    // Getter para ventas realizadas
    get ventasRealizadas() {
        return this.#ventasRealizadas;
    }

    // Método para realizar una venta
    realizarVenta(productoNombre, cantidad) {
        try {
            const producto = this.#validarVenta(productoNombre, cantidad);
            producto.cantidad -= cantidad;
            this.#ventasRealizadas.push({ 
                nombre: productoNombre, 
                cantidad: cantidad, 
                fecha: new Date() 
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    // Método para aplicar un descuento
    aplicarDescuento(categoria, porcentaje) {
        this.#inventario.productos.forEach(producto => {
            if (producto.categoria === categoria) {
                producto.precio *= (1 - (porcentaje / 100));
            }
        });
    }
}

// Clase Reporte para generar reportes de ventas
class Reporte {
    #inventario;
    #ventas;

    constructor(inventario, ventas) {
        this.#inventario = inventario;
        this.#ventas = ventas;
    }

    // Método para calcular el total de ingresos generados
    calcularTotal() {
        const total = this.#ventas.reduce((acumulador, venta) => {
            let producto = this.#inventario.productos.find(p => p.nombre === venta.nombre);
            return acumulador + (producto ? venta.cantidad * producto.precio : 0);
        }, 0);
        return `$${total.toFixed(2)}`;
    }

    // Método para determinar el producto más vendido
    productoMasVendido() {
        let ventasPorProducto = this.#ventas.reduce((acumulador, venta) => {
            acumulador[venta.nombre] = (acumulador[venta.nombre] || 0) + venta.cantidad;
            return acumulador;
        }, {});
        return Object.keys(ventasPorProducto).reduce((a, b) => 
            ventasPorProducto[a] > ventasPorProducto[b] ? a : b
        );
    }

    // Método para imprimir el reporte detallado
    imprimirReporteDetallado() {
        console.log("Inventario actualizado:", this.#inventario.listar());
        console.log("Ventas realizadas:", this.#ventas);
        console.log("Total de ingresos generados:", this.calcularTotal());
        console.log("Producto más vendido:", this.productoMasVendido());
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

const venta = new Venta(inventario);

// Se aplica un descuento del 10% a todos los productos de Aseo Personal 
venta.aplicarDescuento('aseo personal', 10);
console.log('Descuento del 10% aplicado a los productos:', 
    inventario.filtrarPorCategoria('aseo personal').map(producto => ({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad,
        categoria: producto.categoria
    }))
);

venta.realizarVenta('jabon', 20);
venta.realizarVenta('shampoo', 15);
venta.realizarVenta('aceite 1L', 80);

const reporte = new Reporte(inventario, venta.ventasRealizadas);
reporte.imprimirReporteDetallado();