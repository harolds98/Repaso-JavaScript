//!tipos de datos: var, let y const

/**la diferencia entre var y let es que var tiene un alcance global y let tiene alcance
en el bloque que se declare, fuera de este bloque ya no servira*/

var harold = "sanchez"; //los strings o cadenas de texto se pueden colocar entre comillas dobles o simples
harold = "morales";
//*console.log es como se imprime algo por pantalla aqui muestra morales
console.log(harold);

if (true) {
  //aqui la variable LET solo funcionara dentro del if ese es el alcance que tiene
  let harold = 20;
  console.log(harold);
}
//?si llamamos a la variable harold mostrara el valor de la variable VAR y no la de LET
console.log(harold);

//const es un tipo de variable el cual no se podra cambiar su valor
const num = 1998;
//num = 24; por ejemplo qui no le podremos cambiar su valor siempre sera 1998
console.log(num);

//!datos especiales
//esto arroja undefined ya que la variable esta inicializada pero no tiene un valor definido
var hs;
console.log(hs);

//esta variable tendra un valor nulo (null), estara vacia
let valor = null;
console.log(valor);

//esto arrojara un valor NaN que basicamente dice que el no es un numero
let dato = 21;
let dato2 = "harold";
console.log(dato * dato2);

//! prompt recibe un valor por teclado
let usuario = prompt("digite su usuario"); //lo que digite se guardara en la variable usuario
//alert es un modo de mostrar o de imprimir por pantalla
alert("BIENVENIDO " + usuario);

//!operadores
document.write("<b>OPERADORES MATEMATICOS</b>");

let suma = 10;
suma += 5; //esto es igual a suma = suma + 5
//write se utiliza para poner texto html en la pagina, pero esto solo es recomendado para pruebas
document.write("<br>la suma es" + suma + "<br>");

let multiplicacion = 10;
multiplicacion *= 5;
document.write(" la multiplicacion es " + multiplicacion + "<br>");

let resto = 10;
resto %= 5;
document.write("el resto de la division es " + resto + "<br>");

let expo = 10;
expo **= 2; //eleva al cuadrado
document.write(" el numero al cuadrado es " + expo + "<br>");

//si no se define la variable automaticamente queda con mo variable VAR
n1 = 20;
n1--; //aqui resta uno y asi se hace para sumar uno se pone n1++
document.write("se le resta uno a 20 = " + n1 + "<br>");

n2 = 40;
n3 = 2;
divide = n2 / n3;
document.write("se divide 40/2 = " + divide + "<br>");

exponencial = n3 ** 3;
document.write("se eleva el 2 al cubo = " + exponencial + "<br>");

//!concatenacion
document.write("<br><b>CONCATENACION</b><br>");

frase = "esto es concatenar,";
frase2 = " que haces?";
unir = frase + frase2;
document.write(unir + "<br>");

n4 = "19";
n5 = 98;
//asi se puede concatenar un string con un numero el numero lo convierte a string
concatenar = n4.concat(n5);
document.write(concatenar + "<br/>");

user = "HAROLD";
//${variable}asi se concatena una variable dentro de un texto pero solo funciona con esas comillas o backtis
concatenado = `hola ${user} aqui concatenamos tu nombre con este texto.`;
document.write(concatenado + "<br/>");

comillas =
  'se pueden colocar "comillas" dentro de un string siempre que sean diferentes a las que contienen el string';
document.write(comillas + "<br>");

//!operadores de comparacion devuelven true o false
document.write("<br><b>OPERADORES DE COMPARACION</b><br>");

let nu1 = 15;
let nu2 = 200;
let nu3 = "15";
//con dos == podemos comparar dos valores pero no el tipo de dato
comp = nu1 == nu2;
document.write("los valores 15 y 200 son iguales == " + comp);
//aqui arroja true aunque uno es un string y el otro un numero
compa = nu1 == nu3;
document.write("<br>los valores 15 y '15' son iguales == " + compa);

//=== esto nos compara el valor y el tipo de dato, aqui retorn false
compa = nu1 === nu3;
document.write("<br>los valores 15 y '15' son iguales === " + compa);

//? con esto comparamos si un numero es diferente
compar = nu1 != nu3;
document.write("<br>los valores 15 y '15' son distintos != " + compar);
//? !== compara que sean estrictamente distintos
compar = nu1 !== nu3;
document.write("<br>los valores 15 y '15' son distintos !== " + compar);

compara = nu1 < nu2;
document.write("<br>los valores 15 < 200 = " + compara);
compara = nu1 > nu2;
document.write("<br>los valores 15 > 200 = " + compara);
compara = nu1 <= nu2;
document.write("<br>los valores 15 <= 200 = " + compara);
compara = nu1 >= nu2;
document.write("<br>los valores 15 >= 200 = " + compara);

//!operadores logicos solo acepta valores boleanos si se cumple la condicion devuelven un resultado booleano
document.write("<br><br><b>OPERADORES LOGICOS</b>");

let h = true;
let h2 = true;
let h3 = false;

