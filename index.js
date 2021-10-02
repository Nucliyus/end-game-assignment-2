var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to VALORANT Quiz");

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("right!");
    score = score + 1;
   
  } else {
    console.log("wrong!");
  }

   console.log("curent score: ", score);
   console.log("------------");
}

// var questionOne = {
//   question: "Where do I live?",
//   answer: "Nagpur"
// }

// var questionTwo = {
//   question: "My favorite superhero would be?",
//   answer: "Super"
// }

// array of objects

var questions = [{
  question: "Name the Agent who can teleport in VALORANT: ",
  answer: "Omen"
}, {
  question: "Name the Agent who can fly in sky: ",
  answer: "Jett"
}];

//loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("You SCORED: ", score);

if (score === 2){
  console.log("YAY!You are a Pro Player ( ͡▀̿ ̿ ͜ʖ ͡▀̿ ̿ )");
} else {
  console.log("Please Uninstall VALORANT ( ͡ಥ ͜ʖ ͡ಥ) \nDo it now"); 
}