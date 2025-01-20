class Activo {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre; 
        this.cantidad = cantidad;
        this.precio = precio; 
    }

    actualizarPrecio(precioNuevo) {
        this.precio = precioNuevo;
    }

    calcularValor() {
        return this.cantidad * this.precio;
    }

    mostrarInfo() {
        return `${this.nombre}: ${this.cantidad} unidades, Precio: $${this.precio.toFixed(2)}, Valor: $${this.calcularValor().toFixed(2)}`;
    }
}

class Portafolio {
    constructor() {
        this.activos = []; 
    }

    agregarActivo(activo) {
        this.activos.push(activo);
    }

    mostrarPortafolio() {
        return this.activos.map(activo => activo.mostrarInfo()).join('\n');
    }

    calcularValorTotal() {
        return this.activos.reduce((total, activo) => total + activo.calcularValor(), 0);
    }

    // Simular la actualización de precios desde una API (ficticia)
    async actualizarPrecios() {
        console.log("Consultando precios...");
        const promesas = this.activos.map(async (activo) => {
            const nuevoPrecio = await this.simularPrecioAPI(activo.nombre); 
                        activo.actualizarPrecio(nuevoPrecio);
        });
        await Promise.all(promesas);
        console.log("Precios actualizados.");
    }

    // Simular una API que devuelve precios aleatorios para los activos
    simularPrecioAPI(nombreActivo) {
        return new Promise(resolve => {
            setTimeout(() => {
                const precioAleatorio = (Math.random() * 30000).toFixed(2); 
                console.log(`Precio actualizado para ${nombreActivo}: $${precioAleatorio}`);
                resolve(parseFloat(precioAleatorio));
            }, Math.random() * 10000 + 1000);
        });
    }
}

const miPortafolio = new Portafolio();

miPortafolio.agregarActivo(new Activo("Bitcoin", 0.5, 30000));
miPortafolio.agregarActivo(new Activo("Ethereum", 2, 2000));
miPortafolio.agregarActivo(new Activo("Apple", 10, 150));

// Mostrar el portafolio inicial
console.log("Portafolio inicial:");
console.log(miPortafolio.mostrarPortafolio());
console.log(`Valor total: $${miPortafolio.calcularValorTotal().toFixed(2)}`);

// Simular actualización de precios cada 10 segundos
setInterval(async () => {
    await miPortafolio.actualizarPrecios(); 
    console.log("\nPortafolio actualizado:");
    console.log(miPortafolio.mostrarPortafolio());
    console.log(`Valor total: $${miPortafolio.calcularValorTotal().toFixed(2)}`);
}, 20000); 
