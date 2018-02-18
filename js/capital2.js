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
  document.getElementById('start-page-world').setAttribute("class", "hide-display");
  document.getElementById('start-page-europe').setAttribute("class", "hide-display");
  document.getElementById('start-page-asia').setAttribute("class", "hide-display");
  document.getElementById('start-page-africa').setAttribute("class", "hide-display");
  document.getElementById('start-page-americas').setAttribute("class", "hide-display");
  document.getElementById('start-page-oceania').setAttribute("class", "hide-display");
  document.getElementById('center-part-title').setAttribute("class", "hide-display");
  document.getElementById('quiz-questions').removeAttribute("class");
  document.getElementById('quiz-image').removeAttribute("class");
  document.getElementById('quiz-nav').removeAttribute("class");
  document.getElementById('quiz-answers').removeAttribute("class");
  document.getElementById('result-step-score').removeAttribute("class");
}

//generate and print right or wrong question
let questionsMain = () => {
  randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  randomNumberMain == 1 ? question() : question();
  rightAnswer();
  wrongAnswer1();
  wrongAnswer2();
  wrongAnswer3();
  //setRandomNumbersBetween1_4();
}

//print question
let question = () => document.getElementById("quiz-questions").innerHTML = "Which is the capital of " + countries_list[randomNumber].name;

//print  1 right and 3 wrong answers
let rightAnswer = () => document.getElementById("answer1").innerHTML = countries_list[randomNumber].capital;
let wrongAnswer1 = () => document.getElementById("answer2").innerHTML = countries_list[randomNumberExcluded].capital;
let wrongAnswer2 = () => document.getElementById("answer3").innerHTML = countries_list[randomNumberExcluded].capital;
let wrongAnswer3 = () => document.getElementById("answer4").innerHTML = countries_list[randomNumberExcluded].capital;

var randomNumberBetween1_4;
var randomNumberExcluded1;
var randomNumberExcluded2;
var randomNumberExcluded3;

randomNumberBetween1_4 = Math.floor(Math.random() * 4) + 1;
console.log("1-4 " + randomNumberBetween1_4);

function generateRandom1(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberBetween1_4) ? generateRandom1(min, max) : num;
}

randomNumberExcluded1 = generateRandom1(1, 4);
console.log("-1 " + randomNumberExcluded1);

function generateRandom2(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberBetween1_4 || num === randomNumberExcluded1) ? generateRandom2(min, max) : num;
}

randomNumberExcluded2 = generateRandom2(1, 4);
console.log("-2 " + randomNumberExcluded2);

function generateRandom3(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberBetween1_4 || num === randomNumberExcluded1 || num === randomNumberExcluded2) ? generateRandom3(min, max) : num;
}
randomNumberExcluded3 = generateRandom3(1, 4);
console.log("-3 " + randomNumberExcluded3);


let test1 = () => {
  if (document.getElementById("answer1").innerHTML == countries_list[randomNumber].capital) {
    console.log("ok");
    setNewCSS("answer1", "green");
    score += 1;
    result();
    changeDisabled();
    getFocus();
  } else {
    console.log("no ");
    setNewCSS("answer1", "red");
    addRightAnswer();
  }
}

let test2 = () => {
  if (document.getElementById("answer2").innerHTML == countries_list[randomNumber].capital) {
    console.log("ok");
    setNewCSS("answer2", "green");
    score += 1;
    result();
    changeDisabled();
    getFocus();
  } else {
    console.log("no ");
    setNewCSS("answer2", "red");
    addRightAnswer();
  }
}

//print Right answer
let addRightAnswer = () => document.getElementById("result-message").innerHTML = "Right answer: " + countries_list[randomNumber].capital + " is the capital of " + countries_list[randomNumber].name;

//list of functions/action for next button
let next = () => {
  questionNumber += 1;
  document.getElementById('answer1').removeAttribute("class");
  document.getElementById('answer2').removeAttribute("class");
  document.getElementById('result-message').removeAttribute("class");
  document.getElementById('result-message').setAttribute("class", "hide-display");
  changeDisabled();
  chooseContinent();
}

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
  document.getElementById('answer1').disabled = !document.getElementById('answer1').disabled;
  document.getElementById('answer2').disabled = !document.getElementById('answer2').disabled;
}

//print score and question number
let result = () => {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /10";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /10";
}

let finalResult = () => {
  if (questionNumber == 5) {
  document.getElementById("final-score").innerHTML = "You win " + score + " points";
  document.getElementById('main').setAttribute("class", "hide-display");
  document.getElementById('feedback-page').removeAttribute("class");
  }
}

let tryAgain = () => {
  addPoints();
  document.location.reload();
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
