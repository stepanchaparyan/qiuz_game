// variables for question number and score
let questionNumber = 0;
let score = 0;
let randomNumberMain;
let randomNumber;
let randomNumberExcluded;
let countries_list;
var randomNumberBetween1_4;
var randomNumberExcluded1;
var randomNumberExcluded2;
var randomNumberExcluded3;
var randomNumberCountriesLengthExcluded1;
var randomNumberCountriesLengthExcluded2;
var randomNumberCountriesLengthExcluded3;

//function for hide first card and show question cards
let hideAndShow = () => {
  document.getElementById('mainCards').classList.add("hide-display");
  document.getElementById('quizResults').classList.remove("hide-display");
  document.getElementById('result-message').classList.add("hide-display");
}

//generate and print right or wrong question
let questionsMain = () => {
  question();
  setRandomNumbersBetween1_4();
  setRandomNumbersCountriesLength();
  getRandumAnswer();
}

//print question
let question = () => document.getElementById("quiz-questions").innerHTML = "Which is the capital of " + countries_list[randomNumber].name;

let getRandumAnswer = () => {
  var answer = [];
  answer[0] = countries_list[randomNumber].capital;
  answer[1] = countries_list[randomNumberCountriesLengthExcluded1].capital;
  answer[2] = countries_list[randomNumberCountriesLengthExcluded2].capital;
  answer[3] = countries_list[randomNumberCountriesLengthExcluded3].capital;
  document.getElementById("answer1").innerHTML = answer[randomNumberBetween1_4-1];
  document.getElementById("answer2").innerHTML = answer[randomNumberExcluded1-1];
  document.getElementById("answer3").innerHTML = answer[randomNumberExcluded2-1];
  document.getElementById("answer4").innerHTML = answer[randomNumberExcluded3-1];
}

var setRandomNumbersBetween1_4 = () => {
  function generateRandom1(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberBetween1_4) ? generateRandom1(min, max) : num;
  }
  function generateRandom2(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberBetween1_4 || num === randomNumberExcluded1) ? generateRandom2(min, max) : num;
  }
  function generateRandom3(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberBetween1_4 || num === randomNumberExcluded1 || num === randomNumberExcluded2) ? generateRandom3(min, max) : num;
  }
  randomNumberBetween1_4 = Math.floor(Math.random() * 4) + 1;
  randomNumberExcluded1 = generateRandom1(1, 4);
  randomNumberExcluded2 = generateRandom2(1, 4);
  randomNumberExcluded3 = generateRandom3(1, 4);
}

var setRandomNumbersCountriesLength = () => {
  function generateRandom1(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumber) ? generateRandom1(min, max) : num;
  }
  function generateRandom2(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumber || num === randomNumberCountriesLengthExcluded1) ? generateRandom2(min, max) : num;
  }
  function generateRandom3(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumber || num === randomNumberCountriesLengthExcluded1 || num === randomNumberCountriesLengthExcluded2) ? generateRandom3(min, max) : num;
  }
  randomNumberCountriesLengthExcluded1 = generateRandom1(1, countries_list.length-1);
  randomNumberCountriesLengthExcluded2 = generateRandom2(1, countries_list.length-1);
  randomNumberCountriesLengthExcluded3 = generateRandom3(1, countries_list.length-1);
}

let test = () => {
  if (this.event.target.innerHTML == countries_list[randomNumber].capital) {
    setNewCSS(this.event.target.id, "green");
    score += 1;
    result();
    changeDisabled();
    getFocus();
  } else {
    setNewCSS(this.event.target.id, "red");
    addRightAnswer();
    result();
    changeDisabled();
    getFocus();
  }
}

//print Right answer
let addRightAnswer = () => document.getElementById("result-message").innerHTML = "Right answer: " + countries_list[randomNumber].capital + " is the capital of " + countries_list[randomNumber].name;

//list of functions/action for next button
let next = () => {
  questionNumber += 1;
  document.getElementById('answer1').removeAttribute("class");
  document.getElementById('answer2').removeAttribute("class");
  document.getElementById('answer3').removeAttribute("class");
  document.getElementById('answer4').removeAttribute("class");
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
  document.getElementById('answer3').disabled = !document.getElementById('answer3').disabled;
  document.getElementById('answer4').disabled = !document.getElementById('answer4').disabled;
}

//print score and question number
let result = () => {
  document.getElementById("result-step").innerHTML = " Question: " + (questionNumber + 1) + " /20";
  document.getElementById("result-score").innerHTML = " Score: " + score + " /20";
}

let finalResult = () => {
  let text;
  if (questionNumber == 20) {
    text = "Thanks you, you got " + score + " points";
  document.getElementById("final-score").innerHTML = text;
  document.getElementById('main').classList.add("hide-display");
  document.getElementById('feedback-page').removeAttribute("class");
  }
}

let setDisabledThisGame = () => {
  if (countries_list == COUNTRIES_ASIA) {
    addDisabledCapital2("asia");
  } else if (countries_list == COUNTRIES_EUROPE) {
    addDisabledCapital2("europe");
  } else if (countries_list == COUNTRIES_AFRICA) {
    addDisabledCapital2("africa");
  } else if (countries_list == COUNTRIES_AMERICAS) {
    addDisabledCapital2("americas");
  } else if (countries_list == COUNTRIES_OCEANIA) {
    addDisabledCapital2("oceania");
  } else {
    addDisabledCapital2("world");
  }
}

let checkDisabledInLoad = () => {
    console.log("len " + info.data.length);
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 == "disabled") {
      document.getElementById("asia").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 == "disabled") {
      document.getElementById("europe").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 == "disabled") {
      document.getElementById("africa").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 == "disabled") {
      document.getElementById("americas").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 == "disabled") {
      document.getElementById("oceania").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 == "disabled") {
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
    document.getElementById("leftCard").removeAttribute("disabled");
    document.getElementById("knightTitle").innerHTML = "Baron";
  }
  if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 == "disabled") {
    document.getElementById("knightTitle").innerHTML = "Graf";
    document.getElementById("levelResult").removeAttribute("class");
    document.getElementById("nextLevel").innerHTML = "Thank you";
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
