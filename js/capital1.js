// variables for question number and score
let questionNumber = 0;
let score = 0;
let randomNumberMain;
let randomNumber;
let randomNumberExcluded;
let countriesList;

//function for hide first card and show question cards
let hideAndShow = () => {
  document.getElementById('mainCards').classList.add("hideDisplay");
  document.getElementById('quizResults').classList.remove("hideDisplay");
  document.getElementById('resultMessage').classList.add("hideDisplay");
}

//generate and print right or wrong question
let questionsMain = () => {
  randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  randomNumberMain == 1 ? questionsRight() : questionsWrong();
}

//print Wrong question
let questionsWrong = () => document.getElementById("quizQuestions").innerHTML = "The capital city of " + countriesList[randomNumber].name + " is " + countriesList[randomNumberExcluded].capital;

//print Right question
let questionsRight = () => document.getElementById("quizQuestions").innerHTML = "The capital city of " + countriesList[randomNumber].name + " is " + countriesList[randomNumber].capital;

//print Right answer
let addRightAnswer = () => document.getElementById("resultMessage").innerHTML = "Right answer: " + countriesList[randomNumber].capital + " is the capital of " + countriesList[randomNumber].name;

let getFocus = () => document.getElementById("btnNext").focus();

//generate CSS for right or wrong answer
let setNewCSS = (id, color) => {
  if (color == "green") {
    document.getElementById(id).setAttribute("class", "greenBorder");
    document.getElementById('resultMessage').setAttribute("class", "greenBorder");
    document.getElementById("resultMessage").innerHTML = "You are right";
  } else if (color == "red") {
    document.getElementById(id).setAttribute("class", "redBorder");
    document.getElementById('resultMessage').setAttribute("class", "redBorder");
    document.getElementById("resultMessage").innerHTML = "Sorry, but the question was right";
  }
}

//change element from disabled to abled and vice versa
let changeDisabled = () => {
  document.getElementById('btnNext').disabled = !document.getElementById('btnNext').disabled;
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
  document.getElementById("resultStep").innerHTML = " Question: " + (questionNumber + 1) + " /20";
  document.getElementById("resultScore").innerHTML = " Score: " + score + " /20";
}

let finalResult = () => {
  let text;
  if (questionNumber == 20) {
    text = "Thanks you, you got " + score + " points";
  document.getElementById("finalScore").innerHTML = text;
  document.getElementById('main').classList.add("hide-display");
  document.getElementById('feedbackPage').removeAttribute("class");
  addPoints();
  document.getElementById('point').innerHTML = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints;
  setDisabledThisGame();
    document.getElementById("finalScore").innerHTML = text;
    document.getElementById('main').classList.add("hideDisplay");
    document.getElementById('feedbackPage').removeAttribute("class");
  }
}

let setDisabledThisGame = () => {
  if (countriesList == COUNTRIES_ASIA) {
    addDisabledCapital1("asia");
  } else if (countriesList == COUNTRIES_EUROPE) {
    addDisabledCapital1("europe");
  } else if (countriesList == COUNTRIES_AFRICA) {
    addDisabledCapital1("africa");
  } else if (countriesList == COUNTRIES_AMERICAS) {
    addDisabledCapital1("americas");
  } else if (countriesList == COUNTRIES_OCEANIA) {
    addDisabledCapital1("oceania");
  } else {
    addDisabledCapital1("world");
  }
}

let checkDisabledInLoad = () => {
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled") {
      document.getElementById("asia").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled") {
      document.getElementById("europe").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled") {
      document.getElementById("africa").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled") {
      document.getElementById("americas").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled") {
      document.getElementById("oceania").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
      document.getElementById("world").setAttribute("disabled", "disabled");
    }
  }

let checkTitleOnLoad = () => {
  if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
    document.getElementById("levelResult").removeAttribute("class");
    document.getElementById("leftCard").removeAttribute("disabled");
    document.getElementById("knightTitle").innerHTML = "Baron";
  }
}

//generateRandum numbers for question
let setRandomNumbers = (continent) => {
  if(continent == "Asia") {
    countriesList = COUNTRIES_ASIA;
  } else if (continent == "Europe") {
    countriesList = COUNTRIES_EUROPE;
  } else if (continent == "Africa") {
    countriesList = COUNTRIES_AFRICA;
  } else if (continent == "Americas") {
    countriesList = COUNTRIES_AMERICAS;
  } else if (continent == "Oceania") {
    countriesList = COUNTRIES_OCEANIA;
  } else {
    countriesList = COUNTRIES;
  }
  randomNumber = Math.floor(Math.random() * countriesList.length-1) + 1;
  randomNumberExcluded = randomExcluded(0, countriesList.length-1, randomNumber);
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
  document.getElementById('resultMessage').removeAttribute("class");
  document.getElementById('resultMessage').classList.add("hideDisplay");
  changeDisabled();
  chooseContinent();
}

let chooseContinent = () => {
  if(countriesList == COUNTRIES_EUROPE) {
    start("Europe");
  } else if (countriesList == COUNTRIES_ASIA) {
    start("Asia");
  } else if (countriesList == COUNTRIES_AFRICA) {
    start("Africa");
  } else if (countriesList == COUNTRIES_AMERICAS) {
    start("Americas");
  } else if (countriesList == COUNTRIES_OCEANIA) {
    start("Oceania");
  } else {
    start("World");
  }
}

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
