/
let elm = document.getElementById("myDiv");
let arr = elm.childNodes;
arr.forEach(function(el){
el.textContent = "new text";
});

let arr1 = document.querySelectorAll("#myDivSecond > *");
arr1.forEach(function(el){
el.textContent = "new query text";
});

let span = document.createElement("span");
let node = document.createTextNode("Some new text");
let parent = document.querySelector('#myNewP');

span.appendChild(node);
parent.appendChild(span);

node.appendChild("hallloooo");




