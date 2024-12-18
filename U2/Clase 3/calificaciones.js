// 1. Crear el array de estudiantes con sus calificaciones
let estudiantes = [
    { nombre: "Juan", calificaciones: [15, 17, 12, 14, 16] },
    { nombre: "María", calificaciones: [18, 15, 17, 19, 16] },
    { nombre: "Pedro", calificaciones: [10, 8, 12, 7, 9] },
    { nombre: "Ana", calificaciones: [14, 13, 15, 12, 16] },
    { nombre: "Carlos", calificaciones: [6, 7, 8, 5, 7] },
    { nombre: "Laura", calificaciones: [19, 18, 17, 20, 18] },
    { nombre: "Diego", calificaciones: [11, 13, 9, 12, 10] },
    { nombre: "Sofia", calificaciones: [16, 15, 14, 17, 15] },
    { nombre: "Miguel", calificaciones: [8, 9, 7, 6, 8] },
    { nombre: "Lucía", calificaciones: [13, 14, 12, 15, 13] }
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
    // Calcular promedio
    let promedio = calcularPromedio(estudiante.calificaciones);
    
    // Encontrar máximo y mínimo
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

resultados.forEach(estudiante => {
    console.log(`Estudiante: ${estudiante.nombre}`);
    console.log(`Calificaciones: ${estudiante.calificaciones.join(', ')}`);
    console.log(`Promedio: ${estudiante.promedio.toFixed(2)}`);
    console.log(`Clasificación: ${estudiante.clasificacion}`);
    console.log(`Nota más alta: ${estudiante.maximo}`);
    console.log(`Nota más baja: ${estudiante.minimo}`);
    console.log("------------------------");
});

console.log("\n=== RESUMEN ===");
console.log(`Mejor estudiante: ${mejorEstudiante.nombre} (Promedio: ${mejorEstudiante.promedio.toFixed(2)})`);
console.log(`Peor estudiante: ${peorEstudiante.nombre} (Promedio: ${peorEstudiante.promedio.toFixed(2)})`); 