// variables for question number and score
let questionNumber = 0;
let score = 0;
let randomNumberMain;
let randomNumber;
let randomNumberExcluded;
let countriesList;
var randomNumberBetween1_4;
var randomNumberExcluded1;
var randomNumberExcluded2;
var randomNumberExcluded3;
var randomNumberCountriesLengthExcluded1;
var randomNumberCountriesLengthExcluded2;
var randomNumberCountriesLengthExcluded3;

//function for hide first card and show question cards
let hideAndShow = () => {
  document.getElementById('mainCards').classList.add("hideDisplay");
  document.getElementById('quizResults').classList.remove("hideDisplay");
  document.getElementById('resultMessage').classList.add("hideDisplay");
}

//generate and print right or wrong question
let questionsMain = () => {
  question();
  setRandomNumbersBetween1_4();
  setRandomNumbersCountriesLength();
  getRandumAnswer();
}

//print question
let question = () => document.getElementById("quizQuestions").innerHTML = `Which is the capital of ${countriesList[randomNumber].name}`;

let getRandumAnswer = () => {
  var answer = [];
  answer[0] = countriesList[randomNumber].capital;
  answer[1] = countriesList[randomNumberCountriesLengthExcluded1].capital;
  answer[2] = countriesList[randomNumberCountriesLengthExcluded2].capital;
  answer[3] = countriesList[randomNumberCountriesLengthExcluded3].capital;
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
  randomNumberCountriesLengthExcluded1 = generateRandom1(1, countriesList.length-1);
  randomNumberCountriesLengthExcluded2 = generateRandom2(1, countriesList.length-1);
  randomNumberCountriesLengthExcluded3 = generateRandom3(1, countriesList.length-1);
}

let test = () => {
  if (this.event.target.innerHTML == countriesList[randomNumber].capital) {
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
let addRightAnswer = () => document.getElementById("resultMessage").innerHTML = "Right answer: " + countriesList[randomNumber].capital + " is the capital of " + countriesList[randomNumber].name;

//list of functions/action for next button
let next = () => {
  questionNumber += 1;
  document.getElementById('answer1').removeAttribute("class");
  document.getElementById('answer2').removeAttribute("class");
  document.getElementById('answer3').removeAttribute("class");
  document.getElementById('answer4').removeAttribute("class");
  document.getElementById('resultMessage').removeAttribute("class");
  document.getElementById('resultMessage').setAttribute("class", "hideDisplay");
  changeDisabled();
  chooseContinent();
}

let getFocus = () => document.getElementById("btnNext").focus();

//generate CSS for right or wrong answer
let setNewCSS = (id, color) => {
  if (color == "green") {
    document.getElementById(id).setAttribute("class", "greenBorder");
    document.getElementById('resultMessage').setAttribute("class", "greenBorder");
    document.getElementById("resultMessage").innerHTML = `You are right`;
  } else if (color == "red") {
    document.getElementById(id).setAttribute("class", "redBorder");
    document.getElementById('resultMessage').setAttribute("class", "redBorder");
    document.getElementById("resultMessage").innerHTML = `Sorry, but the question was right`;
  }
}

//change element from disabled to abled and vice versa
let changeDisabled = () => {
  document.getElementById('btnNext').disabled = !document.getElementById('btnNext').disabled;
  document.getElementById('answer1').disabled = !document.getElementById('answer1').disabled;
  document.getElementById('answer2').disabled = !document.getElementById('answer2').disabled;
  document.getElementById('answer3').disabled = !document.getElementById('answer3').disabled;
  document.getElementById('answer4').disabled = !document.getElementById('answer4').disabled;
}

//print score and question number
let result = () => {
  document.getElementById("resultStep").innerHTML = ` Question: ${questionNumber + 1} /20`;
  document.getElementById("resultScore").innerHTML = ` Score: ${score} /20`;
}

let finalResult = () => {
  let text;
  if (questionNumber == 20) {
    text = `Thank you, you got ${score} points`;
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
    addDisabledCapital2("asia");
  } else if (countriesList == COUNTRIES_EUROPE) {
    addDisabledCapital2("europe");
  } else if (countriesList == COUNTRIES_AFRICA) {
    addDisabledCapital2("africa");
  } else if (countriesList == COUNTRIES_AMERICAS) {
    addDisabledCapital2("americas");
  } else if (countriesList == COUNTRIES_OCEANIA) {
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
