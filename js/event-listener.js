
document.addEventListener('DOMContentLoaded', () => console.log('Pagina Cargada '));


const form = document.querySelector('#formulario');

const enviaform = (event) => {

    event.preventDefault();

console.log(event.target.nombre.value, event.target.email.value, event.target.telefono.value );
    
// ---
const {nombre, email, telefono} = event.target
console.log(nombre.value, email.value, telefono.value);

//acciones: FETCH, Validaciones, etc
if(nombre.value.length===0) alert("Nombre vacio");

// EVENT BUBBLES activa los addeventlistener de hijo a padre, event.stopPropagation().
console.log("Event Bubbles", event.bubbles);

}


form.addEventListener('submit', enviaform);