// variables for question number and score
let questionNumber = 0;
let score = 0;
let randomNumberMain;
let randomNumber;
let randomNumberExcluded;

//function for hide first card and show question cards
function hideAndShow() {
  document.getElementById('start-page').setAttribute("class", "hide-display");
  document.getElementById('quiz-questions').removeAttribute("class");
  document.getElementById('quiz-image').removeAttribute("class");
  document.getElementById('quiz-nav').removeAttribute("class");
  document.getElementById('quiz-answers').removeAttribute("class");
  document.getElementById('result-step-score').removeAttribute("class");
}

function questionsMain () {
  randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  if (randomNumberMain == 1) {
    questionsRight();
  } else {
    questionsWrong();
  }
  console.log(randomNumberMain);
  console.log(randomNumber);
  console.log(randomNumberExcluded);
}

function questionsWrong() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[randomNumber].name + " is " + COUNTRIES[randomNumberExcluded].capital;
}

function questionsRight() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[randomNumber].name + " is " + COUNTRIES[randomNumber].capital;
}

function setNewCSS(id, color) {
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

function addRightAnswer() {
  document.getElementById("result-message").innerHTML = "Right answer: " + COUNTRIES[randomNumber].capital + " is the capital of " + COUNTRIES[randomNumber].name;
}

function changeDisabled() {
  document.getElementById('btn-next').disabled = false;
  document.getElementById('wrong').disabled = true;
  document.getElementById('right').disabled = true;
}

function changeDisabledTest() {
  document.getElementById('btn-next').disabled = !document.getElementById('btn-next').disabled;
  document.getElementById('wrong').disabled = !document.getElementById('wrong').disabled;
  document.getElementById('right').disabled = !document.getElementById('right').disabled;
}

function testRight () {
  if (randomNumberMain == 1) {
    setNewCSS("right", "green");
    score += 1;
    result();
  } else {
    setNewCSS("right", "red");
    addRightAnswer();
  }
  changeDisabled();
}

function testWrong () {
  if (randomNumberMain == 1) {
    setNewCSS("wrong", "red");
  } else {
    setNewCSS("wrong", "green");
    addRightAnswer();
    score += 1;
    result();
  }
  changeDisabled();
}

function result () {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /10";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /10";
}

function setRandomNumbers() {
  randomNumber = Math.floor(Math.random() * 244) + 0;
  randomNumberExcluded = randomExcluded(0, 244, randomNumber);
}

function randomExcluded(min, max, excluded) {
  let n = Math.floor(Math.random() * (max-min) + min);
  if (n >= excluded) n++;
  return n;
}

function next () {
  questionNumber += 1;
  document.getElementById('right').removeAttribute("class");
  document.getElementById('wrong').removeAttribute("class");
  document.getElementById('result-message').removeAttribute("class");
  document.getElementById('result-message').setAttribute("class", "hide-display");
  document.getElementById('btn-next').disabled = true;
  document.getElementById('wrong').disabled = false;
  document.getElementById('right').disabled = false;
  setRandomNumbers();
  start();
}

function start () {
  hideAndShow();
  setRandomNumbers();
  questionsMain();
  result();
}
