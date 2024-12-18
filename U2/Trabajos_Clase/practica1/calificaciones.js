//1. Definir la clase Estudiante y arreglo de calificaciones
class Estudiante {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }
}


let estudiantes = [
    new Estudiante("Juan", [15.8, 17, 12, 14, 16]),
    new Estudiante("María", [18, 15, 17, 19, 16]),
    new Estudiante("Pedro", [10, 8, 12, 7, 9]),
    new Estudiante("Ana", [14, 13, 15, 12.5, 16]),
    new Estudiante("Carlos", [6, 7, 8, 5, 7]),
    new Estudiante("Laura", [19, 18, 17, 20, 18]),
    new Estudiante("Diego", [11, 13, 9, 12, 10.80]),
    new Estudiante("Sofia", [16, 15, 14, 17, 15]),
    new Estudiante("Miguel", [8, 9, 7, 6, 8]),
    new Estudiante("Lucía", [13, 14.2, 12, 15, 0 ])
];

// 2. Función para calcular el promedio
function calcularPromedio(calificaciones) {
    return calificaciones.reduce((sum, calif) => sum + calif, 0) / calificaciones.length;
}

// 3. Función para clasificar estudiantes
function clasificarEstudiante(promedio) {
    if (promedio >= 16) {
        return "Excelente";
    } else if (promedio >= 12) {
        return "Bueno";
    } else if (promedio >= 8) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

// 4. Procesar cada estudiante
let resultados = estudiantes.map(estudiante => {
    
    let promedio = calcularPromedio(estudiante.calificaciones);
    let maximo = estudiante.calificaciones.reduce((max, calif) => calif > max ? calif : max);
    let minimo = estudiante.calificaciones.reduce((min, calif) => calif < min ? calif : min);
    
    return {
        nombre: estudiante.nombre,
        calificaciones: estudiante.calificaciones,
        promedio: promedio,
        clasificacion: clasificarEstudiante(promedio),
        maximo: maximo,
        minimo: minimo
    };
});

// 5. Encontrar mejor y peor estudiante
let mejorEstudiante = resultados.reduce((mejor, actual) => 
    actual.promedio > mejor.promedio ? actual : mejor
);

let peorEstudiante = resultados.reduce((peor, actual) => 
    actual.promedio < peor.promedio ? actual : peor
);

// 6. Imprimir resultados
console.log("=== SISTEMA DE CALIFICACIONES ===\n");

for (const estudiante of resultados) {
    console.log(estudiante.nombre + ":");
    console.log("Clasificación: " + estudiante.clasificacion);
    console.log("Promedio: " + estudiante.promedio.toFixed(2));
    console.log("Calificación más alta: " + estudiante.maximo);
    console.log("Calificación más baja: " + estudiante.minimo);
    console.log("-------------------------");
}
//7. Definir el peor y mejor promedio
console.log("El estudiante con el peor promedio es " + peorEstudiante.nombre + " con un promedio de " + peorEstudiante.promedio.toFixed(2));
console.log("El estudiante con el mejor promedio es " + mejorEstudiante.nombre + " con un promedio de " + mejorEstudiante.promedio.toFixed(2));