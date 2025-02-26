// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let elemento;
  let matriz = [];
  
  for (let clave in objeto) {
    elemento = []
    elemento.push(String(clave));
    elemento.push(objeto[clave]);
    
    matriz.push(elemento);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};

  while (string.length > 0) {
    elemento = string[0];
    counter = 1;

    for (i=1; i<string.length; i++) {
      if (elemento === string[i]) {
        counter++
      }
    }

    objeto[elemento] = counter;
    string = string.replaceAll(elemento, "");
  }
  
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas = "";
  let minusculas = "";

  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
          mayusculas = mayusculas + s[i];
      } else {
          minusculas = minusculas + s[i];
      }
  }

  return mayusculas+minusculas;  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function invertirStr(str) {
    str_invertido = "";
    for (let i=str.length-1; i >= 0; i--) {
      str_invertido = str_invertido + str[i];
    }

    return str_invertido;
  }

  return str.split(" ").map(invertirStr).join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  function invertirStr(str) {
    str_invertido = "";
    for (let i=str.length-1; i >= 0; i--) {
      str_invertido = str_invertido + str[i];
    }

    return str_invertido;
  }

  if (invertirStr(String(numero))===String(numero)) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  letras = ["a", "b", "c"];
  
  for (let i=0; i<letras.length; i++){
    cadena = cadena.replaceAll(letras[i], "");
  }

  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function compareStrsLength(str1, str2) {
    if (str1.length > str2.length) {
      return 1;
    } else if (str1.length < str2.length) {
      return -1;
    } else {
      return 0;
    }
  }

  return arr.sort(compareStrsLength);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arreglo_union = [];
  for (let index = 0; index < arreglo1.length; index++) {
      for (let index2 = 0; index2 < arreglo2.length; index2++) {
          if (arreglo1[index]===arreglo2[index2]) {
            arreglo_union.push(arreglo1[index]);
          }
      }
  }

  return arreglo_union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

