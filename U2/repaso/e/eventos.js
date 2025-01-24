/*Eventos: 
    dblclick: Doble clic sobre un elemento.
    mousedown: Cuando se presiona un botón del mouse.
    mouseup: Cuando se suelta un botón del mouse.
    mousemove: Cuando el mouse se mueve sobre un elemento.
    mouseover: Cuando el mouse entra en un elemento (incluyendo hijos).
    mouseout: Cuando el mouse sale de un elemento.

    Eventos de formulario
    submit: Cuando un formulario se envía.
    change: Cuando el valor de un campo de entrada cambia.
    input: Similar a change, pero se activa en cada cambio (útil para texto).
    focus: Cuando un campo gana el foco.
    blur: Cuando un campo pierde el foco.
    reset: Cuando un formulario se reinicia.

    2.4. Eventos de carga
    load: Cuando un recurso (como una imagen o script) se carga por completo.
*/

//Existen 3 formas principales de agregar eventos a un elemento:
//1.
<button onclick="alert('Hola!')">Haz clic</button>

//2.
const boton = document.querySelector("button");
boton.addEventListener("click", () => {
  alert("Haz clic!");
});

//3.
const boton2 = document.querySelector("button");
boton2.onclick = () => {
  alert("Haz clic!");
};

