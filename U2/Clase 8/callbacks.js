function procesarDatos(dato, callback) {
    console.log(`Procesando: ${dato}`);
    callback(dato);  // Llamamos al callback pasándole el dato
  }
  
  function mostrarResultado(dato) {
    console.log(`Resultado: ${dato}`);
  }
  
  procesarDatos('Datos importantes', mostrarResultado);
  
  // ------------------------------------------------------------------------------------------------------------\




  function leerArchivo(callback) {
    setTimeout(() => {
      console.log("Archivo leído");
      callback("Contenido del archivo");
    }, 2000); 
  }
  
  function procesarArchivo(contenido) {
    console.log(`Procesando: ${contenido}`);
  }
  
  leerArchivo(procesarArchivo);
 

  // Callback anidado
  function operacion1(callback) {
    setTimeout(() => {
      console.log("Operación 1 completada");
      callback();
    }, 1000);
  }
  
  function operacion2(callback) {
    setTimeout(() => {
      console.log("Operación 2 completada");
      callback();
    }, 1000);
  }
  
  function operacion3(callback) {
    setTimeout(() => {
      console.log("Operación 3 completada");
      callback();
    }, 1000);
  }
  
  operacion1(() => {
    operacion2(() => {
      operacion3(() => {
        console.log("Todas las operaciones completadas");
      });
    });
  });
  