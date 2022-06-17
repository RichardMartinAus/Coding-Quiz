var highScores = document.querySelector(".high-scores");
var gameTimer = document.querySelector(".time");
var startButton = document.querySelector(".start-button");
var pText = document.getElementById("copyForFirstPage");
var answerButtons = document.getElementById("answerButtons");
var previousResult = document.getElementById("previousResult");
var answerButton1 = document.getElementById("answer-button-1");
var answerButton2 = document.getElementById("answer-button-2");
var answerButton3 = document.getElementById("answer-button-3");
var answerButton4 = document.getElementById("answer-button-4");


var scoreCounter = 0;
var timerCount;
var timer;




// START GAME FUNCTION
function startGame() {
    timerCount = 75;
    startTimer();
    renderQuestion1();
}

// The setTimer function starts and stops the timer and triggers endGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    gameTimer.textContent = "Time left: " + timerCount;
    startButton.disabled = true;
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      // endGame();
    }
  }, 1000);
}

// QUESTION PAGES
function renderQuestion1() {
  // Hide the start button and P text
  startButton.style.display = "none";
  pText.style.display = "none";
  previousResult.style.display = "none",
      
  // Render the question
  document.getElementById("question").innerHTML = "What operator is used to assign a value to a declare variable?";
  document.getElementById("question").style.color = "black";
  document.getElementById("question").style.textAlign = "center";
  document.getElementById("question").style.fontSize = "2.5rem";
  document.getElementById("question").style.lineHeight = "3rem";
  document.getElementById("question").style.paddingBottom = "2.5rem";

  // Render the answer buttons
  // Answer 1
  document.getElementById("answer-button-1").style.display = "flex";
  document.getElementById("answer-button-1").innerHTML = "Equal sign (=)";
  // Answer 2
  document.getElementById("answer-button-2").style.display = "flex";
  document.getElementById("answer-button-2").innerHTML = "Question mark (?)";
  // Answer 3
  document.getElementById("answer-button-3").style.display = "flex";
  document.getElementById("answer-button-3").innerHTML = "Double-equal (==)";
  // Answer 4
  document.getElementById("answer-button-4").style.display = "flex";
  document.getElementById("answer-button-4").innerHTML = "Colon (:)"; 

  var correctAnswer = document.getElementById("answer-button-1");
  var answer = userAnswer;

  // if (answer == correctAnswer){
  //   correctAnswer();
  //   renderQuestion2();
  // } else { 
  //   wrongAnswer()
  //   renderQuestion2();
  // };
}

function renderQuestion2() { 
  // Render the question
  document.getElementById("question").innerHTML = "How do we declare a conditional statement in JavaScript?";
  // Render the answer buttons
  // Answer 1
  document.getElementById("answer-button-1").innerHTML = "difference...between";
  // Answer 2
  document.getElementById("answer-button-2").innerHTML = "for loop";
  // Answer 3
  document.getElementById("answer-button-3").innerHTML = "if...else";
  // Answer 4
  document.getElementById("answer-button-4").innerHTML = "while loop"; 

  var correctAnswer = document.getElementById("answer-button-3");
}

function renderQuestion3() { 
  // Render the question
  document.getElementById("question").innerHTML = "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']";
  // Render the answer buttons
  // Answer 1
  document.getElementById("answer-button-1").innerHTML = "0";
  // Answer 2
  document.getElementById("answer-button-2").innerHTML = "1";
  // Answer 3
  document.getElementById("answer-button-3").innerHTML = "2";
  // Answer 4
  document.getElementById("answer-button-4").innerHTML = "3";

  var correctAnswer = document.getElementById("answer-button-2");
}

function renderQuestion4() { 
  // Render the question
  document.getElementById("question").innerHTML = "How do we stop a loop from from repeating indefinitely?";
  // Render the answer buttons
  // Answer 1
  document.getElementById("answer-button-1").innerHTML = "When we have iterated through half of the condition.";
  // Answer 2
  document.getElementById("answer-button-2").innerHTML = "We have to explicitly end the loop with the break keyword.";
  // Answer 3
  document.getElementById("answer-button-3").innerHTML = "A loop will stop executing when the condition is true.";
  // Answer 4
  document.getElementById("answer-button-4").innerHTML = "A loop will stop executing when the condition is false.";

  var correctAnswer = document.getElementById("answer-button-4");
}

function renderQuestion5() { 
  // Render the question
  document.getElementById("question").innerHTML = "What are the two types of scope JavaScript uses?";
  // Render the answer buttons
  // Answer 1
  document.getElementById("answer-button-1").innerHTML = "Outside and Inside";
  // Answer 2
  document.getElementById("answer-button-2").innerHTML = "Global and Local";
  // Answer 3
  document.getElementById("answer-button-3").innerHTML = "Surrounding and Inner";
  // Answer 4
  document.getElementById("answer-button-4").innerHTML = "Abroad and Local";

  var correctAnswer = document.getElementById("answer-button-2");
}

function renderQuestion6() { 
  // Render the question
  document.getElementById("question").innerHTML = "What is an object method?";
  // Render the answer buttons
  // Answer 1
  document.getElementById("answer-button-1").innerHTML = "An array saved inside of an object";
  // Answer 2
  document.getElementById("answer-button-2").innerHTML = "A function that takes an object for an argument";
  // Answer 3
  document.getElementById("answer-button-3").innerHTML = "Keys in an object that have a number assigned to it";
  // Answer 4
  document.getElementById("answer-button-4").innerHTML = "A function associated with an object";

  var correctAnswer = document.getElementById("answer-button-4");
}

// FUNCTION FOR CORRECT ANSWERS
function correctAnswer() {
  scoreCounter = scoreCounter + 10,
  console.log(scoreCounter),
  previousResult.style.display = "block",
  previousResult.innerHTML = "Correct!";
}

// FUNCTION FOR INCORRECT ANSWERS
function wrongAnswer () {
  timerCount = timerCount -10,
  previousResult.style.display = "block",
  previousResult.innerHTML = "Wrong!";
}

// Eventlistener for answerbuttons
answerButton1.addEventListener("click", answer);
console.log(answer)
answerButton2.addEventListener("click", userAnswer);
answerButton3.addEventListener("click", userAnswer);
answerButton4.addEventListener("click", userAnswer);

var answer = [""]
function userAnswer () {

}
// answerButtons.addEventListener("click", function(event) {
//   answer = event.target;
//   event.stopPropagation();
//   event.preventDefault();
//   console.log(answer);
// });

// var userAnswer = ("");
// console.log(userAnswer);

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


// END GAME SCREEN
function endGame() {
  window.alert("Your time is up!")
}