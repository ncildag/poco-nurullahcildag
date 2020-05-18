class Client {
  constructor() {
    this.clientsList = clientsList;
    this.cleanerPart = cleanerPart;
  }

  bringClientToRightSide(index) {
    document.querySelector("#cleanIt").innerHTML = null;

    console.log("---------------index", index);

    let newClientsList = JSON.parse(localStorage.getItem("newClientsList"));

    let clientName = document.createElement("li");
    let clientAddress = document.createElement("li");
    let clientCountry = document.createElement("li");
    let clean = document.createElement("button");
    document.querySelector("#cleanIt").appendChild(clientName);
    document.querySelector("#cleanIt").appendChild(clientAddress);
    document.querySelector("#cleanIt").appendChild(clientCountry);
    document.querySelector("#cleanIt").appendChild(clean);

    clean.addEventListener("click", () => {
      newClientsList.forEach((client, index) => {
        const selectedClientName = document.querySelector("#client-name").innerText;

        if(selectedClientName === client.name) {
          newClientsList.splice(index, 1);
          localStorage.setItem("newClientsList", JSON.stringify(newClientsList));
          document.querySelector("#cleanIt").innerHTML = null;
        }
      })
    });

    newClientsList.forEach((client, i) => {
      if (i === index) {
        clientName.innerHTML = `<span>Name:</span> <span id="client-name">${client.name}</span>`;
        clientAddress.innerText = `Address: ${client.information.adress}`;
        clientCountry.innerText = `Country: ${client.information.country}`;
        clean.innerText = `Clean`;
      }
    });
  }

  updateList(clientsNameParamether) {
    let tmp = " ";
    for (let i = 0; i < storageName.length; i++) {
      if (storageName[i].name == clientsNameParamether) {
        storageName[i].name += tmp;
        return (ulUpdatedList.innerHTML = `<li>${tmp}</li>`);
      }
    }
  }
}
