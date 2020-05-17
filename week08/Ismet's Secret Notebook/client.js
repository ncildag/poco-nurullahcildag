class Client{
    constructor(){
        this.clientsList=clientsList;
        this.cleanerPart=cleanerPart;
    }
    bringClientToRightSide(a){
        let storageName = JSON.parse(localStorage.getItem('newClientsList')) ;
       
        console.log(storageName);
        console.log(storageName);
        storageName.forEach( k => {
            if (k == nick) {
                return this.cleanerPart.innerHTML = `<li>Name : ${element} </li>
                                                        <li>Adress : ${clientsList[0].information.adress}</li>
                                                        <li>Country : ${clientsList[0].information.country}</li>
                                                        <button>Clean It</button>`; 
            }});
    }
    updateList(){
       
    }

}


