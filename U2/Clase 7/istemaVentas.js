class Producto {
    static #contadorProductos = 0;
    #idProducto;
    #nombre;
    #precio;
    #categoria;
    #stock;

    constructor(nombre, precio, categoria, stockInicial = 0) {
        if (!nombre || typeof nombre !== 'string') {
            throw new Error('El nombre del producto es requerido y debe ser texto');
        }
        if (!precio || typeof precio !== 'number' || precio <= 0) {
            throw new Error('El precio debe ser un número mayor que 0');
        }
        if (stockInicial < 0) {
            throw new Error('El stock inicial no puede ser negativo');
        }
        
        this.#idProducto = ++Producto.#contadorProductos;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria || 'general';
        this.#stock = stockInicial;
    }

    get id() { return this.#idProducto; }
    get nombre() { return this.#nombre; }
    get precio() { return this.#precio; }
    get categoria() { return this.#categoria; }
    get stock() { return this.#stock; }

    agregarStock(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('La cantidad debe ser un número positivo');
        }
        this.#stock += cantidad;
        console.log(`Stock agregado: ${cantidad} unidades al producto ${this.#nombre}. Stock actual: ${this.#stock}`);
    }

    retirarStock(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('La cantidad debe ser un número positivo');
        }
        if (this.#stock < cantidad) {
            throw new Error(`Stock insuficiente. Stock actual: ${this.#stock}, Cantidad solicitada: ${cantidad}`);
        }
        this.#stock -= cantidad;
        console.log(`Stock retirado: ${cantidad} unidades del producto ${this.#nombre}. Stock restante: ${this.#stock}`);
    }

    toString() {
        return `ID: ${this.#idProducto}, Nombre: ${this.#nombre}, Precio: $${this.#precio.toFixed(2)}, Stock: ${this.#stock}`;
    }
}

class Orden {
    static #contadorOrdenes = 0;
    static #MAX_PRODUCTOS = 5;
    #idOrden;
    #productos;
    #fechaCreacion;

    constructor() {
        this.#idOrden = ++Orden.#contadorOrdenes;
        this.#productos = [];
        this.#fechaCreacion = new Date();
    }

    get id() { return this.#idOrden; }

    agregarProducto(producto, cantidad = 1) {
        if (this.#productos.length >= Orden.#MAX_PRODUCTOS) {
            throw new Error(`No se pueden agregar más de ${Orden.#MAX_PRODUCTOS} productos por orden`);
        }

        // Verificación de stock
        if (cantidad > producto.stock) {
            console.log(`No se pudo generar la orden debido a stock insuficiente para ${producto.nombre}. Stock disponible: ${producto.stock}`);
            return false; // Retorna false si no hay suficiente stock
        }

        try {
            producto.retirarStock(cantidad);
            this.#productos.push({ producto, cantidad });
            console.log(`Producto agregado a la orden ${this.#idOrden}: ${cantidad} unidad(es) de ${producto.nombre}`);
            
            // Aplicar descuento a la categoría "ropa"
            this.descuentoCategoria('ropa', 10); // Aplica el descuento del 10%
            
            console.log(this.toString());
            return true;
        } catch (error) {
            console.error(`Error al agregar producto: ${error.message}`);
            return false;
        }
    }

    descuentoCategoria(categoria, porcentaje) {
        this.#productos.forEach(item => {
            if (item.producto.categoria === categoria) {
                item.descuento = (item.producto.precio * porcentaje) / 100; // Calcula el descuento
                item.precioConDescuento = item.producto.precio - item.descuento; // Guarda el precio con descuento
            }
        });
        console.log(`Descuento del ${porcentaje}% aplicado a los productos de la categoría "${categoria}".`);
    }

    calcularTotal() {
        return this.#productos.reduce((total, item) => {
            const precioConDescuento = item.producto.precio - (item.descuento || 0); // Aplica el descuento si existe
            return total + (precioConDescuento * item.cantidad);
        }, 0);
    }

    toString() {
        const total = this.calcularTotal();
        const impuestos = total * 0.15;
        const totalConImpuestos = total + impuestos;

        return `
Orden #${this.#idOrden} - Fecha: ${this.#fechaCreacion.toLocaleDateString()}
----------------------------------------
Productos:
${this.#productos.map(item => {
    const precioConDescuento = item.producto.precio - (item.descuento || 0); // Aplica el descuento si existe
    return `- ${item.cantidad}x ${item.producto.nombre} ($${precioConDescuento.toFixed(2)} c/u) = $${(item.cantidad * precioConDescuento).toFixed(2)}`;
}).join('\n')}
----------------------------------------
Subtotal: $${total.toFixed(2)}
Impuestos (15%): $${impuestos.toFixed(2)}
Total: $${totalConImpuestos.toFixed(2)}
`;
    }

    aplicarDescuentos(categoria, porcentaje) {
        this.descuentoCategoria(categoria, porcentaje); // Aplica el descuento a la categoría especificada
    }
}

// Crear productos con stock inicial
const inventario = {
    camisa: new Producto('Camisa', 25.99, 'ropa', 10),
    pantalon: new Producto('Pantalón', 35.50, 'ropa', 8),
    zapatos: new Producto('Zapatos', 75.00, 'calzado', 5),
    abrigo: new Producto('Abrigo', 100.00, 'ropa', 3)
};

// Mostrar inventario inicial
console.log('\nInventario Inicial:');
Object.values(inventario).forEach(producto => console.log(producto.toString()));

// Crear primera orden
console.log('\nCreando Orden 1:');
const orden1 = new Orden();
orden1.agregarProducto(inventario.camisa, 2);
orden1.agregarProducto(inventario.pantalon, 1);
orden1.aplicarDescuentos('ropa', 10); // Aplica el descuento del 10% a la categoría "ropa"
console.log(orden1.toString());

// Mostrar inventario después de la primera orden
console.log('\nInventario después de Orden 1:');
Object.values(inventario).forEach(producto => console.log(producto.toString()));

// Crear segunda orden
console.log('\nCreando Orden 2:');
const orden2 = new Orden();
orden2.agregarProducto(inventario.camisa, 3);
orden2.agregarProducto(inventario.zapatos, 2);
orden2.agregarProducto(inventario.abrigo, 1);
console.log(orden2.toString());

// Mostrar inventario final
console.log('\nInventario Final:');
Object.values(inventario).forEach(producto => console.log(producto.toString()));

// Intentar crear una orden que excede el stock disponible
console.log('\nIEjemplo de stock insuficiente:');
const orden3 = new Orden();
orden3.agregarProducto(inventario.camisa, 10); // Esto debería fallar por stock insuficiente
console.log(orden3.toString());

// Ejemplo de uso del método agregarStock
console.log('\nAgregando stock a la camisa:');
inventario.camisa.agregarStock(5); 
console.log(inventario.camisa.toString()); 