//Ejercicio 1: Escribe una función que tome dos números como parámetros y devuelva su suma.

// function suma (num1, num2){
//     return num1 + num2; 
// }
// console.log(suma(8,2));
//________________________________________________________________

// Ejercicio 2: Escribe una función que determine si un número dado es primo.
// !== se utiliza para comparar dos valores y verificar si son distintos

// function numPrimo(numero) {
//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             return console.log(`el numero ${numero} no es primo`);
//         } else{
//           return console.log(`el numero ${numero} ingresado es primo`);

//         }
//     }
// }
// numPrimo();
// const resultado1 = numPrimo(2)
//________________________________________________________________

//Ejercicio 3: Escribe una función que calcule el promedio de dos números dados. 

// function promedio (num1, num2){
//     return (num1 + num2) / 2;
// }
// console.log(promedio(8,2)); 

//________________________________________________________________

// Ejercicio 4: Escribe una función que imprima todos los números pares hasta un límite dado.

// function numpares () {

//     let numInicio = 1; 
//     let pares = [];
//     do{
//         if (numInicio % 2 === 0){
//           console.log(numInicio);
//         } 
//         numInicio++;
    
//     //limite del bucle
//     } while (numInicio <= 40);
//     return pares;
// }

// numpares ();
// const listanum = numpares

//________________________________________________________________

// Ejercicio 5: Escribe una función que imprima la tabla de multiplicar de un número dado.

// function tMultiplicar () {
//     let num1 = prompt("ingresa un numero");
//     let multiplicacion = [];
//     for (let x = 1; x <=10; x++){

//         console.log(`${num1} x ${x} = ${num1 * x}`);
        
//     } return multiplicacion;
        
// } 
// tMultiplicar();
// const tabla = tMultiplicar
//________________________________________________________________

// Ejercicio 6: Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales devolver un String «son iguales».

function numeroMayor() {
    let num1 = prompt("ingresa el primer numero");
    let num2 = prompt("ingresa el segundo numero");
    let num3 = prompt("ingresa el tercer numero"); 
    if (num1 > num2 && num1 > num3){
        console.log(`${num1} es el mayor`);
    }
}