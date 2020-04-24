let myArray =['nurullah','susanne','mark','andrina'];


function getFirstValue(array){
    array=myArray;
    console.log(array);
    let getLastElement = array[array.length-1];
    let arrayGetLastElement = Array.from(getLastElement);
    console.log(arrayGetLastElement);
    let sortedGetLastElement = arrayGetLastElement.sort();
    console.log(sortedGetLastElement);
    return console.log(sortedGetLastElement.join(""));

}

getFirstValue();