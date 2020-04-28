var firstDNA = "GAGCCTACTAACGGGAT";
var secondDNA = "CATCGTAATGACGGCCT";
/** 
function checkDNA(a, b) {
    let firstDNAString = (a.toLowerCase()).split("");
    let secondDNAString = (b.toLowerCase()).split("");

    if (firstDNAString.length === secondDNAString.length) {
        let template = "";
        for (let i = 0; i < firstDNAString.length; i++) {
            if (firstDNAString[i] !== secondDNAString[i]) {
                let message = ` "first DNA"+ " "+ ${[i+1]} +".th letter is"+ ${firstDNAString[i]} + "secondDNA"+ " "+ ${[i+1]} + ".th letter is" + ${secondDNAString[i]}`;
                template += message;
            }
        }return template;
    } else return false;
}
console.log(checkDNA(firstDNA, secondDNA));
*/

function HammingDistance (arg1,arg2){
    if(arg1.length===arg2.length){ 
     let result=0;
    for(let i=0;i<arg1.length;i++){
        if(arg1[i] !== arg2[i]){
            result ++;
        }
    }return result;
}return false;
}
console.log(HammingDistance(firstDNA,secondDNA));