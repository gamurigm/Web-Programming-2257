class Plato {
    #nombre;
    #categoria;
    #precio; 
    #estado;

    constructor(nombre, categoria, precio, estado) {
        this.#nombre = nombre;
        this.#categoria = categoria;
        this.#precio = precio;
        this.#estado = estado;
    }

    get nombre() {
        return this.#nombre;
    }

    get categoria() {
        return this.#categoria;
    }

    get precio() {
        return this.#precio;
    }

    get estado() {
        return this.#estado;
    }

    set nombre(value) {
        this.#nombre = value;
    }

    set categoria(value) {
        this.#categoria = value;
    }

    set precio(value) {
        this.#precio = value;
    }

    set estado(value) {
        this.#estado = value;
    }

    toJSON() {
        return {
            nombre: this.#nombre,
            categoria: this.#categoria,
            precio: this.#precio,
            estado: this.#estado
        };
    }

    mostrarInfo() {
        return `Nombre: ${this.#nombre}, Categoría: ${this.#categoria}, Precio: $${this.#precio.toFixed(2)}, Estado: ${this.#estado ? 'Disponible' : 'No disponible'}`;
    }

    prepararPlato() {
        return new Promise((resolve) => {
            console.log(`Preparando ${this.#nombre}...`);
            setTimeout(() => {
                this.#estado = true;
                console.log(`${this.#nombre} está listo y disponible.`);
                resolve(this);
            }, 2000);
        });
    }
}

class Menu {
    #platos;
    #intervaloActualizacion;

    constructor() {
        this.#platos = [];
        this.#intervaloActualizacion = null;
    }

    agregarPlato(plato) {
        this.#platos.push(plato);
    }

    obtenerPlatos() {
        return [...this.#platos];
    }

    buscarPlato(nombre) {
        return this.#platos.find(plato => plato.nombre === nombre);
    }

    mostrarMenu() {
        return this.#platos.map(plato => plato.mostrarInfo()).join('\n');
    }

    iniciarActualizacionAutomatica() {
        if (this.#intervaloActualizacion) {
            return;
        }

        this.#intervaloActualizacion = setInterval(() => {
            console.log("Actualizando el menú...");
            this.#platos.forEach(plato => {
                if (!plato.estado) {
                    console.log(`El plato ${plato.nombre} aún no está disponible.`);
                }
            });
        }, 30000);
    }

    detenerActualizacionAutomatica() {
        if (this.#intervaloActualizacion) {
            clearInterval(this.#intervaloActualizacion);
            this.#intervaloActualizacion = null;
        }
    }

    actualizarDisponibilidad() {
        return Promise.all(this.#platos.map(plato => {
            if (!plato.estado) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        plato.estado = true;
                        console.log(`El plato ${plato.nombre} está ahora disponible.`);
                        resolve();
                    }, 10000);
                });
            }
            return Promise.resolve();
        }));
    }
}

class Pedido {
    #cliente;
    #platosSolicitados;
    #total;

    constructor(cliente) {
        this.#cliente = cliente;
        this.#platosSolicitados = [];
        this.#total = 0;
    }

    agregarPlato(plato) {
        if (!plato.estado) {
            throw new Error(`El plato ${plato.nombre} no está disponible.`);
        }
        this.#platosSolicitados.push(plato);
        this.#total += plato.precio;
    }

    obtenerTotal() {
        return this.#total;
    }

    mostrarPedido() {
        return {
            cliente: this.#cliente,
            platos: this.#platosSolicitados.map(plato => plato.toJSON()),
            total: this.#total
        };
    }

    obtenerPlatosSolicitados() {
        return this.#platosSolicitados.map(plato => plato.mostrarInfo()).join('\n');
    }

    async procesarPedido() {
        console.log(`Procesando pedido para ${this.#cliente}...`);
        
        // Preparar todos los platos en paralelo
        await Promise.all(
            this.#platosSolicitados.map(plato => plato.prepararPlato())
        );

        console.log("Pedido procesado completamente.");
        console.log("Platos en el pedido:");
        console.log(this.obtenerPlatosSolicitados());
        console.log(`Total a pagar: $${this.#total.toFixed(2)}`);
        
        return this.mostrarPedido();
    }
}

// Ejemplo de uso
async function main() {
    try {
        // Crear el menú
        const menu = new Menu();

        // Agregar platos
        const plato1 = new Plato('Ceviche', 'Entrada', 6.99, false);
        const plato2 = new Plato('Pulpo a la parrilla', 'Plato principal', 8.50, false);
        menu.agregarPlato(plato1);
        menu.agregarPlato(plato2);

        // Mostrar el menú inicial
        console.log("Menú inicial:");
        console.log(menu.mostrarMenu());

        // Iniciar actualización automática
        menu.iniciarActualizacionAutomatica();

        // Actualizar disponibilidad de los platos
        await menu.actualizarDisponibilidad();

        // Crear y procesar un pedido
        const pedido1 = new Pedido('Cliente 1');
        pedido1.agregarPlato(plato1);
        pedido1.agregarPlato(plato2);

        // Procesar el pedido
        const resultado = await pedido1.procesarPedido();
        console.log("Resultado final:", resultado);

        // Detener la actualización automática
        menu.detenerActualizacionAutomatica();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Ejecutar el programa
main();