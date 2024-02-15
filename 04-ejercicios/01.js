//Queremos realizar una funcion que tenga a y b como parametro y devuelva el numero mayor


//Esta es una forma 
// function cualEsMayor(a,b){
//     if(a > b){
//         return a;
//     } else{
//         return b;
//     }
// }

//Esta es otra con operador ternario
function cualEsMayor(a,b){
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(10,15);

console.log(mayor);