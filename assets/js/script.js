var highScores = document.querySelector(".high-scores");
var gameTimer = document.querySelector(".time");
var startButton = document.querySelector(".start-button");
var pText = document.getElementById("copyForFirstPage");

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
    renderQuestion1();
}

// QUESTION PAGES
function renderQuestion1() {
    // Hide the start button and P text
    startButton.style.display = "none";
    pText.style.display = "none";
    
    // Render the question
    document.getElementById("question").innerHTML = "What operator is used to assign a value to a declared variable?";
    document.getElementById("question").style.color = "black";
    document.getElementById("question").style.fontSize = "2.5rem";
    document.getElementById("question").style.lineHeight = "2.5rem";
    document.getElementById("question").style.paddingBottom = "2.5rem";

    // Render the answer buttons
    // Answer 1
    document.getElementById("answer-button-1").style.display = "flex"
    document.getElementById("answer-button-1").innerHTML = "Equal sign (=)"
    // Answer 2
    document.getElementById("answer-button-2").style.display = "flex"
    document.getElementById("answer-button-2").innerHTML = "Question mark (?)"
    // Answer 3
    document.getElementById("answer-button-3").style.display = "flex"
    document.getElementById("answer-button-3").innerHTML = "Double-equal (==)"
    // Answer 4
    document.getElementById("answer-button-4").style.display = "flex"
    document.getElementById("answer-button-4").innerHTML = "Colon (:)"

    // ADD eventlistener to target

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



// var container = document.querySelector(".container");

// container.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");

//     // Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
//       // If the card is clicked while the state is "hidden", we set .textContent to the number 
//       element.textContent = element.dataset.number;
//       // Using the dataset property, we change the state to visible because the user can now see the number
//       element.dataset.state = "visible";
   
//     } else {
//       // 'Hide' the number by setting .textContent to an empty string
//       element.textContent= "";
//       // Use .setAttribute() method
//       element.setAttribute("data-state", "hidden")
     
//     }  
//   }
  
// });