// variables for question number and score
let questionNumber = 0;
let score = 0;
let randomNumberMain = Math.floor(Math.random() * Math.floor(2));
let randomNumber1 = Math.floor(Math.random() * 40) + 1;
let randomNumber2 = Math.floor(Math.random() * 38) + 42;

//function for hide first card and show question cards
function hideAndShow() {
  document.getElementById('start-page').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'block';
  document.getElementById('quiz-image').style.display = 'block';
  document.getElementById('quiz-nav').style.display = 'block';
  document.getElementById('quiz-answers').style.display = 'block';
  document.getElementById('result-step-score').style.display = 'block';
}

function questionsMain () {
  randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  if (randomNumberMain == 1) {
    questionsRight();
  } else {
    questionsWrong();
  }
  console.log(randomNumberMain);
  console.log(randomNumber1);
  console.log(randomNumber2);
}

function questionsWrong() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[randomNumber1].name + " is " + COUNTRIES[randomNumber2].capital;
}

function questionsRight() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[randomNumber1].name + " is " + COUNTRIES[randomNumber1].capital;
}

function testRight () {
  if (randomNumberMain == 1) {
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
    document.getElementById('btn-next').disabled = false;
    document.getElementById('wrong').disabled = true;
    document.getElementById('right').disabled = true;
    document.getElementById('wrong').style.backgroundColor = "#cee1e2";
    document.getElementById('right').style.backgroundColor = "#cee1e2";
}

function testWrong () {
  if (randomNumberMain == 1) {
    document.getElementById("result-message").innerHTML = "Sorry, but " + COUNTRIES[randomNumber1].capital + " is the capital of " + COUNTRIES[randomNumber1].name;
    document.getElementById('wrong').style.borderColor = "red";
    document.getElementById('result-message').style.borderColor = "red";
  } else {
    document.getElementById("result-message").innerHTML = "You are right, " + COUNTRIES[randomNumber1].capital + "is not the capital of " + COUNTRIES[randomNumber2].name;
    document.getElementById('wrong').style.borderColor = "#48b484";
    document.getElementById('result-message').style.borderColor = "#48b484";
    score += 1;
    result();
  }
    document.getElementById('result-message').style.display='block';
    document.getElementById('btn-next').disabled = false;
    document.getElementById('wrong').disabled = true;
    document.getElementById('right').disabled = true;
    document.getElementById('wrong').style.backgroundColor = "#cee1e2";
    document.getElementById('right').style.backgroundColor = "#cee1e2";
}

function result () {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /10";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /10";
}

function next () {
  questionNumber += 1;
  randomNumber1 = Math.floor(Math.random() * 15) + 1;
  randomNumber2 = Math.floor(Math.random() * 19) + 17;
  document.getElementById('right').style.borderColor = "#b5d2d3";
  document.getElementById('wrong').style.borderColor = "#b5d2d3";
  document.getElementById('result-message').style.display='none';
  document.getElementById('btn-next').disabled = true;
  document.getElementById('wrong').disabled = false;
  document.getElementById('right').disabled = false;
  start();
}

function start () {
  hideAndShow();
  questionsMain();
  result();
}
