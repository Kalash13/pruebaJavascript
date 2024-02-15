// los array siempre comienzan desde 0 
let animales = ['Perro','Gato'];
console.log(animales);
//De esta forma puede llamar al elemento del array 
console.log(animales[0]);

//esto es para agregar elementos al array 
animales[2] = 'dragon';
console.log(animales);
// se puede agregar un elemeto en cualquier posicion del array, pero la idea es que sea logico en cuanto agregar elementos 
animales[10]  = 'Reineta'
//al agregar de esta manera elemento la longitud o length se convierte en 11
/*  Lo de mas elementos que quedan como no definidos en este caso
7 elemento no quedan defiidos**/

// Los array son objetos se comportan como objetos lo que nos deja interecatuar con ellas 

console.log(typeof animales);
//esto es un metodo el cual permite mostrar la longitud del array
console.log(animales.length)