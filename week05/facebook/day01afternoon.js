function iterate (){
    let array = [];
    for (var i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            array.push(i + ' is even');
        } else {
            array.push(i + ' is odd');
        }
    }
    return array;
   

}

console.log(iterate());

/** 
function yeniIterate() {
let emptyArray=[];

    for(let i=0;i<21;i++){
        emptyArray.push(i);
    }
    return emptyArray;
}

console.log(yeniIterate());
*/

for(let i=0;i<11;i++){
    console.log(i*9);
}