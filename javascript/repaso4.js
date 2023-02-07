//*configuracion de la barra lateral

//selecciona la clase que tiene el boton que oculta y muestra la barra
const boton = document.querySelector(".toggle-btn");

//aqui agrega un evento de escho a boton cuando se haga un click
boton.addEventListener("click", function () {
  //selecciona el contenedor y luego se le agrega la clase active, lo que have toggle es que si
  //la clase no existe la crea y si existe la elimina
  document.getElementById("sidebar").classList.toggle("active");
});

//*configuracion de el boton de modo oscuro

//seleccionamos la clase que tiene el contenedor donde esta el boton
const dark = document.querySelector(".mdark");

dark.addEventListener("click", () => {
  //crea la clase claro en body, esto para que pueda modificar los colores con el tema claro
  //  y se activa cuando hay un click
  document.body.classList.toggle("claro");
  // crea la clase clisck en el contenedor, la cual se utilizara para modificar la posicion y el
  // color del boton al dar click sobre este
  dark.classList.toggle("clicks");
});

//*configuramos el buscador

//keyup funciona cuando se preciona una tecla
document.addEventListener("keyup", (e) => {
  //lo que hace target.matches es verificar si e es igual a #buscador
  // (si lo que se escribe en el buscador coincide con lo que hay en el id buscador )
  if (e.target.matches("#buscador")) {
    //esto lo que hace es que si se oprime la tecla escape se limpia el buscador
    if (e.key === "Escape") e.target.value = "";

    //aqui selecciona todos los elementoss que tienen la clase articulo y se pone el metodo
    //for each para iterar sobre cada uno de estos elementos y se añaden a la variable fruta
    document.querySelectorAll(".articulo").forEach((fruta) => {
      //se verifica si el contenido del texto de cada elemento es igual al evento e.target.values
      //y combierte a minuscula ambos con tolowerCase, esto para que cuando se busque convierta
      //todo el texto que se digite a minuscula y lea los nombres de los elementos en minuscula
      fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? //si lo que se busca coincide con los elementos, se elimina la clase filtro para que
          // se muestre los que coinciden, esta clase se le pone a cada elemento de .articulo
          fruta.classList.remove("filtro")
        : //si no coincide se agrega la clase filtro para que se oculten
          fruta.classList.add("filtro");
    });
  }
});

//* calculadora

//llamamos las clases que tiene nuestra calculadora en HTML
const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

//se llama a Display.js el cual pasara el valor anterior y el actual 
const display = new Display(displayValorAnterior, displayValorActual);

//lo que hara esto es que cada ves que se digite un numero los va ir agregando al metodo
// agregarNumero que esta en el archivo Display y para mortrarlo se hace desde display
botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

//se tomara el value de los botones para el metodo computar de la clase display
botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});
