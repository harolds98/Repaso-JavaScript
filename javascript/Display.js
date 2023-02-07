//*este archivo js funciona para interactuar con los botones y mostar resultados

class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      dividir: "/",
      multiplicar: "x",
      restar: "-",
    };
  }

  //   este metodo es el <- que funciona para borrar de a un numero
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }
  //esto ees la C que borra todo lo que hay en la pantalla
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

//esto es para que podamos utilizar el valor de la operacion anterior
  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  agregarNumero(numero) {
    // esto es para que no se pueda colocar mas de un punto decimal
    if (numero === "." && this.valorActual.includes(".")) return;
    // se  le suma el numero para que se pueda colocar un numero detras del otro o junto a otro
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  //aqui lo que hara se imprimir los valores que se van digitando
  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    //parsefloat convierte los valores a numeros ya que anteriormente se paso a string
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    //verifica si valor actual y valor anterior son NAN si es asi no retorna nada
    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
}
