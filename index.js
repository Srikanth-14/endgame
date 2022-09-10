var readlineSync = require("readline-sync");
var score = 0;
// data of high score
// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Hyderabad"
}, {
  question: "My favorite hero would be? ",
  answer: "Pawan Kalyan"
},{
  question: "My Date of Birth is on? ",
  answer: "14-01-2000"
},{
  question: "What is my favourite hobby? ",
  answer: "Riding Bike"
},
{
  question: "Where do I work? ",
  answer: "Cognizant"
}];
function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to DO YOU KNOW Srikanth?");
}
// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("-------------")
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);
}
welcome();
game();
showScores();
