let array = [
    ['A','B','C'],
    ['D','E',]
];
let copy =[];



function transpose(a){
    for(let i=0;i<a.length;++i){
        for(let j=0;j<a[i].length;++j){

        if(a[i][j]===undefined) continue;

        if(copy[j]===undefined) copy[j]=[];

        copy[j][i]=a[i][j];
        }
    }return copy;
}
console.log(transpose(array));

/**
 * function transposeMatrix(a){
    let newArray = [];
    
    for (let i=0;i<a[0].length;i++){ // create array as many as the first number of the array.
        newArray.push([]);
    }
    for(let i=0;i<a.length;i++){ // first elements to first element inside new array.
        for(let j=0;j<=a.length;j++){
            newArray[j].push(a[i][j]); // first j=0 1.line at newarray a0 j0 second a1 j0 
        }
    }
return newArray;
}
console.log(transposeMatrix(array));
 */