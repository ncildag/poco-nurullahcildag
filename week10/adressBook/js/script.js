/**
 * 1. use add event listener for button and trigger the function
 * 2. create a function to take information and to save them in the localstorage.
 *      addeventlistener to Submit button
 *      create function
 *      empty array
 *      take information and push into array
 *      save this array in localstorage
 *      if user press one more times submit update localstorage
 * 3. create a new function to print on the website.
 * 4. write them in number list and as include firstname and lastname.
 */

let contacts = []; // keep inside this array our datas.
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let adress = document.querySelector("#adress");
let city = document.querySelector("#city");
let zipCode = document.querySelector("#zipCode");
let data = JSON.parse(localStorage.getItem("adressbook")); // define data from localstorage

class adressBook {
  constructor() {}

  button = document.querySelector("#button"); // Button is defined for SubmitButton.
  addEventListenerToButton() {
    // This function will trigger to application.
    this.button.addEventListener("click", this.saveInformation.bind(this));
    this.button.addEventListener("click", this.clearDom.bind(this));
    this.button.addEventListener("click", this.showContactsOnWebSite.bind(this));
  }
  saveInformation(event) {
    event.preventDefault(); // this method will prevent renewing of page for each click.
    if (firstName.value == "" || lastName.value == "") {
      alert("Please give us at least firstname and lastname!");
    } else {

      const person = {
        name: firstName.value,
        information: {
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
          adress: adress.value,
          city: city.value,
          zipCode: zipCode.value,
        },
      };
      contacts.push(person);
      localStorage.setItem("adressbook", JSON.stringify(contacts));
      this.showContactsOnWebSite();
    }
  }

  clearDom() {
    // This function will clear the input buttons after click event.
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    adress.value = "";
    city.value = "";
    zipCode.value = "";
  }

  showContactsOnWebSite() {
    data = JSON.parse(localStorage.getItem("adressbook"));
    let template = " ";
    data?.forEach((element, index) => {
      let info = `<li id="${index}">${element.name} ${
        element.information.lastName
      } <span><button onclick="start.deleteContactFromLocalStorage(${index})">Delete</button></span></li>`;
      template += info;
    });
    document.querySelector("#printArea").innerHTML = template;
  }
  addEventListenerToContact() {
    document
      .getElementById("printArea")
      .addEventListener("click", function (e) {
        // e.target is our targetted element.
        // try doing console.log(e.target.nodeName), it will result LI
        if (e.target && e.target.nodeName == "LI") {
          document.querySelector("#contactDetail").innerHTML = `
                <li>Name :${data[e.target.id].name}</li>
                <li>Lastname :${data[e.target.id].information.lastName}</li>
                <li>E-Mail:${data[e.target.id].information.email}</li>
                <li>Phone :${data[e.target.id].information.phone}</li>
                <li>Adress :${data[e.target.id].information.adress}</li>
                <li>City :${data[e.target.id].information.city}</li>
                <li>Zip Code :${data[e.target.id].information.zipCode}</li>
                `;
        }
      });
  }

  deleteContactFromLocalStorage(index) {
    event.preventDefault();
    data = JSON.parse(localStorage.getItem("adressbook"));
    data.splice(index, 1);
    localStorage.setItem("adressbook", JSON.stringify(data));
    this.showContactsOnWebSite();
  }
}

let start = new adressBook();
start.addEventListenerToButton();
start.addEventListenerToContact();
start.showContactsOnWebSite();
