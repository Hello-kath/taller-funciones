console.log("Hola desde la consola");

//ingresamos la palabra reservada fuction seguido del nombre que se le quiere asignar a la funcion
//y dentro de los parentesis se ingresan los parametros que se le van a pasar a la funcion
function saludar() {
  //mostrar mensaje en consola
  console.log("Hola soy la primer funcions");
}
//este indica que estoy llamando la funcion, lo que hace que se ejecute el codigo dentro de la funcion
saludar();

function saludar2(nombre) {
  //mostrar mensaje en consola
  console.log(`Hola ${nombre}`);
  console.log(1);
  //mostrar mensaje en consola
  console.log(2);
  console.log(3);
  console.log(4);
}
//este indica que estoy llamando la funcion, lo que hace que se ejecute el codigo dentro de la funcion
saludar2("kathe");

//fuction(sin parametros) que sume dos numeros

function sumar() {
  let numero1 = 10;
  let numero2 = 20;

  let resultado = numero1 + numero2;

  console.log(`el resultado es: ${resultado}`);
}
sumar();

function bienvenido() {
  console.log(`Hola. eres bienvenido al ADSO`);
  //
  return "Hola desde consola";
}
bienvenido();
//con const de la siguiente fomar muestra el valor(resouesta) que se almaceno mediante el return de la funcion Bienvenido
const bienve = bienvenido();
console.log(bienve);

// fuctions con parametros

function suma2(num1, num2) {

  return num1 + num2;
}
suma2(3, 5);
const resultado = suma2(3, 5);
console.log(resultado);

const res2 = suma2(10, 25);
console.log(res2);

const res3 = suma2(20, 15);
console.log(res3);

//crear una function saludar pero como parametro el nombre 

// function saludar3 (nombre){
   
// }

// saludar3 ("kathe");
// const nombre = prompt("ingresa tu nombre");
// console.log(`Hola, ${nombre} ¿como estas?`);

// utilizando el metodo return

function saludar4 (nombre1){
    return `Hola, ${nombre1} ¿como estas?`;
}

const nombre1 = prompt("ingresa tu nombre");
console.log(saludar4 (nombre1));
 

//  function anonima se gusrada en una variable o const generalmete se utilizan en freinwords
const suma3 = function (num1, num2) {
  return num1 + num2;
};

const res4 = suma3(6, 20);
console.log(res4);

// function flecha
const funciontres = ()=>{
    console.log(2);
}

// const suma4 = (num1, num2) => {
//   return num1 + num2;
// };

//crear una funccion que me diga si el numero es primo o no utilizando return 

function numPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return console.log(`el numero ${numero} no es primo`);
        } else{
          return console.log(`el numero ${numero} ingresado es orimo`);

        }
    }
  
}
console.log(numPrimo(2));

// function numPrimo(numero) {
    
//     if (numero % 2 === 0 ) {
//         console.log(`el numero ${numero} es primo`);
//     } else {
//         console.log(`el numero ${numero} no es primo`);
//     }
// }
// const res5 = numPrimo(2);
// console.log(res5);

//escribe una funcion que solicite un numero y imprima la tabla de multipliar