/**
 *  Interaction
 * Mr.Niyazi prepare values for simulation adn start simulation.
 * App produce random animal and send them experts and treatened animal would be discharge
 */

 let database = [];
 let newsfeed = [];


// https://jsonplaceholder.typicode.com/posts newsfeed

const promiseFetchUsers = new Promise((resolve, reject) => {
    //use the fetch API to get and parse json file of fake users
    fetch("https://raw.githubusercontent.com/pixelastic/fakeusers/master/data/final.json")
        .then(response => response.json())
        .then(data => {
            //loop through the users to only store username and password in our array variable
            for (let i = 0; i < data.length; i++) {
                let person = {
                    username: data[i].username,
                    password: data[i].password
                };
                database.push(person);
                console.log(person);
                
            }
            //return our users as success == resolve
            resolve(database);
            
        });
});
Promise.all()
    .then((values) => {
        database = values[0];
        console.log(values[0]);

        //add event listener for submit event of the form and call signIn function
       
    });


