//short circuit

//Estos valores se conocen como falsys
//Falso
//false
//0
//''
//null
//undefined
//NaN

let nombre ='Felipe';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();

console.log(x)