console.log("Estoy haciendo pruebas");
console.log("Todo Ta bien");

//paso 1: crear elemento header
// let header = document.createElement("header");
// console.log(header);
//paso 2:capturar o seleccionar el nodo en donde se va a insertar el nodo creado 

let body = document.querySelector("body");
console.log(body);

//paso 3: body es el lugar donde voy a agregar el nodo creado, apependChild agrega al fina body.appendChild(header);

//con esta ya se inserta el header en el body
// body.insertAdjacentElement("afterbegin",header);

//crear main_____________________________________________________

let main = document.createElement("main");
console.log(main);
//insertar main dentro del body
body.insertAdjacentElement("afterbegin",main);

//como insertar estilos individual.. 
// main.style.backgroundColor = "red";
// main.style.border= "1px solid black";
// main.style.height="100px";
// main.style.width= "100px";

//agregar varios estilos..
// maim.style.cssText = "background-color:black; color: white;";

//header del main_________________________________________________

let header = document.createElement("header");
console.log(header);

//agregar header a main
main.insertAdjacentElement("afterbegin", header);

//crear section que contendra(imagen de logo)
let containerImg = document.createElement("section");
console.log(containerImg);

//agregar section(containerImg) dentro del contenedor header
header.insertAdjacentElement("beforeend",containerImg);

//crear elemento imagen
const logo = document.createElement("img");
//agregar atributos a la imagen
logo.src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg";
logo.alt = "Start Bootstrap";
//agregar imagen dentro del section(containerImg)
containerImg.insertAdjacentElement("beforeend",logo);

//crear section(contenedorNav) contenedor de nav
let containerNav = document.createElement("section");
console.log(containerNav);
//agregar section(containerNav) dentro del contenedor padre header
header.insertAdjacentElement("beforeend",containerNav);
//crear elemento nav
let nav = document.createElement("nav");
console.log(nav);
//agregar nav dentro del section(containerNav)
containerNav.insertAdjacentElement("beforeend",nav);
//crear elemento ul
let ul = document.createElement("ul");
console.log(ul);
//agregar ul dentro del nav
nav.insertAdjacentElement("beforeend",ul);
//crear el elemento li
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");

//insertar el elemento li dentro del ul 
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

//agregar el texto dentro de las listas
li1.textContent = "SERVICES";
li2.textContent = "PORTAFOLIO";
li3.textContent = "ABOUT";
li4.textContent = "TEAM";
li5.textContent = "CONTACT";

//crear el elemento a de vinculo
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let a4 = document.createElement("a");
let a5 = document.createElement("a");

//agregar el a dentro del li
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
li5.appendChild(a5);

//___________________________________________________________________

//section01 del main
let section01 = document.createElement("section");
console.log(section01);

main.insertAdjacentElement("beforeend",section01);


//crear section02 fuera del main
let seccion02 = document.createElement("section");
console.log(seccion02);

body.insertAdjacentElement("beforeend",seccion02);

//crear section03 fuera del main
let seccion03 = document.createElement("section");
console.log(seccion03);

body.insertAdjacentElement("beforeend",seccion03);

//crear la seccion footer
let footer = document.createElement("footer");
console.log(footer);

body.insertAdjacentElement("afterend",footer);


