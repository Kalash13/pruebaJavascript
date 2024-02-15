function getbyIdx(arr, indx){
    if(indx < 0 || arr.length <=indx ) {
        return 'Elemento no existe';
    }
        return arr[indx];
}

let resultado = getbyIdx( [1, 2, 3], 1);

console.log(resultado);

