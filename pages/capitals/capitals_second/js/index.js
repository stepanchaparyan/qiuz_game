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

//generate and print right or wrong question
function questionsMain () {
  randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  if (randomNumberMain == 1) {
    questionsRight();
  } else {
    questionsWrong();
  }
  console.log(randomNumberMain);
}

//print Wrong question
function questionsWrong() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[randomNumber].name + " is " + COUNTRIES[randomNumberExcluded].capital;
}

//print Right question
function questionsRight() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + COUNTRIES[randomNumber].name + " is " + COUNTRIES[randomNumber].capital;
}

//generate CSS for right or wrong answer
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

//print Right answer
function addRightAnswer() {
  document.getElementById("result-message").innerHTML = "Right answer: " + COUNTRIES[randomNumber].capital + " is the capital of " + COUNTRIES[randomNumber].name;
}

//change element from disabled to abled and vice versa
function changeDisabled() {
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

//print score and question number
function result () {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /10";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /10";
}

//generateRandum numbers for question
function setRandomNumbers() {
  randomNumber = Math.floor(Math.random() * COUNTRIES.length-1) + 0;
  while (COUNTRIES[randomNumber].region != "Europe") {
//    console.log("random in while " + COUNTRIES[randomNumber].name);
    randomNumber = Math.floor(Math.random() * COUNTRIES.length-1) + 0;
  }
  console.log("random out while " + COUNTRIES[randomNumber].name);
  randomNumberExcluded = randomExcluded(0, COUNTRIES.length-1, randomNumber);
}

//generate randum number Excluded question number
function randomExcluded(min, max, excluded) {
  let n = Math.floor(Math.random() * (max-min) + min);
  if (n >= excluded) n++;
  console.log("n " + COUNTRIES[n].name);
  while (COUNTRIES[n].region != "Europe") {
    console.log("n while " + COUNTRIES[n].name);
    n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
  }
//  console.log("n while out " + COUNTRIES[n].name);

  console.log("n - if " + COUNTRIES[n].name);
  return n;
}

//list of functions/action for next button
function next () {
  questionNumber += 1;
  document.getElementById('right').removeAttribute("class");
  document.getElementById('wrong').removeAttribute("class");
  document.getElementById('result-message').removeAttribute("class");
  document.getElementById('result-message').setAttribute("class", "hide-display");
  changeDisabled();
  start();
}

function start () {
  hideAndShow();
  setRandomNumbers();
  questionsMain();
  result();
}
