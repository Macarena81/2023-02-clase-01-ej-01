// Crear un program que me permita saber si un nùmero es par/impar o "0"



//Pido un nùmero y lo convierto a entero
const dato = parseInt(prompt("Ingrese un numero"));

console.log(dato);

// Pregunto si es cero

if (dato == 0) {
    alert ("El numero es cero");
}

// pregunto si es par

else if (dato % 2 == 1) {
    alert ("El numero es impar");

// si no es cero ni impar, no queda otra, es par
} else  {
    alert ("El numero es par");
}