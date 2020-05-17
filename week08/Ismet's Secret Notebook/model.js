/**
 * Ismet is a company and has clients.
 * These clients can also be created with inputs and should be saved in localstorage.
 * Each clients has a order list.
 * If we click on the clientsName it should create orderList on the right side.
 * If we click this an item inside order list this should be finished we should define this by highlighting.
 *
 */
let clientsList = [{
        name: 'nick',
        information: {
            adress: 'Zurichstrasse 21',
            country: 'switzerland'
        }
    },
    {
        name: 'leo',
        information: {
            adress: 'Zurichstrasse 32',
            country: 'netherlands'
        }
    },
    {
        name: 'fabianne',
        information: {
            adress: 'Zurichstrasse 75',
            country: 'greece'
        }
    },
    {
        name: 'christian',
        information: {
            adress: 'Zurichstrasse 84',
            country: 'deutschland'
        }
    }
];

let ulDomForClientsList = document.querySelector('#myClientsLits');
let cleanerPart = document.querySelector('#cleanIt');



class Company {
    constructor() {
        this.clientsList = clientsList;
        this.ulDomForClientsList = ulDomForClientsList;
    }
    createList() {
        let count = 0;
        let str = " ";
        clientsList.forEach(data => {
            count += 1;
            str += `<li id="${data.name}" onclick="client.bringClientToRightSide(${data.name})">${data.name}</li>`;
            this.ulDomForClientsList.innerHTML = str;
        });
    }
    addEventListenerToClearElement(){
        // clienti kaydetmek icin event listener ekler.
        return document.querySelector('#addNewCompany').addEventListener('click', this.saveNewCompany);//function(){
    }
    saveNewCompany(){
        const newClientName = document.querySelector('#newClientName').value;
        const newClientAdress = document.querySelector('#newClientAdress').value;
        const newClientCountry = document.querySelector('#newClientAdress').value;
        console.log(newClientName);

        return localStorage.setItem('newClientsList', JSON.stringify({
            ...clientsList,
            name: newClientName,
            information: {
            adress: newClientAdress,
            country: newClientCountry
        }}));
    }
}

let ismet = new Company();
ismet.createList();
ismet.addEventListenerToClearElement();
let client = new Client();
//client.addEventListenerToBringElement();

