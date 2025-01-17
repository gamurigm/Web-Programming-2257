let promesa = new Promise((resolver, rechazar) => {
    let exito = true;  // Cambia a `false` para probar el caso de error
    if (exito) {
      resolver("Operación exitosa");
    } else {
      rechazar("Hubo un error");
    }
  });
  
  promesa.then((resultado) => {
    console.log(resultado);  
  }).catch((error) => {
    console.log(error);  
  });
  
// --------------------------------------------------------------------------------------------------------------
function obtenerDatos() {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver("Datos recibidos");
      }, 2000);
    });
  }
  
  obtenerDatos()
    .then((mensaje) => {
      console.log(mensaje); 
      return "Procesando datos";
    })
    .then((mensaje) => {
      console.log(mensaje); 
    });

// --------------------------------------------------------------------------------------------------------------
function apiSimulada() {
  return new Promise((resolver, rechazar) => {
    let exito = true;  // Cambiar a `false` para simular error
    setTimeout(() => {
      if (exito) {
        resolver("Respuesta de la API");
      } else {
        rechazar("Error en la API");
      }
    }, 3000);
  });
}

apiSimulada()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error); 
  });

  //------------------------------------------------------------------------------------------------------------

  async function obtenerDatos() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/99999");
      if (!respuesta.ok) {
        throw new Error("No se pudo obtener los datos");
      }
      let datos = await respuesta.json();
      console.log(datos);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  
  obtenerDatos();
  

  // ------------------------------------------------------------------------------------------------------------
  async function obtenerDatos() {
    try {
      let respuesta1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      let datos1 = await respuesta1.json();
      console.log("Datos 1:", datos1);
  
      let respuesta2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
      let datos2 = await respuesta2.json();
      console.log("Datos 2:", datos2);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  
  obtenerDatos();
  