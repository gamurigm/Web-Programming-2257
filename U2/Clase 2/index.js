//TIPOS DE DATO
//String

var nombre = "Juan";
console.log(nombre);

//Object
var Objeto = {
    nombre: "Juan",
    edad: 20,
    altura: 1.80
}

console.log(Objeto)

//Type of
var var1 = "Juan"
var var2 = false
var var3 = BigInt(1230)
var var4 = [1,2,3,40]
console.log(typeof var1, var2)
console.log(typeof var3)
console.log(typeof var4)


//tipo funcion
function saludar(){
    console.log("Hola")
}
console.log(typeof saludar)

//symbol
var simbolo = Symbol()
console.log(simbolo)

//tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){    
        this.nombre = nombre
        this.apellido = apellido
    }
}

console.log(typeof Persona)

//undefined
var variable;
console.log(typeof variable)

//NULL
var nulo = null;
console.log(typeof nulo)

//Tipo de dato de tipo arreglos
//Tipo de dato de tipo arreglos
var autos = ["Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Nissan", "Hyundai"];

// Puedes imprimir el arreglo completo
console.log(autos);
console.log(typeof autos)
console.log(autos[0]); 
console.log(autos[3]); 


//cadenas vacias
var a = ''
console.log(typeof a)

//Buenas Practicas
let nombreCompleto = "Juan Carlos Trujillo Mera"
var _nombreCompleto;
var $nombreCompleto; //formas correctas, ninguna otra es válida

//OPERADORES
//+,-,*,/,**,%,++,--

var x = 10;
var y = 5;
var z = x%y; //var z = x*y; var z = x**y; var z = x+y; var z = x-y; 
console.log(z)

//preincremento
let b = 10;
let w;
w = 20;
w = ++b;
console.log(b, w)

//post-incremento
let c = 10;
let d;
d = 20;
d = c++;
console.log(c, d)

//Comparación
var l = 10;
var f = 5;

console.log(l == f);
console.log(l === f); //estricta
console.log(l != f);
console.log(l !== f);
console.log(l > f);
console.log(l < f);
console.log(l >= f);
console.log(l <= f);

let numero = 10;
let numeroString = "10";

console.log(numero == numeroString);   //(compara valor, izq predomina y convierte tipo)
console.log(numero === numeroString); 

//Precedencia 
let A = 6
let B = 7
let C = 8

let D = (A + B) * C  //left to right
console.log(D)

let A2 =6, B2 = 7, C2 = 8;
let D2 = A2*(B2+C2)
console.log(D2) 

//De asignación
// =, -=...

let x1 = 10;
x1 += 5;
console.log(x1);

let x2 = 10;
x2 -= 3;
console.log(x2);

let x3 = 10;
x3 *= 2;
console.log(x3);

let x4 = 10;
x4 /= 4;
console.log(x4);

let x5 = 10;
x5 %= 4;
console.log(x5);

let x6 = 10;
x6 **= 2;
console.log(x6);


//Comparaci[on]
// Verificar si un número es par
let num = 10
if (num % 2 == 0){
    console.log(num + " es un número par");
} else {
    console.log(num + " es un número impar");
}

// Verificar si una persona es mayor de edad
let edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}


let s = 12;
let valMin = 0, valMax = 100;
if (s >= valMin && s <= valMax) {
    console.log("El valor está dentro del rango");
} else {
    console.log("el valor esta fuera del rango");
}

//OR
if (s < valMin || s > valMax) {
    console.log("El valor está fuera del rango");
} else {
    console.log("El valor está dentro del rango");
}

let resultado = (s >= valMin && s <= valMax) ? "El valor está dentro del rango" : "El valor esta fuera del rango";


//CONVERSIONES
let miNumero = "10";

let age = parseInt(miNumero);
let age2 = Number(miNumero);

if(age >=18){
    console.log("Puede Votar");

} else{
    console.log("No Puede Votar");
}
//                                             --NOTA!--
//parseInt: convierte un numero a valor intero si decimales
//Number: convierte un valor a . flotante

console.log(parseInt("42px"));
console.log(parseInt(3.14151692));
console.log(parseInt("abc"));

console.log(Number("42px"));
console.log(Number(3.14151692));
console.log(Number("abc"));

console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(Number(undefined))
