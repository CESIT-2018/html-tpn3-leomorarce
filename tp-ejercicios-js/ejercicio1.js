/*
Ejercicio 1:
Crear una función que acepta una oración de tipo string como parámetro y busca la palabra que tiene mayor longitud.
Ejemplo entrada: 'El desarrollo Web es entretenido' 
Salida: 'entretenido' 
*/

function buscaMayorPalabra(oracion) {
    const palabras = oracion.split(' ');
    let paLarga = '';

    for (const p in palabras) {
        if (paLarga.length <= palabras[p].length) {
            paLarga = palabras[p];
        }
    }

    return paLarga;
}

console.info(buscaMayorPalabra('El desarrollo Web es entretenido'));

