"use strict"

// variables for question number and score
let questionNumber = 0;
let score = 0;
let randomNumberMain;
let randomNumber;
let randomNumberExcluded;
let countries_list;

//function for hide first card and show question cards
let hideAndShow = () => {
  document.getElementById('mainCards').classList.add("hide-display");
  document.getElementById('quizResults').classList.remove("hide-display");
  document.getElementById('result-message').classList.add("hide-display");
}

//generate and print right or wrong question
let questionsMain = () => {
  randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  randomNumberMain == 1 ? questionsRight() : questionsWrong();
}

//print Wrong question
let questionsWrong = () => document.getElementById("quiz-questions").innerHTML = "The capital city of " + countries_list[randomNumber].name + " is " + countries_list[randomNumberExcluded].capital;

//print Right question
let questionsRight = () => document.getElementById("quiz-questions").innerHTML = "The capital city of " + countries_list[randomNumber].name + " is " + countries_list[randomNumber].capital;

//print Right answer
let addRightAnswer = () => document.getElementById("result-message").innerHTML = "Right answer: " + countries_list[randomNumber].capital + " is the capital of " + countries_list[randomNumber].name;

let getFocus = () => document.getElementById("btn-next").focus();

//generate CSS for right or wrong answer
let setNewCSS = (id, color) => {
  if (color == "green") {
    document.getElementById(id).setAttribute("class", "greenBorder");
    document.getElementById('result-message').setAttribute("class", "greenBorder");
    document.getElementById("result-message").innerHTML = "You are right";
  } else if (color == "red") {
    document.getElementById(id).setAttribute("class", "redBorder");
    document.getElementById('result-message').setAttribute("class", "redBorder");
    document.getElementById("result-message").innerHTML = "Sorry, but the question was right";
  }
}

//change element from disabled to abled and vice versa
let changeDisabled = () => {
  document.getElementById('btn-next').disabled = !document.getElementById('btn-next').disabled;
  document.getElementById('wrong').disabled = !document.getElementById('wrong').disabled;
  document.getElementById('right').disabled = !document.getElementById('right').disabled;
}

let testRight = () => {
  randomNumberMain == 1 ? (setNewCSS("right", "green"), score += 1, result()) : (setNewCSS("right", "red"), addRightAnswer());
  changeDisabled();
  getFocus();
}

let testWrong = () => {
  randomNumberMain == 1 ? (setNewCSS("wrong", "red")) : (setNewCSS("wrong", "green"), addRightAnswer(), score += 1, result());
  changeDisabled();
  getFocus();
}

//print score and question number
let result = () => {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /20";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /20";
}

let finalResult = () => {
  let text;
  if (questionNumber == 20) {
    switch(true) {
      case (score == 20):
        text = "You win the game with " + score + " points";
        break;
      case (score < 20 && score > 16):
        text = "You win the game with " + score + " points";
        break;
      case (score < 17 && score > 13):
        text = "You win the game with " + score + " points";
        break;
      case (score < 14 && score > 10):
        text = "You win the game with " + score + " points";
        break;
      case (score < 11 && score > 7):
          text = "You win the game with " + score + " points";
          break;
      default:
      text = "You lost the game and got only " + score + " points";
}
  document.getElementById("final-score").innerHTML = text;
  document.getElementById('main').classList.add("hide-display");
  document.getElementById('feedback-page').removeAttribute("class");
  }
}

let tryAgain = () => {
  resetPoints();
  db.loadDatabase({}, function () {
  info = db.getCollection('Info');
  for (var i = 0; i < info.data.length; i++) {
    info.data[i].disabled = "";
    info.update(info.data[i]);
  }
  db.saveDatabase();
  })
  document.location.reload();
}

let nextGame = () => {
  addPoints();
  document.getElementById('point').innerHTML = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints;
  setDisabledThisGame();
  document.location.reload();
}

let setDisabledThisGame = () => {
  if (countries_list == COUNTRIES_ASIA) {
    addDisabledCapital1("asia");
  } else if (countries_list == COUNTRIES_EUROPE) {
    addDisabledCapital1("europe");
  } else if (countries_list == COUNTRIES_AFRICA) {
    addDisabledCapital1("africa");
  } else if (countries_list == COUNTRIES_AMERICAS) {
    addDisabledCapital1("americas");
  } else if (countries_list == COUNTRIES_OCEANIA) {
    addDisabledCapital1("oceania");
  } else {
    addDisabledCapital1("world");
  }
}

let checkDisabledInLoad = () => {
  for (var i = 0; i < info.data.length; i++) {
    console.log("len " + info.data.length);
    console.log("len2 " + info.data[i].disabledAsiaCapital1);
    switch(true) {
      case (info.data[i].disabledAsiaCapital1 == "asia"):
      document.getElementById("asia").setAttribute("disabled", "disabled");
      break;
      case (info.data[i].disabledEuropeCapital1 == "europe"):
      document.getElementById("europe").setAttribute("disabled", "disabled");
      break;
      case (info.data[i].disabledAfricaCapital1 == "africa"):
      document.getElementById("africa").setAttribute("disabled", "disabled");
      break;
      case (info.data[i].disabledAmericasCapital1 == "americas"):
      document.getElementById("americas").setAttribute("disabled", "disabled");
      break;
      case (info.data[i].disabledOceaniaCapital1 == "oceania"):
      document.getElementById("oceania").setAttribute("disabled", "disabled");
      break;
      case (info.data[i].disabledWorldCapital1 == "world"):
      document.getElementById("world").setAttribute("disabled", "disabled");
      break;
    }
  }
}

//generateRandum numbers for question
let setRandomNumbers = (continent) => {
  if(continent == "Asia") {
    countries_list = COUNTRIES_ASIA;
  } else if (continent == "Europe") {
    countries_list = COUNTRIES_EUROPE;
  } else if (continent == "Africa") {
    countries_list = COUNTRIES_AFRICA;
  } else if (continent == "Americas") {
    countries_list = COUNTRIES_AMERICAS;
  } else if (continent == "Oceania") {
    countries_list = COUNTRIES_OCEANIA;
  } else {
    countries_list = COUNTRIES;
  }
  randomNumber = Math.floor(Math.random() * countries_list.length-1) + 1;
  randomNumberExcluded = randomExcluded(0, countries_list.length-1, randomNumber);
}

//generate randum number Excluded question number
let randomExcluded = (min, max, excluded) => {
  let n = Math.floor(Math.random() * (max-min) + min);
  if (n >= excluded) n++;
  return n;
}

//list of functions/action for next button
let next = () => {
  questionNumber += 1;
  document.getElementById('right').removeAttribute("class");
  document.getElementById('wrong').removeAttribute("class");
  document.getElementById('result-message').removeAttribute("class");
  document.getElementById('result-message').classList.add("hide-display");
  changeDisabled();
  chooseContinent();
}

let chooseContinent = () => {
  if(countries_list == COUNTRIES_EUROPE) {
    start("Europe");
  } else if (countries_list == COUNTRIES_ASIA) {
    start("Asia");
  } else if (countries_list == COUNTRIES_AFRICA) {
    start("Africa");
  } else if (countries_list == COUNTRIES_AMERICAS) {
    start("Americas");
  } else if (countries_list == COUNTRIES_OCEANIA) {
    start("Oceania");
  } else {
    start("World");
  }
}

// evropa 47  // asia 49  // africa 59  // americas 56 (28)  // oceania 27

let start = (continent) => {
  setRandomNumbers(continent);
  startAll();
}

let startAll = () => {
  hideAndShow();
  questionsMain();
  result();
  finalResult();
}
