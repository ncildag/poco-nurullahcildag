/** 
let left = document.querySelector('#firstColor');
let right = document.querySelector('#secondColor');
left.addEventListener('change',createBackground);
right.addEventListener('change',createBackground);

function createBackground (){
    let a = document.querySelector('#firstColor').value;
    let b = document.querySelector('#secondColor').value;
    console.log('--left--',a);
    return document.querySelector("body").style.backgroundImage = `linear-gradient(to right,${a},${b})`;
}
*/

/**
document.querySelector('#button').addEventListener('click',createBackground);

function createBackground (){ // if you have a button
    let left = document.querySelector('#firstColor').value;
    let right = document.querySelector('#secondColor').value;
    console.log(left);

    document.querySelector("body").style.backgroundImage = `linear-gradient(to right,${left},${right})`;
}
 */
let left = document.querySelector('#firstColor');
let right = document.querySelector('#secondColor');
left.addEventListener('change',createBackground);
right.addEventListener('change',createBackground);

function createBackground(){
    return document.body.style.background = "linear-gradient(to right,"+left.value+","+right.value+")";
}
