/*!programacion orientada a objetos*/

document.write("<b>POO</b><br>");
/*?las clases son elementos que actuan como plantillas y va adefinir propiedades(caracteristicas)
metodos(comportamientos).la clase es como un modelo a partir del cual vamos a poder definir entidades  */
class animal {
  //constructor es el que construye el objeto donde se definen las propieades
  constructor(especie, edad, color) {
    // cuando ponemos this estamos declarando propiedades(atributos)
    this.raza = especie;
    this.años = edad;
    this.piel = color;
    this.info = `Es un ${this.raza}, tiene ${this.años} años y el color es ${this.piel}`;
  }
  //un metodo es una accion, los metodos son funciones dentro de la clase
  verinfo() {
    document.write("<br>" + this.info);
  }
}

/* cuando se trabaja con objetos lo mejor es poner const, aqui perro va a ser un objeto de la 
clase animal*/
const perro = new animal("perro", 2, "negro");
console.log(perro);
//asi accedemos a las propiedades, el perro es como el this de arriba
document.write(perro.info);

//se pueden crear infinidad de objetos
const gato = new animal("gato", 3, "blanco");
const pajaro = new animal("pajaro", 4, "azul");
// con el metodo nos ahorramos codigo en este caso nos ahorramos el document.write()
gato.verinfo();
pajaro.verinfo();

//*ejemplo 2 con polimorfismo
document.write("<br><br><b>POLIMORFISMO</b>");

class vehiculo {
  constructor(transporte, ruedas, color) {
    this.transporte = transporte;
    this.ruedas = ruedas;
    this.color = color;
    this.info = `Es un ${this.transporte}, tiene ${this.ruedas} ruedas y el color es ${this.color}`;
  }
  verinformacion() {
    document.write("<br>" + this.info + "<br>");
  }
  //aqui lo que vamos a crear es un metodo que actua diferente dependiendo del objeto(Polimorfismo)
  volar() {
    if (this.transporte == "avion") {
      document.write(this.transporte + " puede volor<br>");
    } else {
      document.write("<br>" + this.transporte + " no puede volar<br>");
    }
  }
}

const carro = new vehiculo("carro", 4, "rojo");
const avion = new vehiculo("avion", 3, "blanco");

carro.volar();
avion.volar();

//*ejemplo 3 con herencia
document.write("<br><b>HERENCIA</b><br>");
class pc {
  constructor(marca, ram, memoria) {
    this.marca = marca;
    this.ram = ram;
    this.memoria = memoria;
    this.info = `Es un ${this.marca}, tiene ${this.ram}gb de ram y una memoria ${this.memoria} gb `;
  }
  verinformacion2() {
    document.write(this.info + "<br>");
  }
}
const hp2 = new pc("hp", 8, 500, "intel 7");
hp2.verinformacion2();

//?extends es la palabra reservada para heredar
class pcgamer extends pc {
  //heredamos el contructor y si queremos le agregamos nuevos parametros
  constructor(marca, ram, memoria, procesador) {
    //super es una palabra reservada que permite llamar al constructor, tambien se puede heredar
    // metodos o atributos con super. ejemplo super.info
    super(marca, ram, memoria);
    //creamos una nueva propieda que se llamara procesador
    this.procesador = procesador;
  }
  verinformacion2() {
    document.write("<br>" + this.info + "y un procesador " + this.procesador);
  }

  //static crea metodos estaticos los cuales no utlizan las propiedades
  static mensaje() {
    document.write("<br>con esta pc si vas a poder jugar");
  }
}
/* no puedo tener un objeto con el mismo nombre de la clase 
const pcgamer = new vehiculo("hp", 8, 500, 'intel 7');*/

const hp = new pcgamer("hp", 8, 500, "intel 7");
const mac = new pcgamer("macbook", 12, 250, "ryzen 5");

hp.verinformacion2();
mac.verinformacion2();

/*podemos llamar el metodo static con el nombre de la clase y el nombre de nuestro metodo y este
se va a ejecutar ya que este metodo no esta utilizando ninguna propiedad*/
pcgamer.mensaje();

document.write("<br><br><b>GETTERS Y SETTERS</b>");
class pcvieja extends pc {
  constructor(marca, ram, memoria, sistema) {
    super(marca, ram, memoria);
    this.sistema = null;
  }
  //set sirve para modificar una propiedad
  set setsistema(nuevovalor) {
    this.sistema = nuevovalor;
  }

  //get sirve para obtener un valor
  get getsistema() {
    return this.sistema;
  }
}

const asus = new pcvieja("asus", 2, 100, "windows xp");
//de este modo definimos el nuevo valor para el set
asus.setsistema = "hp";
document.write("<br>" + asus.sistema);
//asi se llama un get con el nombre del objeto y elnombre del metodo get
document.write("<br>" + asus.getsistema);

