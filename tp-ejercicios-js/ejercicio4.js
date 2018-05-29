/*
Ejercicio 4:
Dado dos arrays con valores individuales, hacer una función que retorne un array con la suma de cada valor individual del mismo índice de cada array.
Ejemplo : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Salida : 
[4, 5, 8, 10, 12, 13]
*/

function sumaArray(array1, array2) {
    let suma = [];

    if (array1.length >= array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (i < array2.length) {
                suma[i] = array1[i] + array2[i];
            } else {
                suma[i] = array1[i];
            }
        }
    } else {
        for (let i = 0; i < array2.length; i++) {
            if (i < array1.length) {
                suma[i] = array1[i] + array2[i];
            } else {
                suma[i] = array2[i];
            }
        }
    }

    return suma;
}

const arreglo1 = [1, 2];
const arreglo2 = [1, 2, 3, 4, 5];

console.info(sumaArray(arreglo1, arreglo2));