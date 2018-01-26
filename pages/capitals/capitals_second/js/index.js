// variables for question number and score
let questionNumber = 0;
let score = 0;
let randomNumberMain;
let randomNumber;
let randomNumber1;
let randomNumber2;

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
  console.log(randomNumber1);
  console.log(randomNumber2);
}

function questionsWrong() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[randomNumber1].name + " is " + COUNTRIES[randomNumber2].capital;
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

function testRight () {
  if (randomNumberMain == 1) {
    setNewCSS("right", "green");
    score += 1;
    result();
  } else {
    setNewCSS("right", "red");
    document.getElementById("result-message").innerHTML = "Right answer: the " + COUNTRIES[randomNumber1].capital + " is the capital of " + COUNTRIES[randomNumber1].name;
  }
    document.getElementById('btn-next').disabled = false;
    document.getElementById('wrong').disabled = true;
    document.getElementById('right').disabled = true;
}

function testWrong () {
  if (randomNumberMain == 1) {
    setNewCSS("wrong", "red");
  } else {
    setNewCSS("wrong", "green");
    document.getElementById("result-message").innerHTML = "Right answer: the " + COUNTRIES[randomNumber1].capital + " is the capital of " + COUNTRIES[randomNumber1].name;
    score += 1;
    result();
  }
    document.getElementById('btn-next').disabled = false;
    document.getElementById('wrong').disabled = true;
    document.getElementById('right').disabled = true;
}

function result () {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /10";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /10";
}

function setNumbers() {
  randomNumber1 = Math.floor(Math.random() * 122) + 1;
  randomNumber2 = Math.floor(Math.random() * 120) + 124;
  randomNumber = Math.floor(Math.random() * 243) + 1;
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
  setNumbers();
  start();
}

function start () {
  hideAndShow();
  setNumbers();
  questionsMain();
  result();
}
