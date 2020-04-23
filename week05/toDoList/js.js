myToDos = ['studyJS', 'walkAround', 'preparetoInterview', 'readBook'];
document.querySelector("#login").addEventListener("click", isInfoCorrect);
document.querySelector("#addMyToDo").addEventListener("click", addToDos);
let username;
let password;

function isInfoCorrect() {
    username = document.querySelector('#username').value;
    password = Number(document.querySelector('#password').value);
    if (username == 'nurullah' && password === 123123) {
        addToDos();
    } else document.querySelector('#toDoContainer').innerHTML = "WRONG PASSWORD !!!";
}
function addToDos() { // if password is false should not show mytodos but i have no more time :(
    username = document.querySelector('#username').value;
    password = Number(document.querySelector('#password').value);
    if (username == 'nurullah' && password === 123123) {
    document.querySelector('#toDoContainer').innerHTML = myToDos;
    let takeToDo = document.querySelector('#takeToDo').value; 
    myToDos.push(takeToDo);
    return document.querySelector('#toDoContainer').innerHTML = myToDos;
    }else document.querySelector('#toDoContainer').innerHTML = "ENTER YOUR USERNAME AND PASSWORD";
}  


