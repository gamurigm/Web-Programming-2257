
class Conductor {
    // Propiedades privadas
    #nombre;
    #licencia;
  
    constructor(nombre, licencia) {
      this.#nombre = nombre;
      this.#licencia = licencia;
      this.rutas = []; 
    }
  
    // Métodos públicos
    obtenerNombre() {
      return this.#nombre;
    }
  
    registrarRuta(ruta) {
      this.rutas.push(ruta);
      console.log(`Ruta registrada: ${ruta}`);
    }
  
    obtenerRutas() {
      return this.rutas;
    }
  }
  
  // Clase ConductorVIP que extiende Conductor
  class ConductorVIP extends Conductor {
    constructor(nombre, licencia, vehiculoPreferido) {
      super(nombre, licencia); 
      this.vehiculoPreferido = vehiculoPreferido; 
    }
  
    asignarVehiculoPreferido(vehiculo) {
      this.vehiculoPreferido = vehiculo;
      console.log(`Vehículo preferido asignado: ${vehiculo}`);
    }
  
    obtenerVehiculoPreferido() {
      return this.vehiculoPreferido;
    }
  }
  

  class Vehiculo {
    constructor(modelo, placa) {
      this.modelo = modelo;
      this.placa = placa;
      this.asignado = false; 
    }
  
    asignarConductor(conductor) {
      this.asignado = true;
      console.log(`Vehículo ${this.modelo} asignado al conductor ${conductor.obtenerNombre()}`);
    }
  
    liberarVehiculo() {
      this.asignado = false;
      console.log(`Vehículo ${this.modelo} liberado`);
    }
  }
  
 
  class Ruta {
    constructor(origen, destino, duracion) {
      this.origen = origen;
      this.destino = destino;
      this.duracion = duracion; // En minutos
    }
  
    obtenerDetalles() {
      return `Ruta: ${this.origen} → ${this.destino}, Duración: ${this.duracion} minutos.`;
    }
  }
  
  
  const conductor1 = new Conductor("Juan Pérez", "ABC123");
  const conductorVIP1 = new ConductorVIP("María López", "VIP456", "Tesla Model X");
  const vehiculo1 = new Vehiculo("Toyota Corolla", "XYZ789");
  const ruta1 = new Ruta("Punto A", "Punto B", 30);
  const ruta2 = new Ruta("Punto C", "Punto D", 45);
  
  conductor1.registrarRuta(ruta1.obtenerDetalles());
  conductorVIP1.registrarRuta(ruta2.obtenerDetalles());
  
  vehiculo1.asignarConductor(conductor1);
  conductorVIP1.asignarVehiculoPreferido("BMW X7");
  
  console.log(conductor1.obtenerRutas());
  console.log(conductorVIP1.obtenerVehiculoPreferido());
  