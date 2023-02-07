//!DOM es el documento que tiene todos los elementos de una pagina html
document.write("<br><br><b>DOM</b><br>");

//un nodo es cual quier etiqueta del cuerpo ya sea un parrafo, una lista, incluso el mismo body,
// los nodos no siempre son etiquetas

//*tipos de nodos
//documet es el nodo raiz de donde salen todos los nodos
//element es un tipo de nodo que son definidos por etiquetas html (div,h1,p,etc...)
//text es el texto que hay dentro de las etiquetas o mejor dicho dentro de los nodos elemnt
//attribute sera imformacion que esta asociada a un nodo element (atributos: src,herf,id,class)
//comentarios generan nodos
//otros por ejemplo el <!DOCTYPE html> genera un nodo y muchos mas

//*metodos de seleccion de elementos

//getElementsById selecciona un elemento html por su id y si lo imprimimos por pantalla dira
//[object HTMLElement], de esta forma es como se selecciona un objeto entero
let id = document.getElementById("identificador");
document.write(id + "<br>");

//con esto podemos seleccionar por el tipo de etiqueta y su resultado sera [object HTMLCollection]
//por que es una coleccion de etiquetas p, para mostrar alguna podemos seleccionar por posicion
// ejemplo document.write(id[0])
id = document.getElementsByTagName("p");
document.write(id + "<br>");

//con esta propiedad las etiquetas se llaman como en css
id = document.querySelector("#identificador");
document.write(id + "<br>");

id = document.querySelector(".clase");
document.write(id + "<br>");

//*metodos para obtener,definir y eliminar los atributos?

const atributo = document.querySelector(".rango");
//para modificar un atributo ponemos la variable donde lo llamamos(atributo) y seguido colocamos
//el metodo setAttribute('tipo de atributo','el valor que queremos cambiar')
atributo.setAttribute("type", "text");

//getAttribute nos sirve para obtener el valor o tipo de un atributo en este caso del type
let tipoatributo = atributo.getAttribute("type");
//imprime text ya que fue el atributo que cambiamos anteriormente
document.write(tipoatributo);

//removeAttribute elimina un atributo en este caso el type este ya no aparecera mas en el DOM
tipoatributo = atributo.removeAttribute("type");
//si se imprime sera undefined ya que este ya no existe
document.write("<br>" + tipoatributo);

//*Atributos globales

const titulo = document.querySelector(".titulohtml");
//contentEditable acepta valores booleanos y en este caso lo que hara sera habilitar la
//modificacion del titulo con tan solo darle un click encima de este
titulo.setAttribute("contentEditable", "true");

const parrafo2 = document.querySelector(".clase");
//tabindex permite activar el enfoque de un elemento cuando se pulsa tab
parrafo2.setAttribute("tabindex", "0");

//title le muestra un titulo cuando se pasa el mouse encima de un elemento, esto tambien se puede
//hacer en html
parrafo2.setAttribute("title", "esto es un title que lo cambie en el DOM");

//*Atributos Inputs estos pueden funcionar sin los metodos de obtener,definir y eliminar

const input = document.querySelector(".texto");
//className muestra el nombre que tiene esa clase
document.write("<br><b>Atrivutos input</b><br>" + input.className);
//value muestra lo que tiene adentro ese input o el value que se coloco en html
document.write("<br>" + input.value);
//type cambia el tipo de input, file es un tipo de input para cargar un archivo de la pc
input.type = "file";
//funciona con los input file y es para especificar el tipo de atributo que acepta en este caso
//imagenes png, tambien se puede modificar desde el html
input.accept = "image/png";

const input2 = document.querySelector(".texto2");
//minLength especifica cuantos caracteres tiene como minimo un input, se puede con html tambien
input2.minLength = 3;
//coloca un placeholder
input2.placeholder = "digite su usuario";
//especifica si un campo es requerido
input2.required = "true";

//*Atributo Style permite modificar los estilos

const estilo = document.querySelector(".texto2");
//para utilizar style simplemente se pone el atributo a modificar en este caso baground
estilo.style.background = "orange";
//en java script se llema mas de dos paabra se unen y se ponen en camel case
estilo.style.fontWeight = "bolder";

//*classlist y sus metodos

