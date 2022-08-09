let personas = {
    nombre: 'Luciano',
    apellido: 'Piñeyro',
    edad: 20,
    numeros: {
       cel: 098769328,
        tel: 43624742,
    },
    domicilio:{
        dur: '19 de abril 587',
        mdeo: 'Juan Manuel Blanes 1136',
    },
    estudios: ['Notariado', 'Programacion'],
}


console.log(personas);
console.log('Nombre:' , personas.nombre);
console.log('Nombre:' , personas['nombre']);
console.log('Edad:' , personas['edad']);


console.log('Domicilio:' , personas.domicilio.dur);
console.log('Domicilio:' , personas.domicilio.mdeo);

console.log('Cantidad de estudios:', personas.estudios.length);
console.log('Cantidad de estudios:', personas.estudios[personas.estudios.length - 1]);

// mas detalles.

// BORRAR UNA PROPIEDAD DEL OBJETO.(DELETE)

delete personas.edad;
console.log(personas);

// CAMBIAR EL OBJETO Y PASARLO A ARREGLO.(METODO ENTRIES)

personas.casado = false // AGREGAR UNA PROPIEDAD AL OBJETO (TRUE)

const entriesPares = Object.entries(personas);
console.log(entriesPares);

// BLOQUEAR EL OBJETO PARA EVITAR INSERTAR PROPIEDADES NUEVAS. (METEODO FREEZE)
// No bloquea un objeto que esta dentro de otro. (ejemplo cel de numeros).
Object.freeze(personas);


// LISTADO DE TODO ESE OBJETO.

const propiedades = Object.getOwnPropertyNames(personas);
const valores = Object.values(personas);
console.log(propiedades, valores);






