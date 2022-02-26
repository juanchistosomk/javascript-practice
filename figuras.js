
function perimCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

function perimTriangulo(lado, lado2,lado3){
    return lado+lado2+lado3;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

function perimCirculo(radio){
    return (radio*2)*Math.PI;
}

function areaCirculo(radio){
    return Math.PI*(radio**2);
}

function CalculaAlturaTriIsoceles(lado1, lado2, base){
    if(lado1==lado2 && (base!=lado1 && base!=lado2))
        return h=Math.sqrt((lado1**2)-(base/2)**2);
     else
        return alert('No es un triangulo Isóceles');
}

/***********************/

function CalPerimCuadrado(){
  const lado = document.getElementById('ladoCuadrado').value;
  const perimC= perimCuadrado(lado);
  const result = document.getElementById('result')
  result.innerText="El perimetro es: "+perimC;
  
}

function CalAreaCuadrado(){
  const lado = document.getElementById('ladoCuadrado').value;
  const areaC= areaCuadrado(lado);
  return areaC;
}

/***********************/

function calculoPrecioDescuento(precio, descuento){
    const porcenPrecioDescuento= 100 - descuento;
    const precioConDescuento= (precio * porcenPrecioDescuento)/100
    return precioConDescuento;
}