//add añade una nueva clase en este caso se llamara nclase que esta al lado de la clase texto2
input2.classList.add("nclase");
//elimina una clase
input2.classList.remove("nclase");
//item devuelve el nombre de la clase que esta en alguna posicion en este caso la posicion 0
let valor = input2.classList.item(0);
document.write("<br><b>Classlist</b><br>" + valor);
//verifica si una propiedad tiene una clase en especifico en este caso 'texto2'
valor = input2.classList.contains("texto2");
// devuelve true porque la clase si existe
document.write("<br>" + valor + "<br>");
//toggle lo que hara es verificar si una clase existe o no. si existe la elimina y si la clase
// no existe la agrega
input2.classList.toggle("harolds");
//esto sirve para remplazar una clase en este caso remplaza 'harolds' por 'otraclase'
input2.classList.replace("harolds", "otraclase");

//*obtencion y mdificacion de elementos

const elementos = document.querySelector(".elemento");
//textContent devuelve el texto que hay en las etiquetas pero no el estilo, con esto quiero decir
//que por ejemplo si esta en negrilla este devuelve el texto sin negrilla
let resultado = elementos.textContent;
document.write(
  "<b>obtencion y modificacion de elementos</b><br>" + resultado + "<br>"
);

//innerHTML muestra o toma todo lo que tiene adentro la etiqueta html
resultado = elementos.innerHTML;
document.write(resultado);

//outerHTML muestra o toma todo el contenido incluyendo las etiquetas html
resultado = elementos.outerHTML;
document.write(resultado + "<br>");

//* crear elementos

const content = document.querySelector(".contenedorr");

//createElement crea un elemento en este caso un li
const elemento = document.createElement("LI");
//createTextNode crea un texto
const textos = document.createTextNode("creamos un texto");
//appenChild agrega un elemento hijo, este caso lo que hace es agregar el texto a li
elemento.appendChild(textos);

//agregamos el li con el texto al elemento content que es un div
content.appendChild(elemento);
console.log(content);

//se le agrega este texto al li
elemento.innerHTML = "otra forma de crear texto en ves de createTextNode";
console.log(elemento);


//*Obtencion y modificacion de hijos


const contenido = document.querySelector(".contenedor2");
//firstChild selecciona el primer hijo pero si tiene espacio entre su etiqueta padre no lo tomara
const primerhijo = contenido.firstChild;
console.log(primerhijo);

//toma el ultimo hijo pero si tiene espacio no lo toma y aparece text que sea el espacio
const ultimohijo = contenido.lastChild;
console.log(ultimohijo);


//toma el primer elemento hijo, no importa si hay espacios
const primerelementohijo = contenido.firstElementChild;
console.log(primerelementohijo);

//toma el ultimo elemento hijo, no importa si hay espacios
const ultimoelementohijo = contenido.lastElementChild;
console.log(ultimoelementohijo);

//toma todos los nodos hijos incluyendo los espacios que se muestran como text
const hijos = contenido.childNodes;
console.log(hijos);

//toma todos los nodos hijos sin incluir los espacios
const hijos2 = contenido.children;
console.log(hijos2);


//*Metodos hijos 


const h4nuevo = document.createElement("H4");
h4nuevo.innerHTML='cambio el valor de un h4 hijo'
const h4viejo = document.querySelector('.h4')
//replaceChild remplaza un hijo primero se colo el nuevo y despues el que se remplazara
contenido.replaceChild(h4nuevo,h4viejo)


const elementob = document.querySelector('.b')
//removeChild elimina un hijo de un elemento padre
 contenido.removeChild(elementob)

//*propiedades padre

//parentElement muestra el padre de un elemento hijo
console.log(h4nuevo.parentElement);

//*propiedades hermanos son los que estan en ele mismo rango

//nextSibling muestra el hermano sigiente incluyendo los espacios que se definen como next 
console.log(h4nuevo.nextSibling);
//previousSibling muestra el hermano sigiente incluyendo los espacios que se definen como next 
console.log(h4nuevo.previousSibling);


//nextElementSibling muestra el hermano sigiente sin incluir los espacios 
console.log(h4nuevo.nextElementSibling);
//previousElementSibling muestra el hermano sigiente sin incluir los espacios 
console.log(h4nuevo.previousElementSibling);
 