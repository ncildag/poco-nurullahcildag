let arabicRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function arabicToRoman(num){
    let romanized = "";
    for (var roman in arabicRoman){
        while(num >= arabicRoman[roman]){
            romanized += roman;
            num -= arabicRoman[roman];
        }
    }
    return romanized;
}

document.write(arabicToRoman(1907));


// ================Different Syntax - 1============================

// arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

// function arabicToRoman(num){
//     let romanized = "";
//     for(let i = 0; i < arabic.length; i++){
//         while(num >= arabic[i]){
//             romanized += roman[i];
//             num -= arabic[i];
//         }
//     }
//     return romanized;
// }

// document.write(arabicToRoman(1907));



// ================Different Syntax - 2============================

// let arabicRoman = [
//     {1000: "M"}, {900: "CM"}, {500: "D"}, {400: "CD"}, {100: "C"}, {90: "XC"},
//     {50: "L"}, {40: "XL"}, {10: "X"}, {9: "IX"}, {5: "V"}, {4: "IV"}, {1: "I"},
// ];

// function arabicToRoman(num){
//     let romanized = "";
//     for(let i = 0; i < arabicRoman.length; i++){
//         while(num >= Object.keys(arabicRoman[i])){
//             romanized += Object.values(arabicRoman[i]);
//             num -= Object.keys(arabicRoman[i]);
//         }
//     }
//     return romanized;
// }

// document.write(arabicToRoman(1907));

/** 
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
let numbersFour = {
    1 : 'M',
    2 : 'MM',
    3 : 'MMM',
    4 : 'MV',
    5 : 'V',
    6 : 'VI',
    7 : 'VII',
    8 : 'VIII',
    9 : 'IX'
}

function convertRomens(a){
    let number = Number(a); //2
    let numberArray = a.split(''); // '2','3'
    let firstDigits = Number(numberArray[0]);
    let secondDigits = Number(numberArray[1]);
    let thirdDigits = Number(numberArray[2]);
    let fourthDigits = Number(numberArray[3]);
    

    if (a.length == 1){   
        return numbers[number];
    }
    if(a.length == 2 ){
        return `${numbersTwo[firstDigits]}${numbers[secondDigits]}`;
    }  
    if(a.length == 3){
        return `${numbersThree[firstDigits]}${numbersTwo[secondDigits]}${numbers[thirdDigits]}`;
    }
    if(a.length == 4){
        return `${numbersFour[firstDigits]}${numbersThree[secondDigits]}${numbersTwo[thirdDigits]}${numbers[fourthDigits]}`;
    }
}
console.log(convertRomens('232'));


*/