//!Metodos cadena
document.write("<br><br><b>METODOS CADENA</b><br><br>");

document.write("<b>concat</b><br>");

let cadena = "esto es una cadena de prueba";
//concat sirve para concatenar cadenas
let mensajes = cadena.concat(" se con catenan o unen las dos cadenas <br>");
document.write(mensajes);

let cadena2 = "Esto es otra cadena de prueba. ";
mensajes = cadena.concat(cadena2);
document.write(mensajes);

document.write(
  "<br><br><b>startWith, endsWith, includes, indexOF y lastIndexOF y length</b><br>"
);
//startwith funciona para verificar si cuna cadena empieza con lo que hay en otra si es verdad
// arroja true si es falso arroja false y endsWith es lo mismo pero con el final de la cadena
mensajes = cadena.startsWith(cadena2);
document.write(mensajes);
mensajes = cadena.endsWith(cadena2);
document.write("<br>" + mensajes);
//includes busca si una palabra esta dentro de una cadena se pueden comparar 2 cadenas tambien
mensajes = cadena.includes("prueba");
document.write("<br>" + mensajes);
//indexOF nos da la posicion en la que esta la palabra si no la encuentra devuelve -1
mensajes = cadena.indexOf("prueba");
document.write("<br>" + mensajes);
//lastindexof busca la palabra pero si se repite toma la ultima palabra
mensajes = cadena.lastIndexOf("es");
document.write("<br>" + mensajes);

//length nos dice cuantos caracteres tiene una cadena de texto
document.write("<br>" + cadena.length);

document.write(
  "<br><br><b>repeat, split, substring, tolowerCase y toUpperCase</b>"
);

//repeat como su nombre lo dice nos funciona para repetir nuestra cadena
mensajes = cadena2.repeat(3);
document.write("<br>" + mensajes);

//split convierte la cadena en array cada vez que haya un espacio
//cada ves que hay un espacio sera una posicion, tambien podemos separar por (",") o (",") etc
mensajes = cadena2.split(" ");
document.write("<br>" + mensajes[5]);

//substring muestra caracteres desde en el rango de posiciones que deseemos en este caso la
//posicion inicial el 0 y la final 13. cada letra es una posicion
mensajes = cadena2.substring(0, 13);
document.write("<br>" + mensajes);

//convierte todo el texto a minuscula
mensajes = cadena2.toLowerCase();
document.write("<br>" + mensajes);

//convierte todo el texto a mayuscula
mensajes = cadena2.toUpperCase();
document.write("<br>" + mensajes);

//! Metodos de array
//algunos de los metodos de caadena funcionan para arrglos por ejemplo para buscar palablas, etc
document.write("<br><br><b>METODOS ARRAY</b><br><br>");

//los metodos transformadores modifican el array original los demas metodos crean un nuevo array
document.write("<b>Transformadores</b><br>");
document.write("<b>pop, shift, push, unshift, reverse, splice, sort</b><br>");

let arreglo = ["harold", "maria", 2, "jose", 233, "hola bb"];

document.write(arreglo + "<br>");

//pop elimina el ultimo elemento de un arreglo y si queremos saber cual fue el elemento que
//elimino se pone dentro de una variable el arreglo.pop()
let resultado = arreglo.pop();
//imprime el elemento que elimino
document.write(
  "<b>Elimina:</b><b style='color:red'> " + resultado + "</b><br>"
);
//impeime todos los elementos del arreglo excepto el que elimino
document.write(arreglo + "<br>");

//shift hace lo mismo que pop solo que este elimina es el primer elemento
resultado = arreglo.shift();
document.write(
  "<b>Elimina:</b><b style='color:red'> " + resultado + "</b><br>"
);
document.write(arreglo + "<br>");

//push agrega un elemento al final del arreglo, puede ser mas de un elemento
resultado = arreglo.push("nuevo", "nuevito");
document.write(arreglo + "<br>");

//unshift agrega nuevos elemntos al principio del arreglo
resultado = arreglo.unshift(0, "nuevin");
document.write(arreglo + "<br>");

//reverse lo que hacer es ordenar en el orden contrario el arreglo
resultado = arreglo.reverse();
document.write(arreglo + "<br>");

//splice elimina y agrega elementos desde una posicion dada en este caso empezamos en la posicion
//dos y desde hay elimina los 3 elementos siguientes(si queremos que no elimine nada se coloca 0)
//seguido de agregan los nuevos elementos que queramos los cuales empezaran desde la posicion 2 en este caso
//si se quiere tomar la posicion final se pone -1
resultado = arreglo.splice(1, 5, "splice", 100);
document.write(arreglo + "<br>");

//sort ordena el arreglo, los numeros de menos a mayos y el texto por el abecedario
resultado = arreglo.sort();
document.write(arreglo + "<br>");

