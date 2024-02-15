// let array = [2, 5, 7, 15, -5, -100, 55];


// function getMenorMayor(array){
//     for( let element of array)
//         return element;

// }

// let numeros = getMenorMayor(array);
// console.log(numeros);


let array = [2, 5, 7, 15, -5, -100, 55];

// function getMenorMayor(arr){
//     let menor = arr [0];
//     let mayor = arr [0];
//     for(let numero of arr){
//         menor = menor < numero ? menor : numero;
//         mayor = mayor > numero ? mayor : numero;
//     }
//     return[menor, mayor];
      
// }

// let numeros = getMenorMayor(array)

// console.log(numeros)

//Algo que decir es que esta ultima manera no es la mejor y de hecho siempre mejor la primera 

function getMenorMayor(array){
    array.sort((a,b)=> a-b);
    let menor = array[0];
    let mayor = array[6];
        return [menor, mayor]
}
let numeros = getMenorMayor(array)
console.log(numeros); 