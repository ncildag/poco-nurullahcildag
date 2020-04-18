/**
 * Process;
 * 1.Create random two numbers.
 * 2.Add these numbers web.
 * 3.Begin timeCounter.
 * 4.Calculate multiply result.
 * 5.Take from user result.
 * 6.Stop timeCounter.
 * 7.Compare results.
 * 8.If is correct create new excercise and add point as correct.
 * 9.If is false give a warning try again and add point as false.
 * 10.Each trying add count to count for point.
 */

let firstRandomiseChracter; // burada direk Math.floor seklinde tanimlasam tüm fonk kullanabilir miyim?
let secondRandomiseCharacter;
let startButton = document.querySelector("#startButton");
let checkButton = document.querySelector("#checkButton");

function createRandomiseCharacters() {
  firstRandomiseChracter = Math.floor(Math.random() * 10);
  secondRandomiseCharacter = Math.floor(Math.random() * 10);
}
function addToDom() {
  createRandomiseCharacters();
  document.querySelector(
    "#firstRandomNumber"
  ).innerHTML = firstRandomiseChracter;
  document.querySelector(
    "#secondRandomNumber"
  ).innerHTML = secondRandomiseCharacter;
}
function checkResult() {
  // createRandomiseCharacters();
  firstNumber = Number(document.querySelector("#firstRandomNumber").innerHTML);
  secondNumber = Number(
    document.querySelector("#secondRandomNumber").innerHTML
  );

  let answer = parseInt(document.querySelector("#result").value);
  let correctResult = firstNumber * secondNumber;

  if (answer === correctResult) {
    return (document.querySelector("#output").innerHTML = "CORRECT");
  } else {
    return (document.querySelector("#output").innerHTML = "TRY AGAIN !!");
  }
}

function timer() {
  let count = parseInt(document.getElementById("timeLimit").value);
  setTimeout(function () {
    alert("time is over");
  }, count * 1000);
}

startButton.addEventListener("click", addToDom);
startButton.addEventListener("click",timer);
checkButton.addEventListener("click", checkResult);
