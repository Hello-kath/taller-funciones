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

// function numeroMayor(num1, num2, num3) {
//     if (num1 === num2 && num2 === num3) {
//         return "son iguales";
//     } else {
//         var mayor = num1;
//         if (num2 > mayor) {
//             mayor = num2;
//         }
//         if (num3 > mayor) {
//             mayor = num3;
//         }
//         return mayor;
//     }
// }
// console.log(numeroMayor(10, 25, 10));

//_______________________________________________________________________________________

//Ejercicio 7: Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

// function generar_caracteres(n, caracter) {
//     let resultado = "";
//     for (let i = 0; i < n; i++) {
//         resultado += caracter;

//     }return resultado;
// }

// console.log(generar_caracteres(5, "?"));

//__________________________________________________________________________________

//Ejercicio 8: Sumar los números del 1 al 10 utilizando un bucle.

// function sumar() {
//     let suma = 0;
//     for (let i = 1; i <= 10; i++) {
//         suma += i;
//     }
//     return suma;
// }
// console.log(sumar());
//__________________________________________________________________________________

//Ejercicio 9: Pedir al usuario que ingrese un número mayor que 100 utilizando un bucle.

// function MayorQueCien (){
//     let numero = parseInt(prompt("Ingrese un numero mayor que 100"));
//     while (numero <= 100) {
//         numero = parseInt(prompt("Ingrese un numero mayor que 100"));
//         if (numero > 100) {
//             alert(`El numero ${numero} es mayor que 100`);
//             break;
//             return; 
//         } 
 
// }  
// }
// MayorQueCien();
// const mensaje = MayorQueCien; 
//____________________________________________________________________________________

//Ejercicio 10: Generar un número aleatorio entre 1 y 10 hasta que se obtenga un 7.

// function numeroSiete (){
//     let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
//     console.log("Numero generado:", numeroAleatorio);
//     if (numeroAleatorio === 7){
//         console.log("el numero correcto es 7");
//         return;
//     }
// }
// numeroSiete()
// const mesaje = numeroSiete;

//___________________________________________________________________________________

//Ejercicio 11: Imprimir los números pares del 0 al 20.

// function numpares () {

//     let numInicio = 1; 
//     let pares = [];
//     do{
//         if (numInicio % 2 === 0){
//           console.log(numInicio);
//         } 
//         numInicio++;
    
//     //limite del bucle
//     } while (numInicio <= 20);
//     return pares;
// }

// numpares ();
// const listanum = numpares
//____________________________________________________________________________________

//Ejercicio 12: Pedir al usuario que ingrese un número entre 1 y 5.

// function ingersarNum (){
//     let num1 = parseInt(prompt("ingresa un numero entre 1 y 5"));
//     if (num1 <= 5){
//        return console.log(`El numero es correcto`);
//     }else{
//        return console.log(`Porfavor ingresa un numero entre 1 y 5`);
//     } 
// }
// ingersarNum ()
// const mensaje = ingersarNum; 
//__________________________________________________________________________________

//Ejercicio 13: Imprimir los primeros 10 números de la serie de Fibonacci.

// function fibonacci() {
//     let a = 0;
//     let b = 1;
//     let resultado = [a, b];

//     for (let i = 2; i < 10; i++) {
//         let temp = a + b;
//         resultado.push(temp);
//         a = b;
//         b = temp;
//     }

//     return resultado.join(', ');
// }

// console.log(fibonacci());
//_______________________________________________________________________________

//Ejercicio 14: Pedir al usuario que ingrese una contraseña y repetir la solicitud hasta que ingrese una contraseña válida (por ejemplo, "contraseña123").

// function verificarContraseña () {
//     let contraseña = prompt("Ingresa una contraseña de 8 dijitos");
//     let contraseñaTrue ="kathe322";

//     if(contraseña === contraseñaTrue){
//        return alert("La contraseña es correcta");
//     } else {
//        return alert("La contraseña es incorrecta");
//     }
// }
// verificarContraseña();
// const mensaje = verificarContraseña; 
// //_______________________________________________________________________________