//&& se cumple cunado los dos valores son true
let resul = h && h2;
document.write("<br>los valores 'true' && 'true' = " + resul);

//||se cumple cuando un valor es true
resul = h || h3;
document.write("<br>los valores 'true' || 'false' = " + resul);

//? !si el valor el true sera false y si es falso sera true
resul = !h;
document.write("<br>los valores 'true' ! = " + resul);

//*ejemplo2
let har1 = 24;
let har2 = 30;

let result = har1 < har2;
let resulta = har1 > har2;
let resuls = har1 != har2;

let resultar = result && resulta;
document.write("<br>los valores 'true' && 'false' son= " + resultar);

resultar = result || resuls;
document.write("<br>los valores 'true' || 'true' son= " + resultar);

document.write("<br>los valores 'false' ! es= " + !resulta);

document.write("<br>los valores 'false' || 'false' son= ");
//otra forma de colocar las comparaciones
document.write(har1 === har2 || har1 >= har2);

//este es un ejemplo de una operacion mas larga, se resuelven los parentesis primero
let operacion =
  (har1 === har2 || har1 < har2) && har2 != har1 && !(har2 > har1);
document.write(
  "<br>los valores ('false' || 'true') && ('true' && 'false') son= "
);
document.write(operacion);

//! condicionales
document.write("<br><br><b>CONDICIONAL IF</b>");

if (10 >= 18) {
  document.write("<br>condicional if es true");
} else {
  document.write("<br>condicional if es false");
}

//ejemplo 2
let nom = "sanchez";

if (nom == "harold") {
  document.write("<br>condicional if es true eres harold");
} else if (nom == "sanchez") {
  document.write("<br>condicional else if quien es usted</br>");
} else {
  document.write("<br>condicional else, nadie sabe quien es ud");
}

//!Arrays
document.write("<b><br>ARREGLOS</b><br>");

//con los arreglos podemos guadar muchos datos, y su posicion arranca desde 0
let arreglo = ["banana", "mango", 1998, "pera", 24];
document.write(arreglo[1]); //aqui muestra mango que esta en la posicion 1

document.write("<b><br>ARREGLOS ASOSIATIVOS</b><br>");

//*estos arrays funcionan con llaves
let pc = {
  nombre: "HP",
  procesador: "INTEL",
  ram: "8GB",
  memoria: "1TB",
};
document.write(pc["procesador"]); //muestra el procesador del arreglo pc

//estos arrays tambien pueden funcionar para lo siguiente
let nompc = pc["nombre"];
let procesa = pc["procesador"];
let rampc = pc["ram"];
let memory = pc["memoria"];

let computador = `<br><br>mi pc es marca ${nompc},<br>
su prosesador es un ${procesa}, <br>
tiene ${rampc} de memoria ram, <br>
y su almacenamiento es de ${memory}`;

document.write(computador);

//?se pueden utilizar para cualquier proceso
if (pc["nombre"] === "HP") {
  document.write("<br><br>yo tengo un pc igual");
} else {
  document.write("no se cual es esa marca");
}

for (let i = 1; i < 4; i++) {
  document.write("<br>" + pc["nombre"]);
}

//!bucles se ejecutan hasta que una condicion se deja de cumplir

document.write("<b><br><br>BUCLES</b><br>");

document.write("<b>while</b><br> ");
/*?el bucle while y do while se utiliza para ciclos donde no se sabe el limite pueden ser 
infinitos en este caso el bucle no para hasta que se digite h */
let hhh = prompt("name");
while (hhh != "h") {
  alert("error");
  hhh = prompt("name");
}

let condicions = 0;
//si se cumple la condicion pasa ala siguiente condicion
while (condicions <= 5) {
  //se puede imprimir primero y luego sumar de a uno(si se imprime primero empieza en 0)
  condicions++; //se le suma 1
  document.write(condicions); //se imprime 1 por pantalla(al final muesta numeros del 1 al 6)
} //si se sigue cumpliendo la condicion se repite todo hasta que deje de cumplirse

document.write("<br>");
let condicions1 = 0;
while (condicions1 <= 100) {
  condicions1 += 2; //se sumara de a 2. 0+2=2, 2+2=4
  document.write(condicions1); //imprime 2,4,6,etc
  if (condicions1 == 20) {
    //cuando llegue a 20 para
    break;
  }
}

//todo do wile primero se ejecuta y luego se ve si se cumple la condicion

document.write("<br><b>do while</b><br> ");
//*estos ejemplos son los mismo del while
// let h36 = prompt("user");
// do{
//   alert("mal");
//   h36 = prompt("otraves");
// }while (h36 != "y")

let num01 = 0;
do {
  num01++; //le suma uno al 0
  document.write(num01); //imprime 1(al final muestra numeros del 1 al 6)
} while (num01 <= 5); //si aun se cumple se repite todo sino termina aqui

//*bucle for es un bucle finito el cual sabemos su fin

