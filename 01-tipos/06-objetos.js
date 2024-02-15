// Los objetos son datos que tienen sentido tenerlos juntos

/**
 * Los datos que definen los objetos, osea lo
 * que esta a la izquierda se le define como 
 * llave- valor o tambien como propiedad
 */

let personaje={
    nombre:"Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};
console.log(personaje);
//Esto es para acceder a una propiedad en especifico
console.log(personaje.nombre);
//Tambien existe otra forma con "[]"
console.log(personaje['anime']);
//Para modificar la propiedad 
personaje.edad = 18;

personaje['edad'] = 16;
//Para eliminar una propiedad 

delete personaje.anime;

console.log(personaje);