document.querySelector('#addBook').addEventListener('click',createNewBooks);
let array = [
    {
    name : 'revival',
    inventory:'sold',
    price :12
}
];
let name;
let inventory;
let price;

 
document.querySelector('#alreadyHave').innerHTML=`Name : ${array[0].name} <br>
                                            Inventory: ${array[0].inventory} <br>
                                            Price: ${array[0].price}`;


function myObject (name,inventory,price){
    this.name=name;
    this.inventory=inventory;
    this.price=price;
}

function createNewBooks (name,price){
name = document.querySelector('.name').value;
console.log(name);
price = Number(document.querySelector('.price').value);
let product = new myObject(name,inventory,price);
array.push(product);
console.log(array);
stringTemplate=" ";
for(let i=0;i<array.length;i++){
    stringTemplate += ` <li>Name : ${array[i].name}, Price: ${array[i].price}, Inventory : ${array[i].inventory} </li>`;
}return document.querySelector('ul').innerHTML=stringTemplate;

}