document.write("<br><b>for</b><br> ");
/*?primero se declara una variable en este caso es h que valdra 0 despues se pone una condicional
en este caso es h<=5 si se cumple haga lo que esta dentro de las llaves, luego incrementa 1 y 
vuelve y verifica si la condicion se cumple  */
for (let h = 0; h <= 5; h++) {
  document.write(h);
}
document.write("<br>");
/*aqui se pondran los numero del 5 al 0. la condicional dice que si 5 es mayor o igual a 0
continua con lo que hay en las llaves, luego resta uno y vuelva a la condicional*/
for (let i = 5; i >= 0; i--) {
  document.write(i);
}
document.write("<br>");
/*tambien la variable se puede declarar a fuera del for y asi tambien se podria llamar despues
del for para ver su valor final y aqui aumentara de 2 en 2*/
let z = 0;
for (; z <= 10; z += 2) {
  document.write(z);
}
document.write("<br>");

for (let i = 1; i <= 100; i++) {
  document.write(i + ",");
  //tambien se le puede colocar un break para que cuando llegue a un valor especifico pare
  if (i == 20) {
    break;
  }
}
document.write("<br>");

for (let i = 1; i <= 10; i++) {
  //continue lo que hace es saltar ese numero y sigue con el bucle(se coloca antes de imprimir)
  if (i == 9) {
    continue;
  }
  document.write(i + ",");
}

/*aqui hace una tabla de multiplicar del 4 hasta el 5 (4*5), la variable let no funciona fuera
del bucle for*/
for (let i = 1; i <= 5; i++) {
  document.write("<br>" + 4 + "x" + i + "=" + i * 4);
}

document.write("<br><b>for in y for of</b><br> ");

let frutas = ["uva", "fresa", "banano", "mango"];

//el for in vota la posicion de los elementos
for (fruta in frutas) {
  document.write(fruta + "<br>");
}
//el for of arroja el nombre de los elemetos
for (fruta of frutas) {
  document.write(fruta + "<br>");
}

document.write("<br>");
let nombresillo = ["harold", "david"];
let nombresillo2 = ["valentina", "maria", nombresillo];

//aqui vamos a ver como se recorre un arreglo dentro de otro
for (let array in nombresillo2) {
  if (array == 2) {
    for (let array of nombresillo) {
      document.write(array + "<br>");
    }
  } else {
    document.write(nombresillo2[array] + "<br>");
  }
}

//! Funciones (una funcion es una porcion de codigo que se puede reutilizar)

document.write("<br><b>FUNCIONES</b><br> ");

//las funciones se crean y luego se llaman
function holi() {
  document.write("bienvenido a mi funcion <br>");
  let arreglo = ["pc", "tv", 100, "lapiz"];
  for (let array of arreglo) {
    document.write(array + "<br>");
  }
}
holi(); //para llamar la funcion colocamos su nombre seguido de unos parentesis

function ejm() {
  /*el retur funciona para retornar un tipo de dato ya que por si sola la funcion no retorna
  ningun tipo de dato solo hace un proceso y el return tambien funciona como un break lo que 
  este abajo de este no se va a ejecutar*/
  return "yo me retorno <br>";
  document.write("ejemplo 2");
}
let retorna = ejm();
document.write(retorna);

//las funciones pueden llevar parametros

/*se ponen las valiables del proceso dentro del parentesis, estas variables no funcionan afuera 
de la funcion*/
function multiplica(valor1, valor2) {
  let solucion = valor1 + valor2;
  document.write(
    solucion + " soy una funcion con parametros donde sumo dos valores<br>"
  );
}
//?aqui se le asigna un valor a las variables(estos valores se sumaran en este ejemplo)
multiplica(10, 200);
//esto se puede hacer cuantas veces queramos
multiplica(55, 8);

//ejemplo 2 con retorno y otra forma de crar funciones
const dividir = function (valor3, valor4) {
  let soluciona = valor3 / valor4;
  return soluciona;
};
//para mostrar lo que hay en el return se debe guardar la funcion en una variable
let muestra = dividir(2, 2);
document.write(
  muestra +
    " soy una funcion con parametros y return donde divido dos valores <br>"
);

/*la variables de una funcion son regionales, solo existen dentro de la función y se deben
declarar con let para que el alcance sea regional*/
function saludar(nombre) {
  let frase = `Hola ${nombre} hace rato no te miraba<br>`;
  document.write(frase);
}
saludar("PEPITO");

//*funciones flecha
//?lo que cambia es el funtion por la flecha que se coloca despues del parentesis
const saludos = (nombres) => {
  let frase = `Hola ${nombres} esto es una funcion flecha`;
  document.write(frase);
};
saludos("MARTHA");

/*si la funcion solo tiene un parametro a este se le puede quitar el parentesis y si dentro de 
esta funcion solo hay una linea de codigo se le puede quitar las llaves*/
const hello = (nomb) => {
  let mensaje = `Hola ${nomb} aqui seguimos con la funcion flecha`;
  document.write(mensaje);
};
hello("<br>SANCHEZ");
