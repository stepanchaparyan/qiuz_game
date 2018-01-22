// variables for question number and score

let questionNumber = 0;
let score = 0;

function hideAndShow() {
  document.getElementById('start-page').style.display='none';
  document.getElementById('quiz-questions').style.display='block';
  document.getElementById('quiz-image').style.display='block';
  document.getElementById('quiz-nav').style.display='block';
  document.getElementById('quiz-answers').style.display='block';
  document.getElementById('result-step-score').style.display='block';
}

function questions() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[questionNumber].name + " is " + COUNTRIES[questionNumber].capital;
}

function testRight () {
  if (COUNTRIES[questionNumber].answer == "right") {
    document.getElementById("result-message").innerHTML = "You are right";
    document.getElementById('right').style.borderColor = "#48b484";
    document.getElementById('result-message').style.borderColor = "#48b484";
    score += 1;
    result();
  } else {
    document.getElementById("result-message").innerHTML = "You are wrong";
    document.getElementById('right').style.borderColor = "red";
    document.getElementById('result-message').style.borderColor = "red";
  }
    document.getElementById('result-message').style.display='block';
    document.getElementById('result-message').style.borderColor = "#48b484";
    document.getElementById('btn-next').disabled = false;
}

function testWrong () {
  if (COUNTRIES[questionNumber].answer == "right") {
    document.getElementById("result-message").innerHTML = "Sorry, but " + COUNTRIES[questionNumber].capital + " is the capital of " + COUNTRIES[questionNumber].name;
    document.getElementById('wrong').style.borderColor = "red";
    document.getElementById('result-message').style.borderColor = "red";
  } else {
    document.getElementById("result-message").innerHTML = "You are right, " + COUNTRIES[questionNumber].capital + "is not the capital of " + COUNTRIES[questionNumber].name;
    document.getElementById('wrong').style.borderColor = "#48b484";
    score += 1;
    result();
  }
    document.getElementById('result-message').style.display='block';
    document.getElementById('btn-next').disabled = false;
}

function result () {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /10";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /10";
}

function next () {
  questionNumber += 1;
  document.getElementById('right').style.borderColor = "#b5d2d3";
  document.getElementById('wrong').style.borderColor = "#b5d2d3";
  document.getElementById('result-message').style.display='none';
  document.getElementById('btn-next').disabled = true;
  start();
}

function start () {
  hideAndShow();
  questions();
  result();
}
