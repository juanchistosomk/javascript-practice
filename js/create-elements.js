let buton= document.querySelector("button")
let carga = document.getElementById("cargando")

buton.addEventListener("click", ()=>{
    buton.innerHTML=" Loading...";
    //document.getElementById("cargando").style="display:block";
    buton.insertAdjacentHTML('afterbegin','<span id="cargando" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
    let load = document.querySelector('.posicion');
    load.style="visibility: visible";
    let cargando1 = document.getElementById('cargando1')
    cargando1.style="visibility: visible";

    setTimeout(()=>{  
     document.getElementById("cargando").style="display:none";
     load.style="visibility: hidden";
     cargando1.style="visibility: hidden";
     buton.innerHTML="Más información";  
    }, 9000);
})

///Barra de titulo

let showAlert = false;
const interval = setInterval(()=>{
  //console.log("sa1 ",showAlert);
 document.title = showAlert ? 'App JKDev':'(1) New Massage';
 showAlert = !showAlert;
 //console.log("sa2: ",showAlert);
}, 2000);