document.write("<br><b>METODO MAP</b><br>");

//aqui vamos a sumarle un numero a cada elemento del arreglo, tambien se puede hacer cualquier
//operacion solo es cambiarle el operador
let arr = [1, 2, 3, 4, 5];
let sumar = 2;
//map sirve para crear un nuevo array con los resultados de la funcion
//la x se refiere a los elementos del array
let newarr = arr.map((x) => x + sumar);
document.write(newarr + "<br>"); // [3, 4, 5, 6, 7]

//este es otro ejemplo de como se puede sumar un numero a los elementos de un arrray con un bucle
let arrays = [1, 2, 3, 4, 5];
let suma = 5;
for (let i = 0; i < arrays.length; i++) {
  arrays[i] = arrays[i] + suma;
}
document.write(arrays + "<br>"); // [6, 7, 8, 9, 10]

//estos metodos crean un nuevo array asi que se nesecita de una variable para guardarse
document.write("<br><b>Accesores</b><br>");
document.write("<b>join, slice</b><br>");

let arreglo2 = ["pepito", 23, "volar", 120, "comer", 33, "rey"];
document.write(arreglo2 + "<br>");

//join nos convierte el array en una cadena de texto y dentro del parentesis si se desea se puede
//colocar algun separador que ira entre cada espacio
resultado = arreglo2.join("<br>Elemento: ");
//para que el primer elemento tenga la pabra elemento se coloca aqui en el document
document.write("Elemento: " + resultado + "<br>");

//slice nos muestra los elementos que queremos en este caso muestra los elementos desde la
//posicion 1 hasta el elemento 5
resultado = arreglo2.slice(1, 5);
document.write(resultado + "<br>");

document.write("<br><b>Repeticion</b><br>");
document.write("<b>filter, forEach</b><br>");

let arreglo3 = ["carro", 334, "cielo", 1, "celular", "hacker"];
document.write(arreglo3 + "<br>");

//filter recibe como parametro una funcion y es como un bucle que en cada vuelta valdra cada
//elemento del array
arreglo3.filter(function (array) {
  document.write(array + "<br>");
});

//este es otro ejemplo donde solo le imprimiran los elementos que tengas mas de 3 caracteres
let result = arreglo3.filter((num) => num.length > 3);
document.write(result + "<br>");

//el forEach es igual que el filter solo que filter es mas completo y en el segundo ejemplo de
//filter no funcionaria el foreach

//!objeto math
document.write("<br><b>OBJETO MATH</b><br>");
document.write("<b>sqrt, max, min, round, floor, trunc</b><br>");

//sqrt muestra la raiz cuadrada de un numero
let number = Math.sqrt(25);
document.write(number + "<br>");

//max muestra el numero maximo y solo funciona con numeros
let number2 = Math.max(4, 5, 6, 7, 333, 46.6, 442);
document.write(number2 + "<br>");

//min muestra el numero ma pequeño
number2 = Math.min(4, 5, 6, 7, 333, 46.6, 442);
document.write(number2 + "<br>");

//ramdom arroja un numero aleatorio entre 0 y 1
number2 = Math.random();
document.write(number2);

//si que remos apliar el rango lo multiplicamos por el rango que queremos
number2 = Math.random() * 10;
//parseInt convierte los numero a enteros con el mas cercano asi abajo ejemplo 9.8=9
let mensajes5 = parseInt(number2);
document.write("<br>" + mensajes5);

//ejemplo 3
let number3 = Math.random() * 50;
//con math.round redondea a el numero entero mas cercano 9.8=10 - 9.2=9
number3 = Math.round(number3);
document.write("<br>" + number3);

//ejemplo 4
let number4 = Math.random() * 80;
//con math.floor redondea el numero a entero pero a el numero menor ejemplo 4.9=4 - 53.89=53
number4 = Math.floor(number4);
document.write("<br>" + number4);

//ejemplo 5
let number5 = Math.random() * 100;
//con math.trunc quita los decimales a un numero ejemplo 9.9= 9 - 9.1=9
number5 = Math.trunc(number5);
document.write("<br>" + number5);

//! Metodos de consola

//clear limpia todo lo que hay en la consola
console.clear();
//muestra un mensaje de error
console.error("esto es un mensaje de error");
//.info muestra una mensaje informativo es muy parecido a el .log
console.info("esto es un mensaje informativo");

let arreglos = [11, 12, 3, 4, 5];
//muestra una tabla con los elementos y al lado su posicion, funciona con arreglos
console.table(arreglos);

//time inicializa un temporzador, funciona para saber cuanto tarda en ejecutar algo
console.time();
//timeLog nos dice cuanto tiempo ha pasado desde que se inicializo el temporizador
console.timeLog();
//timeEnd finaliza el temporizador y da el resultado final
console.timeEnd();
