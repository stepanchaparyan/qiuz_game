// variables for question number and score

let questionNumber = 0;
let score = 0;

function hideAndShow() {
  document.getElementById('start-page').style.display='none';
  document.getElementById('quiz-questions').style.display='block';
  document.getElementById('quiz-image').style.display='block';
  document.getElementById('quiz-nav').style.display='block';
  document.getElementById('quiz-answers').style.display='block';
  document.getElementById('result-message').style.display='block';
  document.getElementById('result-step-score').style.display='block';
}

function questions() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[questionNumber].name + " is " + COUNTRIES[questionNumber].capital;
}

function testRight () {
  if (COUNTRIES[questionNumber].answer == "right") {
    document.getElementById("result-message").innerHTML = "You are right";
    score += 1;
    result();
  } else {
    document.getElementById("result-message").innerHTML = "You are wrong";
  }
}

function testWrong () {
  if (COUNTRIES[questionNumber].answer == "right") {
    document.getElementById("result-message").innerHTML = "Sorry but " + COUNTRIES[questionNumber].capital + " is the capital of " + COUNTRIES[questionNumber].name;
  } else {
    document.getElementById("result-message").innerHTML = "You are right, " + COUNTRIES[questionNumber].capital + "is not the capital of " + COUNTRIES[questionNumber].name;
    score += 1;
    result();
  }
}

function result () {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /10";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /10";
}

function next () {
  questionNumber += 1;
  start();
}

function start () {
  hideAndShow();
  questions();
  result();
}
