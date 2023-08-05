//Variables - initialise targeted elements
const quizQuestion = document.getElementById("question");
const quizAnswer1 = document.getElementById("answer-1");
const btnNext = document.getElementById("btn-next");
/*
const quizAnswer2 = document.getElementById("answer-2");
const quizAnswer3 = document.getElementById("answer-3");
const quizAnswer4 = document.getElementById("answer-4");
*/

//Event Listeners
btnNext.addEventListener("click", nextQuestion)

//Global Variables
let iQ = 0; // Question index

//Start script on window load  -> this code is unnecessary and blocking the execution (infinite loop)
 // window.onload = function() {
 //   while (iQ < quizQuestions.length){
 //     displayQandA();
 //   }
 //   console.log("Program End");
 // }

//Functions
function displayQandA() {
  console.log("DisplayQandA");
  quizQuestion.innerText = quizQuestions[iQ].q;
  quizAnswer1.innerText = quizQuestions[iQ].a;
}

function nextQuestion() {
  iQ += 1;
  if (iQ < quizQuestions.length) {
    displayQandA();
  }
  else {
    console.log("Finish Qno: " + iQ); // this counting goes forever, but that shouldn't be the case
  }
}
// question 1 is not being displayed. why? (give me an answer)
// how can you correct this?


// All in all, with the due corrections, a very elegant and functional code
