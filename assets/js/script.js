var highScores = document.querySelector(".high-scores");
var gameTimer = document.querySelector(".time");
var startButton = document.querySelector(".start-button");
var pText = document.getElementById("copyForFirstPage");
var answerButtons = document.getElementById("answerButtons");
var previousResult = document.getElementById("previousResult");

// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");

var scoreCounter = 0;
var timerCount;
var timer;
// var isWin = false;

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

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
    if (timerCount === 0) {
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
      
  // Render the question
  document.getElementById("question").innerHTML = "What operator is used to assign a value to a declare variable?";
  document.getElementById("question").style.color = "black";
  document.getElementById("question").style.textAlign = "center";
  document.getElementById("question").style.fontSize = "2.5rem";
  document.getElementById("question").style.lineHeight = "2.5rem";
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

  // ADD eventlistener to target

  answerButtons.addEventListener("click", function(event) {
    answer = event.target;
    console.log(answer);

  if (answer == correctAnswer) {
    scoreCounter = scoreCounter + 10,
    console.log(scoreCounter),
    previousResult.style.display = "block",
    previousResult.innerHTML = "Correct!";
  } else if (answer != correctAnswer) {
    timerCount = timerCount -10,
    previousResult.style.display = "block",
    previousResult.innerHTML = "Wrong!";
    };
  });
}