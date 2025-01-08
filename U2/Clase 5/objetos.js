let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 25
}

let persona2 ={
    nombre: "Dario",
    apellido: "Vargas",
    direccion:"Quito",
    email: "dvargas@gmail.com",
    
    nombreCompleto: function(){
        return this.nombre +' '+this.apellido
    }
}

let persona3 = {
    nombre: "Maria",

    saludar: function() {
        return "Hola, mi nombre es ${this.nombre}";
    }
}

const persona4 = new Object();
persona4.nombre = "Carlos";
persona4.apellido = "Lopez";
persona4.presentarse = function() {
    return `Hola, soy ${this.nombre} ${this.apellido}`;
};

const prototipoPersona = {
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
}

const persona5 = Object.create(prototipoPersona);
persona5.nombre = "Juan";
persona5.saludar();

class Persona1 {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        return `Hola desde clase, me llamo ${this.nombre} ${this.apellido}`;
    }
}

function Person(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;

    this.presentarse = function() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y mi email es ${this.email}.`;
    }
}

const persona6 = new Persona1("santiago", "mora")

const add = {nombre: "pedro"}
add.edad = 35;
add.apellido = "lopez";
add.nombre = "juan";

console.log(add)

//eliminar propiedades de un objeto
delete add.edad
console.log(add)

for (let propiedad in add) {
    console.log(propiedad)
    console.log(add[propiedad])
}

for(let clave in add){
    console.log(`${clave}: ${add[clave]}`)
}

//verificar si existen propiedades en obj
console.log('nombre' in add)

console.log(add.hasOwnProperty('email'))

//metodos adicionales utiles
console.log(Object.keys(add))

console.log(Object.values(add)); // Ejemplo de Object.values
console.log(Object.entries(add)); // Ejemplo de Object.entries
const nuevoObjeto = Object.assign({}, add, {email: "nuevoemail@example.com"}); 
console.log(nuevoObjeto);

Object.freeze(add);//congela para evitar ser modificado
Object.seal(add) //sellar el objeto para evitar agregar propiedades pero permite modificarlas

let personaArray = Object.values(add);
console.log(personaArray)

let personaString = JSON.stringify(add);
console.log(personaString)