//Ejercicio 15: Imprimir los primeros 5 números primos.

// function numPrimos() {
//     let contador = 0;
//     let numInicio = 2;
//     let primos = [];

//     while (contador < 5) {
//         let esPrimo = true;

//         for (let i = 2; i <= numInicio / 2; i++) {
//             if (numInicio % i === 0 && i !== numInicio) {
//                 esPrimo = false;
//                 break;
//             }
//         }

//         if (esPrimo) {
//             primos.push(numInicio);
//             contador++;
//         }

//         numInicio++;
//     }

//     return primos.reverse(). join(',');
// }

// console.log(numPrimos());

//_______________________________________________________________________________

//Ejercicio 16: Pedir al usuario que ingrese un número positivo utilizando un bucle do-while y mostrar un mensaje de error si no lo hace.

// function numPositivo() {
//     let numero;

//     do {
//         numero = parseInt(prompt("Por favor, ingresa un número positivo:"));
//         if (isNaN(numero) || numero <= 0) {
//             alert("Error: Debes ingresar un número positivo.");
//         }
//     } while (isNaN(numero) || numero <= 0);

//     return numero;
// }

// const numeroIngresado = numPositivo();
// console.log(`El numero ingrsado es positivo`);
//______________________________________________________________________________

//Ejercicio 17: Imprimir los números del 10 al 1

// function imprimirNum() {
//     let resultado = '';

//     for (let i = 1; i <= 10; i++) {
//         resultado += `${i}\n`;
//     }

//     return resultado;
// }

// console.log(imprimirNum());

//____________________________________________________________________________ 

//Ejercicio 18: Calcular el factorial de un número dado.

// function calcularFactorial(num1) {
//     let contador = 1;
//     let factorial = 1;

//     while (contador <= num1) {
//         factorial *= contador;
//         contador++;
//     }

//     console.log(`El factorial del número ${num1} es: ${factorial}`);
//     return factorial;
// }

// const resultado = calcularFactorial(3);

//_____________________________________________________________________________

//Ejercicio 19: Imprimir los primeros 10 números primos.

// function numPrimos() {
//     let contador = 0;
//     let numInicio = 2;
//     let primos = [];

//     while (contador < 10) {
//         let esPrimo = true;

//         for (let i = 2; i <= numInicio / 2; i++) {
//             if (numInicio % i === 0 && i !== numInicio) {
//                 esPrimo = false;
//                 break;
//             }
//         }

//         if (esPrimo) {
//             primos.push(numInicio);
//             contador++;
//         }

//         numInicio++;
//     }

//     return primos.reverse(). join(',');
// }

// console.log(numPrimos());
//______________________________________________________________________________

//Ejercicio 20: Imprimir la secuencia de números del 1 al 100, pero para múltiplos de 3 imprimir "Fizz", para múltiplos de 5 imprimir "Buzz" y para múltiplos de ambos 3 y 5 imprimir "FizzBuzz“..

// function fizzBuzz() {
//     let resultado = '';

//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             resultado += "FizzBuzz\n";
//         } else if (i % 3 === 0) {
//             resultado += "Fizz\n";
//         } else if (i % 5 === 0) {
//             resultado += "Buzz\n";
//         } else {
//             resultado += `${i}\n`;
//         }
//     }

//     return resultado;
// }

// console.log(fizzBuzz());
//_____________________________________________________________________________

//Ejercicio 21: Imprimir los números del 10 al 1 en orden descendente.

// function numeros() {
//     let resultado = '';

//     for (let i = 10; i >= 1; i--) {
//         resultado += `${i}\n`;
//     }

//     return resultado;
// }

// console.log(numeros());
// //____________________________________________________________________________

//Ejercicio 22: Imprimir los primeros 10 términos de la serie de Fibonacci.

// function fibonacci() {
//     let a = 0;
//     let b = 1;
//     let resultado = [a, b];

//     for (let i = 2; i < 10; i++) {
//         let temp = a + b;
//         resultado.push(temp);
//         a = b;
//         b = temp;
//     }

//     return resultado.join(', ');
// }

// console.log(fibonacci());
