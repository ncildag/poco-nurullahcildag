
let input = ['1','4','6','3','2'];

function weekNumberstoWords(a){
   let dayNumber = a;
    switch (dayNumber) {
    
        case 1:
          day = console.log("Monday");
          break;
        case 2:
          day = console.log("Tuesday");
          break;
        case 3:
          day = console.log("Wednesday");
          break;
        case 4:
          day = console.log("Thursday");
          break;
        case 5:
          day = console.log("Friday");
          break;
        case  6:
          day = console.log("Saturday");
          break;
          case 7:
          day = console.log("Sunday");
      }
}
function bringDays(){
    weekNumberstoWords();
    let newArray = [];
    for(let i=0;i<input.length;i++){
        let template = "";
        template = weekNumberstoWords(Number(input[i]));
        newArray.push(template);
    }return newArray;
    
}


console.log(bringDays());

