// neccessory variables
let scoreCount = 0;
let counter = 0;
let displayCounter = counter + 1;

//Click on Start Button to set hide start-card and set display the quiz page
function startQuiz() {
  $('.button-start').on('click', function(event) {
    $('#quiz-questions').removeClass("hide-display");
    $('#quiz-image').removeClass("hide-display");
    $('#start-page').addClass("hide-display");
   $('#quiz-nav').removeClass("hide-display");
  });
}

//Generate questions in a form and display
// pass in the counter variable
function generateQuestions(counter) {
  if (counter < 10) {
    let currentQuestion = QUIZ[counter];
    let quizHTML = `
      <form>
      <h1 class="question-one">${currentQuestion.question}</h1>
      <div class="options">
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
      </div>
      </form>
      <p>Question: ${counter + 1}/10</p>
      <p>Score: ${scoreCount}/10</p>`;
    $('#quiz-questions').html(quizHTML);
  };
}


//press on answer and receive a correct or wrong message
function answerFeedback (counter) {
  if (counter < 10) {
    let correctAnswer = QUIZ[counter].correctAnswerString;
    $('input[type=radio]').click(function(event) {
      $('.options').children('input').attr('disabled', true);
      let userAnswer = $(this).val();
      if (userAnswer === correctAnswer) {
        scoreCount += 1;
        $('input[type=radio]:checked').next('label').addClass('correct-answer');
        $('#quiz-questions').append(`<p class='correct-answer'>Correct!</p>`);
      } else {
        $('#quiz-questions').append(`<p class='wrong-answer-long'>Wrong! The correct answer is: ${correctAnswer}</p>`)
        $('input[type=radio]:checked').next('label').addClass('wrong-answer');
      }
    });
  }
}


//prevents Next Button from being clicked on if no option is chosen
function preventClickNextButton () {
  $('.next-button').attr('disabled', true);
  $('.options').children('input').on('click', function () {
     if ($(this).prop("checked") === true) {
      $('.next-button').attr('disabled', false);
      }
    });
}

//Click on Next button to go to next question
function nextQuestionButton () {
  preventClickNextButton();
  $('.next-button').click(function(event) {
    counter += 1;
    generateQuestions(counter);
    answerFeedback(counter);
    preventClickNextButton();
  });
}

//Display final results page
// hide other sections
function finalFeedback() {
  $('.next-button').on('click', function() {
    if (counter === 10) {
      $('#quiz-questions').addClass('hide-display');
      $('#quiz-nav').addClass("hide-display");
      $('.feedback-page').removeClass('hide-display');
      $('.final-score').append(`You got ${scoreCount}/10 questions right!`)
    }
  });
}

//Click on Try Again button to reset the quiz
function tryAgain() {
  $('.try-again-button').on('click', function() {
    document.location.reload();
  });
}


function renderQuiz() {
  startQuiz();
  generateQuestions(counter);
  answerFeedback(counter);
  nextQuestionButton();
  finalFeedback();
  tryAgain();
}

$(renderQuiz);
