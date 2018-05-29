/*
Ejercicio 3:
Crear una función que retorne el primer elemento de un array. Si a la función le pasamos un segundo parámetro n (entero) nos retornará los n primeros elementos.
Datos de prueba: 
1 console.log(primer([7, 9, 0, -2]));
2 console.log(primer([],3));
3 console.log(primer([7, 9, 0, -2],3));
4 console.log(primer([7, 9, 0, -2],6));
5 console.log(primer([7, 9, 0, -2],-3));

Salida: 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[]
*/

function primer(a, b) {

    if (a.length > 0 && b == undefined) { //1er caso
        console.info(a[0]);
    } else {
        if (a.length == 0 && b > 0) { //2do caso
            console.info([]);
        } else {
            if (a.length >= b && b > 0) { //3er caso
                for (let index = 0; index < b; index++) {
                    console.info(a[index]);
                }
            } else {
                if (a.length < b && b > 0) { //4to caso
                    for (let index = 0; index < a.length; index++) {
                        console.info(a[index]);
                    }
                } else { //5to caso
                    console.info([]);
                }
            }
        }
    }
}


primer([7, 9, 0, -2]);
primer([], 3);
primer([7, 9, 0, -2], 3);
primer([7, 9, 0, -2], 6);
primer([7, 9, 0, -2], -3);