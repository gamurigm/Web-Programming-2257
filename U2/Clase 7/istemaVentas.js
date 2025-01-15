class Producto {
    static _contadorProductos = 0;
    _idProducto;
    _nombre;
    _precio;
    _categoria;
    _stock;

    constructor(nombre, precio, categoria, stockInicial = 0) {
        if (stockInicial < 0) {
            throw new Error('El stock inicial no puede ser negativo');
        }

        this._idProducto = ++Producto._contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._stock = stockInicial;
    }

    get id() { return this._idProducto; }
    get nombre() { return this._nombre; }
    get precio() { return this._precio; }
    get categoria() { return this._categoria; }
    get stock() { return this._stock; }

    agregarStock(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('La cantidad debe ser un número positivo');
        }
        this._stock += cantidad;
        console.log(`Stock agregado: ${cantidad} unidades al producto ${this._nombre}. Stock actual: ${this._stock}`);
    }

    retirarStock(cantidad) {
        if (cantidad <= 0) {
            throw new Error('La cantidad debe ser un número positivo');
        }
        if (this._stock < cantidad) {
            throw new Error(`Stock insuficiente. Stock actual: ${this._stock}, Cantidad solicitada: ${cantidad}`);
        }
        this._stock -= cantidad;
        console.log(`Stock retirado: ${cantidad} unidades del producto ${this._nombre}. Stock restante: ${this._stock}`);
    }

    toString() {
        return `ID: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio.toFixed(2)}, Stock: ${this._stock}`;
    }
}

class Orden {
    static _contadorOrdenes = 0;
    static _MAX_PRODUCTOS = 5;
    static _descuentosGlobales = {};

    _idOrden;
    _productos;
    _fechaCreacion;

    constructor() {
        this._idOrden = ++Orden._contadorOrdenes;
        this._productos = [];
        this._fechaCreacion = new Date();
    }

    static descuentoCategoria(categoria, porcentaje) {
        Orden._descuentosGlobales[categoria] = porcentaje;
        console.log(`Descuento del ${porcentaje}% establecido para la categoría "${categoria}"`);
    }

    get id() { return this._idOrden; }

    agregarProducto(producto, cantidad = 1) {
        if (this._productos.length >= Orden._MAX_PRODUCTOS) {
            throw new Error(`No se pueden agregar más de ${Orden._MAX_PRODUCTOS} productos por orden`);
        }

        if (cantidad > producto.stock) {
            console.log(`No se pudo generar la orden debido a stock insuficiente para ${producto.nombre}. Stock disponible: ${producto.stock}`);
            return false;
        }

        try {
            producto.retirarStock(cantidad);
            const descuento = Orden._descuentosGlobales[producto.categoria] || 0;
            this._productos.push({ 
                producto, 
                cantidad, 
                descuento: (producto.precio * descuento) / 100 
            });
            console.log(`Producto agregado a la orden ${this._idOrden}: ${cantidad} unidad(es) de ${producto.nombre}`);
            return true;
        } catch (error) {
            console.error(`Error al agregar producto: ${error.message}`);
            return false;
        }
    }

    calcularTotal() {
        return this._productos.reduce((total, item) => {
            const precioConDescuento = item.producto.precio - item.descuento;
            return total + (precioConDescuento * item.cantidad);
        }, 0);
    }

    toString() {
        const total = this.calcularTotal();
        const impuestos = total * 0.15;
        const totalConImpuestos = total + impuestos;

        return `
Orden #${this._idOrden} - Fecha: ${this._fechaCreacion.toLocaleDateString()}
----------------------------------------
Productos:
${this._productos.map(item => {
    const precioConDescuento = item.producto.precio - item.descuento;
    return `- ${item.cantidad}x ${item.producto.nombre} ($${precioConDescuento.toFixed(2)} c/u) = $${(item.cantidad * precioConDescuento).toFixed(2)}`;
}).join('\n')}
----------------------------------------
Subtotal: $${total.toFixed(2)}
Impuestos (15%): $${impuestos.toFixed(2)}
Total: $${totalConImpuestos.toFixed(2)}
`;
    }
}

// Crear productos con stock inicial
const inventario = {
    camisa: new Producto('Camisa', 25.99, 'ropa', 10),
    pantalon: new Producto('Pantalón', 35.50, 'ropa', 8),
    zapatos: new Producto('Zapatos', 75.00, 'calzado', 5),
    abrigo: new Producto('Abrigo', 100.00, 'ropa', 3)
};

// Aplicar descuento a la categoría 'ropa'
Orden.descuentoCategoria('ropa', 10);

// Crear órdenes
console.log('Creando Orden 1:');
const orden1 = new Orden();
orden1.agregarProducto(inventario.camisa, 2);
orden1.agregarProducto(inventario.pantalon, 1);

console.log('\nCreando Orden 2:');
const orden2 = new Orden();
orden2.agregarProducto(inventario.pantalon, 2);
orden2.agregarProducto(inventario.zapatos, 1);

// Mostrar las órdenes
console.log('\nMostrando órdenes:');
console.log(orden1.toString());
console.log(orden2.toString());

