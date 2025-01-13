class Estudiante {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }
    calcularPromedio(){
        const suma = this.notas.reduce((acum, nota) => acum + nota, 0)
        return (suma/this.notas.length).toFixed(2)
    }
}   

class Grupo {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    mostrarEstudiantes() {
        this.estudiantes.forEach(e => {
            console.log(`Nombre: ${e.nombre}, Notas: ${e.notas.join(', ')}, Promedio: ${e.calcularPromedio()}`);
        });
    }

    calcularPromedioGeneral() {
        const sumaPromedios = this.estudiantes.reduce((acc, e) => acc + parseFloat(e.calcularPromedio()), 0);
        return (sumaPromedios / this.estudiantes.length).toFixed(2);
    }
}

const grupo = new Grupo();
grupo.agregarEstudiante(new Estudiante('Ana', [8, 9, 10]));
grupo.agregarEstudiante(new Estudiante('Luis', [6, 7, 8]));
grupo.agregarEstudiante(new Estudiante('María', [9, 10, 10]));

grupo.mostrarEstudiantes();
console.log('Promedio general del grupo:', grupo.calcularPromedioGeneral());