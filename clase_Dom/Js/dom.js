console.log("bienvenido al js");

/* capturar los nodos */
/*.getElementById*/
let texto = document.getElementById('titulo');
console.log(texto);

/* capturar el node p mediante la clase */
let parrafo = document.getElementsByClassName('parrafo');
console.log(parrafo);

/* capturar el nodo h1 mediante su nombre de etiqueta */
let nombre = document.querySelector('h1');
console.log(nombre);

/* capturra el node p mediante su nombre de etiqueta */
let item = document.getElementsByTagName('li');
console.log(item);

/* capturar el nodo mediante id, clase, etiqueta */
let nombre2 = document.querySelector('#titulo');
console.log(nombre2);

/* capturar el nodo mediante id, clase etiqueta (se mostraran todos) */
let items = document.querySelectorAll('li');
console.log(items);

/* crear node h2*/
console.log("crear nodos para html");
/* paso1: crear nodo para insertar al Dom */
let texto2 = document.createElement('h2');
console.log(texto2);
/* paso 2 capturar o seleccionar el nodo en donde se va a insertar el nodo creado(h2) */
let header = document.querySelector('header');
console.log(header);
/*paso 3; agreagar el nodo creado dentro del nodo del Dom (se agrega al fina)  */
header.appendChild(texto2);
/* paso 4; crear un texto para agregar al nodo creado (h2) */
let text = document.createTextNode("hola mundo");
/* paso 5; insertar el texto creado dentro del nodo creado (h2) */
texto2.appendChild(text);


/* taller ejercicio crear nodes */
/* paso1: crear nodo para insertar al Dom un div */
let div = document.createElement('div');
console.log(div);
/* paso 2 capturar o seleccionar el nodo en donde se va a insertar el nodo creado(div) */
let main = document.querySelector('main');
console.log(main);
/*paso 3; agreagar el nodo creado dentro del nodo del Dom (se agrega al fina)  */
main.appendChild(div);
/* paso 4: crear el nodo (h2) */
let texto3 = document.createElement('h3');
console.log(texto3);
/* paso 5 capturar o seleccionar el nodo en donde se va a insertar el nodo creado(h3) */
let div2 = document.querySelector('div');
console.log(div2);
/*paso 6; agreagar el nodo creado dentro del nodo del Dom (se agrega al fina)  */
div.appendChild(texto3);
/* paso 7; crear un texto para agregar al nodo creado (h3) */
let textoh3 = document.createTextNode("hola desde div");
/* paso 8; insertar el texto creado dentro del nodo creado (h3) */
texto3.appendChild(textoh3);
/* paso9: crear nodo para insertar al Dom una etiqueta de texto (p) dentro de div */
let parrafodiv = document.createElement('p');
console.log(parrafodiv);
/* paso 10 capturar o seleccionar el nodo en donde se va a insertar el nodo creado(div) */
let div3 = document.querySelector('div');
console.log(div3);

/* paso 11: inserto el porrafo dentro de p */
div.appendChild(parrafodiv);

/* paso 12; crear un texto para agregar al nodo creado (p) */
let texto4 = document.createTextNode("parrafo de texto desde div");
/* paso 15; insertar el texto creado dentro del nodo creado (p) */
parrafodiv.appendChild(texto4);






