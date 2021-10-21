// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 24;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sumar = x + y;
  return sumar;
}
suma(6, 5);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restar = x - y;
  return restar;
}
resta(6, 5);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicar = x * y;
  return multiplicar;
}
multiplica(4, 3);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var div = x / y;
  return div;
}
divide(4,2);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x == y){
    return true;
  }
  return false
}
sonIguales(5,5);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var cad = str1;
  var cad2 = str2;
  if(cad.length == cad2.length){
    return true;
  }
  return false;
}
tienenMismaLongitud("hola", "hola");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){
    return true;
  }
  return false;
}
menosQueNoventa(89);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50){
    return true;
  }
  return false;
}
mayorQueCincuenta(50);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var modulo = x % y;
  return modulo;
}
obtenerResto(21,5);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var mod = num % 2;
  if(mod == 0){
    return true;
  }
  return false;
}
esPar(22);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impar = num % 2;
  if(impar != 0){
    return true;
  }
  return false;
}
esImpar(11);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(num,2);
  return cuadrado;
}
elevarAlCuadrado(5);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo = Math.pow(num,3);
  return cubo;
}
elevarAlCubo(3);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var exponente = Math.pow(num, exponent);
  return exponente;
}
elevar(5,2);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var red = Math.round(num);
  return red;
}
redondearNumero(6.49);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var arriba = Math.ceil(num);
  return arriba;
}
redondearHaciaArriba(5.12);

function numeroRandom(min, max) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var positivo = "Es positivo";
  var negativo = "Es negativo";
  if(numero > 0){
    return positivo
  }
  if(numero < 0){
    return negativo
  }
  return false;
}
esPositivo(22);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var excl = str + "!";
  return excl;
}
agregarSimboloExclamacion("hello world");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var fullName = nombre + " " + apellido;
  return fullName;
}
combinarNombres("Alfonso", "Fuentes");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
  var saludo = "Hola " + nombre + "!";
  return saludo;
}
obtenerSaludo("Alfonso");


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area;
}
obtenerAreaRectangulo(5,4);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro = lado * 4;
  return perimetro;
}
retornarPerimetro(4);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}
areaDelTriangulo(3,4);

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var cambio = euro * 1.20;
  return cambio;
}
deEuroAdolar(5);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var wrong = "Dato incorrecto";
  var bien = "Es vocal";
  if(letra.length >  1){
    return wrong;
  }
  if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    return bien
  }
  return wrong
}
esVocal("e");



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
