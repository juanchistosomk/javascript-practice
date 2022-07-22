// DOM -> objetos  Documento - Elementos

const seccion = document.getElementById('seccion');
console.log("ID: ",seccion);

const seccion2 = document.getElementsByClassName('main-content');
console.log("CLASSNAME: ",seccion2);

const seccion3 = document.getElementsByName('menu');
console.log("ByNAME: ",seccion3);

const seccion4 = document.querySelector('#seccion');
console.log("QUERYSELECTOR: ",seccion4);

const seccion5 = document.querySelectorAll('.align-center');
console.log("QUERYSELECTORALL: ",seccion5);

// HTMLCollection es DINAMICO
// NODELIST es ESTATICO
// SPREAD ... convierte una lista o colecion a un Array
const usando_SPREAD = [...seccion2];

usando_SPREAD.forEach(element => {
    console.log("Spread: ",element);
});

// CREAR Elemento
const h2 = document.createElement('h2');
const tituloH2 = document.createTextNode("Esto es una prueba");

// CLONAR
const articulo = document.querySelector('article');
console.log(articulo.isConnected);
// TRUE es para que clone tambien los Hijos
const articulo2 = articulo.cloneNode(true);

//Habilitar elemento en el DOM append
//seccion.append(articulo2);
// agrega como un Ultimo hijo
//seccion.appendChild(articulo2);

// (ULTIMO HIJO), antes que acabe la etiqueta
seccion.insertAdjacentElement('beforeend', articulo2);
// Antes de la etiqueta 
//seccion.insertAdjacentElement('beforebegin', articulo2);
// (PRIMER HIJO)  
//seccion.insertAdjacentElement('afterbegin', articulo2);
// Despues de la etiqueta 
//seccion.insertAdjacentElement('afterend', articulo2);

seccion.insertAdjacentText("beforeend","Holaaaaa");

seccion.insertAdjacentHTML("afterend","<hr><h5>Prueba</h5>");

// Quitar
//seccion.remove();

seccion.children[0].textContent="Sustituir texto.";

// Obtener valor de Atributo y cambiarlo
seccion.getAttribute('id');
seccion.setAttribute('id','seccionx');

seccion.classList;
// Agregar clase
seccion.className += " caseAgregada";
// ó
seccion.classList.add('caseAgregada2');

// Quitar clase
seccion.classList.remove('caseAgregada2');

// Toggle: si existe la quita y si no existe la crea
seccion.classList.toggle('caseAgregada2');
seccion.classList.toggle('caseAgregada2');