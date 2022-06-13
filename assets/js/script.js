var highScores = document.querySelector(".high-scores");
var gameTimer = document.querySelector(".time");
var startButton = document.querySelector(".start-button");

// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");

var scoreCounter;
var timerCount;
var timer;
// var isWin = false;

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// START GAME FUNCTION
function startGame() {
    timerCount = 75;
    startTimer();
    renderQuestion();
    
}

// QUESTION PAGES
function renderQuestion() {
    var questionText = document.getElementsByClassName(".question");
    var answerOneText = document.getElementsByClassName(".answer-button-1");
    var answerTwoText = document.getElementsByClassName(".answer-button-2");
    var answerThreeText = document.getElementsByClassName(".answer-button-3");
    var answerFourText = document.getElementsByClassName(".answer-button-4");
    var startButtonVisibility = document.getElementsByClassName(".start-button");

    startButtonVisibility.style.display = "none";
    questionText.appendChildren[0].textContent = "This is the first question in a series of questions?";
}

// The setTimer function starts and stops the timer and triggers loseGame()
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