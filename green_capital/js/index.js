const QUIZ = [
// question one
{
  question: "What is the capital city of the United States?",
  answers: [
  "New York, NY",
  "Washington, D.C.",
  "Los Angeles, CA",
  "Chicago, IL"
  ],
  correctAnswerString: "Washington, D.C.",
},
// question two
{
  question: "What is the capital city of Spain?",
  answers: [
  "Madrid",
  "Barcelona",
  "San Sebasti&#225;n",
  "Pamplona"
  ],
  correctAnswerString: "Madrid",
},
//question three
{
  question: "What is the capital city of France?",
  answers: [
  "Marseille",
  "Nice",
  "Avignon",
  "Paris"
  ],
  correctAnswerString: "Paris",
},
//question four
{ question: "What is the capital city of Japan?",
  answers: [
  "Kyoto",
  "Tokyo",
  "Osaka",
  "Hiroshima"
  ],
  correctAnswerString: "Tokyo",
},
// question five
{ question: "What is the capital city of China?",
  answers: [
  "Sichuan",
  "Shanghai",
  "Beijing",
  "Hainan"
  ],
  correctAnswerString: "Beijing",
},
//question six
{ question: "What is the capital city of Australia?",
  answers: [
  "Canberra",
  "Melbourne",
  "Sydney",
  "Perth"
  ],
  correctAnswerString: "Canberra",
},
//question seven
{ question: "What is the capital city of Uganda?",
  answers: [
  "Lira",
  "Masaka",
  "Kampala",
  "Soroti"
  ],
  correctAnswerString: "Kampala",
},
//question eight
{ question: "What is the capital city of Germany?",
  answers: [
  "Munich",
  "Hamburg",
  "Berlin",
  "Nuremburg"
  ],
  correctAnswerString: "Berlin",
},
//question nine
{ question: "What is the capital city of Chile?",
  answers: [
  "Santa Cruz",
  "Santiago",
  "Puc&#243;n",
  "Limache"
  ],
  correctAnswerString: "Santiago",
},
//question ten
{ question: "What is the capital city of Switzerland?",
  answers: [
  "Bern",
  "Lauterbrunnen",
  "Davos",
  "Burgdorf"
  ],
  correctAnswerString: "Bern",
 }
];


//Generate questions in a form
// pass in the counter variable
// retrieve the question with the index of the counter variable
// display the question
let scoreCount = 3;
let counter = 5;
function generateQuestions(counter) {
    if (counter < 10) {
    let currentQuestion = QUIZ[counter];
    let quizHTML = `
      <form>
      <h1 class="question-one">${currentQuestion.question}</h1>
      <fieldset class="options">
        <input type="radio" name="question-option" id="question-option-one" value="${currentQuestion.answers[0]}">
        <label for="question-option-one">${currentQuestion.answers[0]}</label>
        <br><br>
        <input type="radio" name="question-option" id="question-option-two" value="${currentQuestion.answers[1]}">
        <label for="question-option-two">${currentQuestion.answers[1]}</label>
        <br><br>
        <input type="radio" name="question-option" id="question-option-three" value="${currentQuestion.answers[2]}">
        <label for="question-option-three">${currentQuestion.answers[2]}</label>
        <br><br>
        <input type="radio" name="question-option" id="question-option-four" value="${currentQuestion.answers[3]}">
        <label for="question-option-four">${currentQuestion.answers[3]}</label>
      </fieldset>
      </form>
      <p>Question: ${counter + 1}/10</p>
      <p>Score: ${scoreCount}/10</p>`;
    $('#quiz-questions').html(quizHTML);
  };
}


//Click on Start Button to set display of .start-page to none,
//and set .quiz-questions display:none to visible
function startQuiz() {
  $('.button-style').on('click', function (event) {
      console.log('Hide start page and display questions');
      $('#quiz-questions').removeClass("no-display");
      $('#start').addClass("no-display");
//    $('#quiz-nav').removeClass("hide-display");
      console.log('Hide shgvyjbplay questions');

    });
}


function start() {
  startQuiz();
  generateQuestions(counter);
//  answerFeedback(counter);
//  nextQuestionButton();
//  finalFeedback();
//  tryAgain();
}

$(start);
