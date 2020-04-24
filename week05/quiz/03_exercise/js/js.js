document.querySelector('.createUser').addEventListener('click',createUser);
document.querySelector('.logIn').addEventListener('click',checkInformation);
let userInformation=[];
let user;
let username;
let password;

function person (username,password){
    this.username=username;
    this.password=password;
}

function  createUser(){

username = document.querySelector('#username').value; 
console.log(username);
password = Number(document.querySelector('#password').value); 
console.log(password);
user = new person(username,password);
console.log(user);
userInformation.push(user);
console.log(userInformation);
}

function checkInformation(){
    
for(let i=0; i<userInformation.length; i++){
   if (userInformation[i].username == document.querySelector('#username').value && userInformation[i].password === Number(document.querySelector('#password').value) ){
        alert("Welcome");
        console.log(userInformation[i].username,document.querySelector('#username').value);
   }else  alert("TRY AGAIN WRONG USERNAME OR PASSWORD");
   console.log(userInformation[i].password,document.querySelector('#password').value);
}
}



