function howOldAmI() {

    let myBirthDate = parseInt(document.querySelector('#days').value);
    let myBirthMonth = parseInt(document.querySelector('#months').value);
    let myBirthYear = parseInt(document.querySelector('#year').value);

    let currentDate = 14;
    let currentMonth = 05;
    let currentYear = 2020;

    let oldYear = ((currentYear - myBirthYear) - 1) * 365; //calculate whole years => convert day
    let addDays = (30 - myBirthDate) + currentDate; // calculate days
    let addMonths = ((12 - myBirthMonth) + (currentMonth - 1)) * 30; // calculate moths
    let totalDays = oldYear + addDays + addMonths;
    let extraDays = totalDays / (365 * 4); // for each 4 years calculate 1 day.
    let currentAge = (totalDays + extraDays) / 365;
    return document.querySelector('#output').innerHTML = "You are"+ " "+Math.floor(currentAge)+" "+"years old." // round your age
}