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
  document.getElementById('start-page-world').classList.add("hide-display");
  document.getElementById('start-page-europe').classList.add("hide-display");
  document.getElementById('start-page-asia').classList.add("hide-display");
  document.getElementById('start-page-africa').classList.add("hide-display");
  document.getElementById('start-page-americas').classList.add("hide-display");
  document.getElementById('start-page-oceania').classList.add("hide-display");
  document.getElementById('center-part-title').classList.add("hide-display");
  document.getElementById('quiz-questions').classList.remove("hide-display");
  document.getElementById('quiz-image').classList.remove("hide-display");
  document.getElementById('quiz-nav').classList.remove("hide-display");
  document.getElementById('quiz-answers').classList.remove("hide-display");
  document.getElementById('result-step-score').classList.remove("hide-display");
}

let reload = () => {
  document.getElementById('start-page-world').classList.remove("hide-display");
  document.getElementById('start-page-europe').classList.remove("hide-display");
  document.getElementById('start-page-asia').classList.remove("hide-display");
  document.getElementById('start-page-africa').classList.remove("hide-display");
  document.getElementById('start-page-americas').classList.remove("hide-display");
  document.getElementById('start-page-oceania').classList.remove("hide-display");
  document.getElementById('center-part-title').classList.remove("hide-display");
  document.getElementById('main').classList.remove("hide-display");
  document.getElementById('feedback-page').classList.add("hide-display");
  document.getElementById('quiz-questions').classList.add("hide-display");
  document.getElementById('quiz-image').classList.add("hide-display");
  document.getElementById('quiz-nav').classList.add("hide-display");
  document.getElementById('quiz-answers').classList.add("hide-display");
  document.getElementById('result-step-score').classList.add("hide-display");
}

//generate and print right or wrong question
let questionsMain = () => {
  randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  randomNumberMain == 1 ? questionsRight() : questionsWrong();
  console.log(randomNumberMain);
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
    document.getElementById('result-message').classList.add("class", "greenBorder");
    document.getElementById("result-message").innerHTML = "You are right";
  } else if (color == "red") {
    document.getElementById(id).setAttribute("class", "redBorder");
    document.getElementById('result-message').classList.add("class", "redBorder");
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
  document.getElementById('feedback-page').classList.remove("hide-display");
  }
}

let tryAgain = () => {
  resetPoints();
  document.location.reload();
}

let nextGame = () => {
  addPoints();
  reload();
  //document.location.reload();
  setDisabledThisGame();
}

let setDisabledThisGame = () => {
  if(countries_list == COUNTRIES_EUROPE) {
    document.getElementById("europe").disabled = true;
  } else if (countries_list == COUNTRIES_ASIA) {
    //start("Asia");
  } else if (countries_list == COUNTRIES_AFRICA) {
    //start("Africa");
  } else if (countries_list == COUNTRIES_AMERICAS) {
    //start("Americas");
  } else if (countries_list == COUNTRIES_OCEANIA) {
    //start("Oceania");
  } else {
    //start("World");
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
  document.getElementById('right').classList.remove("hide-display");
  document.getElementById('wrong').classList.remove("hide-display");
  document.getElementById('result-message').classList.remove("hide-display");
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
