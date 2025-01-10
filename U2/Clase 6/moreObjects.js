//metodos get y set

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 50,
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);

//set
let personaSet = {
    nombre: 'Jose',
    apellido: 'Garcia',
    emai: 'jgarcia@gmail.com',
    edad: 30,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet.lang)


let personaSet2 = {
    nombre: 'Jose',
    apellido: 'Garcia',
    emai: 'jgarcia@gmail.com',
    edad: 30,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(valor){
        this.idioma = valor;
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet2.lang)

personaSet2.lang = 'eng';
console.log(personaSet2.lang)

//CONSTRUCTORES 
//metodo para crear objetos 
function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email,
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
} 

let padre = new PersonaFC('Jose', 'Garcia', 'jgarcia@gmail.com')
console.log(padre)

padre.tel = '1234567890'
console.log(padre)

let madre = new PersonaFC('Maria', 'Lopez', 'mlopez@gmail.com')
console.log(madre)

//Agregae metodos a un constructor
let padre2 = new PersonaFC('Baltazar', 'Garcia', 'bgarcia@gmail.com');
console.log(padre2.nombreCompleto())


//Agregar propiedades en tiempo de ejecucion!!!
PersonaFC.prototype.tel = '02414759'
console.log(padre)


//METODO CALL
let personaC1={
    nombre: 'Juan',
    apellido: 'Cajas',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let personaC2 = {
    nombre: 'Andres',
    apellido: 'Fari',
}

//LLAMAR el metodo de C1 en C2 !!!
console.log(personaC1.nombreCompleto.call(personaC2))


//argumentos como parametros a CALL
let PersonaCP1 = {
    nombre: 'Carlos',
    apellido: 'Pérez',
    nombreCompleto: function(titulo, tel) {
        return titulo + ':' + this.nombre + ' ' + this.apellido + tel;
    }
}

console.log('lic', '20202020')
console.log(PersonaCP1.nombreCompleto.call(personaC2, 'lic', '22414546'))
