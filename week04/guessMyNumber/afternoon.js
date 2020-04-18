/** 
var numbersOfChildren = Number(window.prompt('Numbers of Children ?'));
var partnersName = window.prompt('Partner Name ?');
var city = window.prompt('Location');
var jobTitle = window.prompt('job title ?')
var firstPerson = new person(numbersOfChildren, partnersName, location, jobTitle);
var secondPerson = new person(numbersOfChildren, partnersName, location, jobTitle);
var third = new person(numbersOfChildren, partnersName, location, jobTitle);
console.log(firstPerson);
*/

function person(numbersOfChildren, partnersName, city, jobTitle) {
    this.numbersOfChildren = numbersOfChildren;
    this.partnersName = partnersName;
    this.city = city;
    this.jobTitle = jobTitle;
} // an another way..

function createArray() {

    var person = {
        numbersOfChildren: Number(window.prompt('Numbers of Children ?')),
        partnersName: window.prompt('Partner Name ?'),
        city: window.prompt('Location'),
        jobTitle: window.prompt('job title ?')
    }

    let array = [];
    array.push(person);
    return array;
}

function tellFortune() {
    const data = createArray();
    let myOutput = document.querySelector('#output').innerHTML = "You will be" + " " + data[0].jobTitle + " "+ "and married with" + " " + data[0].partnersName + " " + "with" + " " + data[0].numbersOfChildren + " " + "child in" + " " + data[0].city;
    return myOutput;
}
tellFortune();
tellFortune();
tellFortune();

