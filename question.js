/*
<title>The Ultimate State Capital Quiz</title>

This application quizzes players on their state capital knowledge.
The player is asked a set of 5 questions and are prompted for an answer.
When an answer is given it tests the response to see if it is correct.
The application then lets the player know whether or not they answered correctly.
After the game is over the player's score is tabulated and it determines how they rank.

Author: Josiah Bennett
Website: www.josiahbennett.com
Date: 6/2/2015
*/

//creates variable for counter and sets it to zero to start.
var quizScore = 0;

//Creates answer bank to test responses to.
var questionOneAnswer = 'HARRISBURG';
var questionTwoAnswer = 'COLUMBUS';
var questionThreeAnswer = 'ALBANY';
var questionFourAnswer = 'PROVIDENCE';
var questionFiveAnswer = 'BOSTON';

//Creates variable for holding what the person guesses as the answer.
//Also changes their guess to uppercase to avoid any capitalization errors.
//Tests the guess against the answer and increases score if they get it right.
var questionOneGuess = prompt('Question 1: What is the capital of Pennsylvania?');
if (questionOneGuess.toUpperCase() === questionOneAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionTwoGuess = prompt('Question 2: What is the capital of Ohio?');
if (questionTwoGuess.toUpperCase() === questionTwoAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionThreeGuess = prompt('Question 3: What is the capital of New York?');
if (questionThreeGuess.toUpperCase() === questionThreeAnswer) {
quizScore= quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionFourGuess = prompt('Question 4: What is the capital of Rhode Island?');
if (questionFourGuess.toUpperCase() === questionFourAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionFiveGuess = prompt('Question 5: What is the capital of Massachusetts?');
if (questionFiveGuess.toUpperCase() === questionFiveAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

//Determines the player's score by testing how many they got correct.
if (quizScore === 5) {
document.write('<p>You win the gold crown with a score of ' + quizScore + ' correct answers.</p>');
} else if (quizScore === 4 || quizScore === 3) {
document.write('<p>You win the silver crown with a score of ' + quizScore + ' correct answers.</p>');
} else if (quizScore === 2 || quizScore === 1) {
document.write('<p>You win the bronze crown with a score of ' + quizScore + ' correct answers.</p>');
} else {
document.write("<p>You haven't won any crown. You answered " + quizScore + " questions correctly.</p>");
}
