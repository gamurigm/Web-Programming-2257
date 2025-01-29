/*
Fetch API: en JS permite hacer solicitudes http de manera sencilla utilizando promesas a un ,
se usara el metodo get
*/ 


//Metodo GET
fetch('https://jsonplaceholder.typicode.com/posts/1') //url API  
   .then(response => response.json()) //convertir la respuesta a json
   .then(data => console.log(data)) //imprimir en consola la respuesta
  .catch(error => console.error("Error encontrado: ", error)) //si hay un error, imprimirlo en consola

//POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', //metodo a utilizar si no se pone por defecto es GET
    headers: {
        'Content-Type': 'application/json' //formato de la respuesta
    },
    body: JSON.stringify(
        {
            title: 'Nuevo Post',
            body: 'Contenido del Post',
            userId: 1
        }
    )
})
.then(response => response.json()) //convertir la respuesta a json
    .then(data => console.log("respuesta: ", data)) //imprimir en consola la respuesta
    .catch(error => console.error("Error encontrado: ", error)) 

/*Metodos Async*/
async function obtenerDatos() {
    console.log('cargando datos')
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await respuesta.json();
        console.log(data);

    } catch(error){
        console.error("Error encontrado: ", error);
    }
} 
let datos = obtenerDatos()
console.log(datos)

//cuado usamos fetch API
// Aquí se puede realizar una llamada a la función obtenerDatos() para cargar los datos
// o se pueden realizar otras operaciones con los datos obtenidos de la API.
// Por ejemplo, se puede llamar a obtenerDatos() para mostrar los datos en la interfaz de usuario
// o procesarlos de alguna manera.

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(usuarios => {
    const lista = document.getElementById('usuarios')
    usuarios.forEach(usuario => {
        const li = document.createElement('li')
        li.textContent = usuario.name
        lista.appendChild(li)
    });
})