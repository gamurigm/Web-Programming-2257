class calculadora{
    static sumar(a, b){
        return a + b ;
    }
}

a=calculadora.sumar(50, 5) // no se puede acceder dentro de una instancia
console.log(a)

Calc = new calculadora()

class Contador{
    
    static totalInstancias=0;
    
    constructor(){
        Contador.totalInstancias++;
    }
    static mostrarInstancias(){
        return `se ha creado ${contador.totalInstancias} Instancias.`;
    }
}
c1 = new Contador()
c2 = new Contador()
c3 = new Contador()
console.log(Contador.totalInstancias)