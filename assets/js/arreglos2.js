let juegos = ['Zelda', 'Mario', 'Metroid', 'Warzone'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos [juegos.length - 1];

console.log(primero, ultimo);

// BARRER TODOS LOS ELEMENTOS DE UN ARREGLO. (METODO FOREACH).

juegos.forEach((elemento, indice, arreglo) =>{
    console.log(elemento,indice,arreglo);
});

// AÑADIR UN ELEMENTO AL ARREGLO. (METODO PUSH).

let nuevaLongitudArreglo = juegos.push('F-Zero');

console.log(nuevaLongitudArreglo, juegos);



//AÑADIR UN ELEMENTO AL PRINCIPIO DEL ARREGLO (METODO UNSHIFT)

nuevaLongitudArreglo = juegos.unshift('Modern Warfare');
console.log(nuevaLongitudArreglo, juegos);

//BORRAR EL UTLIMO ELMENTO DEL ARREGLO (METODO POP).

let juegoBorrado = juegos.pop();

console.log(juegoBorrado);


//BOORAR UN JUEGO EN ALGUNA POSICION ESPECIFICA DEL ARREGLO (METODO SPLICE).

let borrarPos = 1;

let juegosBorrados = juegos.splice(borrarPos, 2);

console.log(juegosBorrados);

// VER EN QUE LUGAR SE ENCUENTRA UN ELEMENTO DE UN ARREGLO (METODO INDEXOF).

let metroidIndex = juegos.indexOf('Metroid');
console.log(juegos);

console.log(metroidIndex);

