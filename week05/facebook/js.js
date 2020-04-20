let database = [{
        username: 'Nurullah',
        password: 'supersecret'
    },
    {
        username: 'mark',
        password: 'secretive'
    }
];

let newsfeed = [{
        author: 'nurullah',
        title: 'this is nurullah\'s title ',
        summary: 'this is summary of nurullah.'
    },
    {
        author: 'mark',
        title: 'this is Mark\'s title ',
        summary: 'this is summary of mark.'
    }

];

let username = prompt("username?");
let password = prompt("password?");



signIn(username, password);

function signIn(user, pass) {

    if (isUserValid(user, pass)) {
        console.log(newsfeed);
        for (let i = 0; i < newsfeed.length; i++) {
            document.write(newsfeed[i]);
        }
    } else {
        alert("your login not corrected");
    }
}


function isUserValid(usr, ps) {


    for (let i = 0; i < database.length; i++) {
        if (usr === database[i].username && ps === database[i].password) {
            return true;
        } else {
            return false;
        }
    }
}



/** 
   let isUserValid = false;
   isUserValid = database.forEach(function(user){
       
       if(usr === user.username && ps === user.password){
           return true;
       }
   });
  return isUserValid;
  */




/** while loop 
let counter = 0;
while (counter<10) {
    counter++;
    console.log(counter);
    
}
console.log("after while loop")
*/

/** do while 

let counter=0;
do{
    console.log(counter);
    counter--;

}while (counter > 0)
console.log("after while loop")
*/

/** for loop 

for(let counter=10;counter>0;counter--){
    console.log(counter);
}

*/