// 1. Definir arreglo de estudiantes con nombres y calificaciones
let estudiantes = [
    { nombre: "Juan", calificaciones: [15.8, 17, 12, 14, 16] },
    { nombre: "María", calificaciones: [18, 15, 17, 19, 16] },
    { nombre: "Pedro", calificaciones: [10, 8, 12, 7, 9] },
    { nombre: "Ana", calificaciones: [14, 13, 15, 12.5, 16] },
    { nombre: "Carlos", calificaciones: [6, 7, 8, 5, 7] },
    { nombre: "Laura", calificaciones: [19, 18, 17, 20, 18] },
    { nombre: "Diego", calificaciones: [11, 13, 9, 12, 10.80] },
    { nombre: "Sofia", calificaciones: [16, 15, 14, 17, 15] },
    { nombre: "Miguel", calificaciones: [8, 9, 7, 6, 8] },
    { nombre: "Lucía", calificaciones: [13, 14.2, 12, 15, 0] }
];

// 2. Procesar cada estudiante y calcular sus datos
let resultados = new Array(estudiantes.length); // Crear un arreglo fijo para almacenar resultados
let mejorEstudiante = null;
let peorEstudiante = null;

for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    let calificaciones = estudiante.calificaciones;

    // Calcular promedio
    let suma = 0;
    for (let j = 0; j < calificaciones.length; j++) {
        suma += calificaciones[j];
    }
    let promedio = suma / calificaciones.length;

    // Determinar clasificación
    let clasificacion = "";
    if (promedio >= 16) {
        clasificacion = "Excelente";
    } else if (promedio >= 12) {
        clasificacion = "Bueno";
    } else if (promedio >= 8) {
        clasificacion = "Aprobado";
    } else {
        clasificacion = "Reprobado";
    }

    // Calcular máximo y mínimo
    let maximo = calificaciones[0];
    let minimo = calificaciones[0];
    for (let j = 1; j < calificaciones.length; j++) {
        if (calificaciones[j] > maximo) maximo = calificaciones[j];
        if (calificaciones[j] < minimo) minimo = calificaciones[j];
    }

    // Guardar resultados directamente en el índice correspondiente
    resultados[i] = {
        nombre: estudiante.nombre,
        calificaciones: calificaciones,
        promedio: promedio,
        clasificacion: clasificacion,
        maximo: maximo,
        minimo: minimo
    };

    // Encontrar mejor y peor estudiante
    if (!mejorEstudiante || promedio > mejorEstudiante.promedio) {
        mejorEstudiante = resultados[i];
    }
    if (!peorEstudiante || promedio < peorEstudiante.promedio) {
        peorEstudiante = resultados[i];
    }
}

// 3. Imprimir resultados
console.log("=== SISTEMA DE CALIFICACIONES ===\n");

for (let i = 0; i < resultados.length; i++) {
    let estudiante = resultados[i];
    console.log(estudiante.nombre + ":");
    console.log("Clasificación: " + estudiante.clasificacion);
    console.log("Promedio: " + estudiante.promedio);
    console.log("Calificación más alta: " + estudiante.maximo);
    console.log("Calificación más baja: " + estudiante.minimo);
    console.log("-------------------------");
}

// 4. Imprimir el peor y mejor promedio
console.log("El estudiante con el peor promedio es " + peorEstudiante.nombre + " con un promedio de " + peorEstudiante.promedio.toFixed(2));
console.log("El estudiante con el mejor promedio es " + mejorEstudiante.nombre + " con un promedio de " + mejorEstudiante.promedio.toFixed(2));
