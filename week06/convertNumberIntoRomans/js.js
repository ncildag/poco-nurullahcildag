let numbers = {
    0:'O',
    1:'I',
    2:'II',
    3:'III',
    4:'IV',
    5:'V',
    6:'VI',
    7:'VII',
    8:'VIII',
    9:'IX',
};
let numbersTwo = {
    1 : 'X',
    2 : 'XX',
    3 : 'XXX',
    4 : 'XL',
    5 : 'L',
    6 : 'LX',
    7 : 'LXX',
    8 : 'LXXX',
    9 : 'XC'
}
let numbersThree = {
    1 : 'C',
    2 : 'CC',
    3 : 'CCC',
    4 : 'CD',
    5 : 'D',
    6 : 'DC',
    7 : 'DCC',
    8 : 'DCCC',
    9 : 'CM'
}

function convertRomens(a){
    let number = Number(a); //2
    let numberArray = a.split(''); // '2','3'
    let firstDigits = Number(numberArray[0]);
    let secondDigits = Number(numberArray[1]);
    let thirdDigits = Number(numberArray[2]);
    

    if (a.length == 1){   
        return numbers[number];
    }
    if(a.length == 2 ){
        return `${numbersTwo[firstDigits]}${numbers[secondDigits]}`;
    }  
    if(a.length == 3){
        return `${numbersThree[firstDigits]}${numbersTwo[secondDigits]}${numbers[thirdDigits]}`;
    }
}
console.log(convertRomens('233'));




