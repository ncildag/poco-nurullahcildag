class TimeTable {
  firstRandomiseChracter; // burada direk Math.floor seklinde tanimlasam tüm fonk kullanabilir miyim?
  secondRandomiseCharacter;
  startButton = document.querySelector("#startButton");
  checkButton = document.querySelector("#checkButton");
  firstNumber;
  secondNumber;

  createRandomiseCharacters() {
    this.firstRandomiseChracter = Math.floor(Math.random() * 10);
    this.secondRandomiseCharacter = Math.floor(Math.random() * 10);
  }
  addToDom() {
    this.createRandomiseCharacters();
    document.querySelector(
      "#firstRandomNumber"
    ).innerHTML = this.firstRandomiseChracter;
    document.querySelector(
      "#secondRandomNumber"
    ).innerHTML = this.secondRandomiseCharacter;
  }
  checkResult() {
    // createRandomiseCharacters();
    this.firstNumber = Number(
      document.querySelector("#firstRandomNumber").innerHTML
    );
    this.secondNumber = Number(
      document.querySelector("#secondRandomNumber").innerHTML
    );

    let answer = parseInt(document.querySelector("#result").value);
    let correctResult = this.firstNumber * this.secondNumber;

    if (answer === correctResult) {
      return (document.querySelector("#output").innerHTML = "CORRECT");
    } else {
      return (document.querySelector("#output").innerHTML = "TRY AGAIN !!");
    }
  }

  timer() {
    let count = parseInt(document.getElementById("timeLimit").value);
    setTimeout(function () {
      alert("time is over");
    }, count * 1000);
  }

  start() {
    this.addToDom();
    this.timer();
  }

  x = 42;
  getX () {
    return this.x;
  };
}

let timeTable = new TimeTable();