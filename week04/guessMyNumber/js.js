function findNumber() {
    let lowest = 1;
    let highest = 100;
    let middle = Math.floor((lowest + highest) / 2);
    let answer = window.prompt("Is your number" + "?" + middle + " " + "yes/no");

   
        if (answer == "yes") {
            alert("You Win!!")
        }
        if (answer == "no") {
            answer = window.prompt("Is your number higher than" + " " + middle + "?" + "yes/no");
            if (answer == "yes") {
                lowest == middle;
                middle = (lowest + highest) / 2;
            }
            if (answer == "no") {
                highest == middle;
                middle = (lowest + highest) / 2;
            }
    
        }
    
}
findNumber();