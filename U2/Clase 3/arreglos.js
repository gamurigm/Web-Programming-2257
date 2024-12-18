//ARREGLOS

// 1. Usando corchetes 
let frutas = ['manzana', 'pera', 'naranja'];

// 2. Usando el constructor Array()
let numeros = new Array(1, 2, 3, 4, 5);

// 3. Array vacío
let arrayVacio = [];
let otroArrayVacio = new Array();

// 4. Array con tamaño predefinido
let arrayTamanio = new Array(5); 

// 5. Array.from() - Crear array desde otros objetos iterables
let arrayDesdeString = Array.from('Hola');               
let arrayDesdeSet = Array.from(new Set([1, 2, 3]));

// 6. Spread operator (...) - Crear array desde otros iterables
let arraySpread = [...'Hola']; 

// 7. Array.of()
let arrayOf = Array.of(1, 2, 3); 

// 8.(matrices)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 9. Con diferentes tipos de datos
let mixto = [
    1,                  
    'texto',           
    true,              
    { id: 1 },         
    [1, 2, 3],         
    function() {},     
    null,              
    undefined          
];

// 10. Con elementos espaciados
let espaciado = [1, , 3]; 

console.log([mixto])


//  MAP, FILTER Y REDUCE
//map
let nums = [1,2,3,4,5];
let cuadrados = nums.map(nums => nums*nums)
console.log(cuadrados)


//filter
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando filter para obtener números pares
let pares = n.filter(numero => numero % 2 === 0);
console.log('Números pares:', pares);


//reduce
let numbers = [1,2,15,3,4,5]
let maximo = numbers.reduce((acumulador, num) => num > acumulador ? num : acumulador);
console.log(maximo)