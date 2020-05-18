/**
 * Ismet is a company and has clients.
 * These clients can also be created with inputs and should be saved in localstorage.
 * Each clients has a order list.
 * If we click on the clientsName it should create orderList on the right side.
 * If we click this an item inside order list this should be finished we should define this by highlighting.
 *
 */
let clientsList = [
  {
    name: "nick",
    information: {
      adress: "Zurichstrasse 21",
      country: "switzerland",
    },
  },
  {
    name: "leo",
    information: {
      adress: "Zurichstrasse 32",
      country: "netherlands",
    },
  },
  {
    name: "fabianne",
    information: {
      adress: "Zurichstrasse 75",
      country: "greece",
    },
  },
  {
    name: "christian",
    information: {
      adress: "Zurichstrasse 84",
      country: "deutschland",
    },
  },
];

localStorage.setItem("newClientsList", JSON.stringify(clientsList));

let ulDomForClientsList = document.querySelector("#myClientsLits");
let ulUpdatedList = document.querySelector("#updatedList");
let cleanerPart = document.querySelector("#cleanIt");
let clientData = JSON.parse(localStorage.getItem("newClientsList"));

class Company {
  constructor() {
    this.clientsList = clientsList;
    this.ulDomForClientsList = ulDomForClientsList;
  }
  createList() {
    let count = 0;
    let str = " ";
    clientData.forEach((client, index) => {
      count += 1;
      str += `<li id="${client.name}" onclick="client.bringClientToRightSide(${index})">${client.name}</li>`;
      this.ulDomForClientsList.innerHTML = str;
    });
  }
  addEventListenerToClearElement() {
    // clienti kaydetmek icin event listener ekler.
    return document
      .querySelector("#addNewCompany")
      .addEventListener("click", this.saveNewCompany); //function(){
  }
  saveNewCompany() {
    const newClientName = document.querySelector("#newClientName").value;
    const newClientAdress = document.querySelector("#newClientAdress").value;
    const newClientCountry = document.querySelector("#newClientAdress").value;

    let newClientsList = [
      ...clientsList,
      {
        name: newClientName,
        information: {
          adress: newClientAdress,
          country: newClientCountry,
        },
      },
    ];

    localStorage.setItem("newClientsList", JSON.stringify(newClientsList));
  }
}

let ismet = new Company();
ismet.createList();
ismet.addEventListenerToClearElement();
let client = new Client();
client.updateList();
