//IF

let numero = 10;

if(numero == 1) {
    console.log("El número es 1");
} else if(numero == 2) {
    console.log("El número es 2");
} else {
    console.log("El número no es ni 1 ni 2");
}


let mes = 5;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "invierno";
} else if (mes >= 3 && mes <= 5) {
    estacion = "primavera";
} else if (mes >= 6 && mes <= 8) {
    estacion = "verano";
} else if (mes >= 9 && mes <= 11) {
    estacion = "otoño";
} else {
    estacion = "Mes no válido";
}


//hora del dia
let horaDia = 23;
let mensaje;

if(horaDia >= 6 && horaDia < 12){
    mensaje = "Buenos días";
} else if(horaDia >= 12 && horaDia < 19){
    mensaje = "Buenas tardes";
} else if(horaDia >= 19 && horaDia < 24){
    mensaje = "Buenas noches";
} else if(horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
} else {
    mensaje = "Hora no válida";
}




//switch
let month = 8;
let season = 'estacion desconocida';
switch(month){
    case 12:
    case 1:
    case 2:
        season = "invierno";
        break;
    case 3:
    case 4:
    case 5:
        season = "primavera";
        break;
    case 6:
    case 7:
    case 8:
        season = "verano";
        break;
    case 9:
    case 10:
    case 11:
        season = "otoño";
        break;
    default:
        season = "Mes no válido";
}

console.log(season);

//FOR
// ... existing code ...

const heroes = ['spiederman', 'Iron Man', 'Hulk', 'Thor', 'Captain America'];

console.log("***for tradicional***");
for (let i = 0; i < heroes.length; i++) {  
    console.log(heroes[i]);
}

console.log("***For in***");
for(let i in heroes){
    console.log(heroes[i]);
}// for in no es recomendado por que no muestra el index

console.log("***For of***");
for(let heroe of heroes){
    console.log(heroe);
} //iterables


//---------------------------------------
for(let contador= 0; contador <=10; contador++){
    if (contador % 2 == 0){
        continue;  // Salta los números pares
    }
    console.log(contador); // Solo imprime los números impares
}

console.log("Ejemplo con break:");
for(let i = 0; i < 10; i++) {
    if(i === 2) {
        break;
    }
    console.log(i); 
}


//While...
const carros = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'];
let i = 0;
while(i < carros.length) {
    console.log(`Carro ${i + 1}: ${carros[i]}`);
    i++;
}


i = 0;
console.log("Usando continue");
while(carros[i]){
    if(i == 1 ){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}



