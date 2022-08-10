const cadena = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sit do eiusmod tempor incididunt ut';

let remplaza = cadena.replace(/sit/g, 'mint');
console.log(remplaza);

let partirCadena = cadena.split(',');
console.log(partirCadena.length, partirCadena[0]);

let partirCadena2 = cadena.split(',')[1];

let partirCadenaJoin = cadena.split(',').join("***");
console.log(partirCadenaJoin);