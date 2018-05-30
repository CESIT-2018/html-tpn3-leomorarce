/*
Ejercicio 5:
Crear las siguientes funciones:
- Función que retornar un arrya todos los números pares que hay entre 1 y X
- Función quer retornar un array con todos los números impares entre 1 y X
- Función que retorna un array con todos los números primos entre 1 y X
- Función que retorna un array con todos los números no primos entre 1 y X
- Una función llamada integradora que recibe un número entero X y una función,  (par, impar, primo, no primo) y muestra el contenido del resultado de la función que le pasamos. 
*/


let numPares = function (hasta) {
    let pares = [];

    for (let i = 1; i <= hasta; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }

    return pares;
}

let numImpares = function (hasta) {
    let impares = [];

    for (let i = 1; i <= hasta; i++) {
        if (i % 2 == 1) {
            impares.push(i);
        }
    }

    return impares;
}

let esPrimo = function (num) {
    let ret = true;

    if (num <= 1) {
        ret = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                ret = false;
            }
        }
    }

    return ret;
}

let numPrimos = function (hasta) {
    let primos = [];

    for (let i = 1; i <= hasta; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    return primos;
}

let numNoPrimos = function (hasta) {
    let noPrimos = [];

    for (let i = 1; i <= hasta; i++) {
        if (!esPrimo(i)) {
            noPrimos.push(i);
        }
    }

    return noPrimos;
}

function integradora(num,callback){
    return callback(num);
}

/*
console.info(numPares(12));
console.info(numImpares(12));
console.info(numPrimos(100));
console.info(numNoPrimos(100));
*/

/*
console.info(integradora(10,numPares));
console.info(integradora(55,numImpares));
console.info(integradora(50,numPrimos));
console.info(integradora(100,numNoPrimos));
*/
