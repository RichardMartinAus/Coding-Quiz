// Linking HTML elements
var startButton = document.querySelector("#start-button");
var gameTimer = document.querySelector("#timer");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("question-screen");
var questionElement = document.getElementById("question");
var answerButton1 = document.getElementById("answers-1");
var answerButton2 = document.getElementById("answers-2");
var answerButton3 = document.getElementById("answers-3");
var answerButton4 = document.getElementById("answers-4");
var previousResult = document.getElementById("previousResult");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("score-text");
var highScoreScreen = document.getElementById("high-score-btn");
var submitButton = document.getElementById("submit-button");
var highScorePage = document.getElementById("high-score-page");


// Variables for score and timer
var scoreCounterTotal = [];
var userScore = 0;
var timerCount;
var timer;

// Event listeners for button clicks
startButton.addEventListener("click", startGame);

// START GAME FUNCTION
function startGame() {
    timerCount = 75;
    scoreCounterTotal = 0;
    startTimer();
    renderQuestion1();
}

// The setTimer function starts and stops the timer and triggers endGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      gameTimer.textContent = timerCount + " seconds left";
      startButton.disabled = true;
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

// QUESTION PAGES
function renderQuestion1() {
    // Hide the start button and P text
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
        
    // Render the question
    questionElement.innerHTML = "What operator is used to assign a value to a declare variable?";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "Equal sign (=)";
    // Answer 2
    answerButton2.innerHTML = "Question mark (?)";
    // Answer 3
    answerButton3.innerHTML = "Double-equal (==)";
    // Answer 4
    answerButton4.innerHTML = "Colon (:)"; 
    
    // event listenenr for user answer
    answerButton1.addEventListener("click", correctAnswer);
    answerButton1.addEventListener("click", renderQuestion2);
    answerButton2.addEventListener("click", wrongAnswer);
    answerButton2.addEventListener("click", renderQuestion2);
    answerButton3.addEventListener("click", wrongAnswer);
    answerButton3.addEventListener("click", renderQuestion2);
    answerButton4.addEventListener("click", wrongAnswer);
    answerButton4.addEventListener("click", renderQuestion2);
}

function renderQuestion2() {   
    // Render the question
    questionElement.innerHTML = "How do we declare a conditional statement in JavaScript?";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "difference...between";
    // Answer 2
    answerButton2.innerHTML = "for loop";
    // Answer 3
    answerButton3.innerHTML = "if...else";
    // Answer 4
    answerButton4.innerHTML = "while loop"; 
    
    // remove previous event listeners before adding new listeners
    removeEventListener("click", answerButton1);
    removeEventListener("click", answerButton2);
    removeEventListener("click", answerButton3);
    removeEventListener("click", answerButton4);


    // event listenenr for user answer
    answerButton1.addEventListener("click", wrongAnswer);
    answerButton1.addEventListener("click", renderQuestion3);
    answerButton2.addEventListener("click", wrongAnswer);
    answerButton2.addEventListener("click", renderQuestion3);
    answerButton3.addEventListener("click", correctAnswer);
    answerButton3.addEventListener("click", renderQuestion3);
    answerButton4.addEventListener("click", wrongAnswer);
    answerButton4.addEventListener("click", renderQuestion3);
}

function renderQuestion3() {   
    // Render the question
    questionElement.innerHTML = "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "0";
    // Answer 2
    answerButton2.innerHTML = "2";
    // Answer 3
    answerButton3.innerHTML = "1";
    // Answer 4
    answerButton4.innerHTML = "3"; 

    // remove previous event listeners before adding new listeners
    removeEventListener("click", answerButton1);
    removeEventListener("click", answerButton2);
    removeEventListener("click", answerButton3);
    removeEventListener("click", answerButton4);
    
    // event listenenr for user answer
    answerButton1.addEventListener("click", wrongAnswer);
    answerButton1.addEventListener("click", renderQuestion4);
    answerButton2.addEventListener("click", wrongAnswer);
    answerButton2.addEventListener("click", renderQuestion4);
    answerButton3.addEventListener("click", correctAnswer);
    answerButton3.addEventListener("click", renderQuestion4);
    answerButton4.addEventListener("click", wrongAnswer);
    answerButton4.addEventListener("click", renderQuestion4);
}

function renderQuestion4() {   
    // Render the question
    questionElement.innerHTML = "How do we stop a loop from from repeating indefinitely?";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "When we have iterated through half of the condition.";
    // Answer 2
    answerButton2.innerHTML = "We have to explicitly end the loop with the break keyword.";
    // Answer 3
    answerButton3.innerHTML = "A loop will stop executing when the condition is true.";
    // Answer 4
    answerButton4.innerHTML = "A loop will stop executing when the condition is false."; 

    // remove previous event listeners before adding new listeners
    removeEventListener("click", answerButton1);
    removeEventListener("click", answerButton2);
    removeEventListener("click", answerButton3);
    removeEventListener("click", answerButton4);
    
    // event listenenr for user answer
    answerButton1.addEventListener("click", wrongAnswer);
    answerButton1.addEventListener("click", renderQuestion5);
    answerButton2.addEventListener("click", wrongAnswer);
    answerButton2.addEventListener("click", renderQuestion5);
    answerButton3.addEventListener("click", wrongAnswer);
    answerButton3.addEventListener("click", renderQuestion5);
    answerButton4.addEventListener("click", correctAnswer);
    answerButton4.addEventListener("click", renderQuestion5);
}

function renderQuestion5() {   
    // Render the question
    questionElement.innerHTML = "What are the two types of scope JavaScript uses?";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "Outside and Inside";
    // Answer 2
    answerButton2.innerHTML = "Global and Local";
    // Answer 3
    answerButton3.innerHTML = "Surrounding and Inner";
    // Answer 4
    answerButton4.innerHTML = "Abroad and Local"; 

    // remove previous event listeners before adding new listeners
    removeEventListener("click", answerButton1);
    removeEventListener("click", answerButton2);
    removeEventListener("click", answerButton3);
    removeEventListener("click", answerButton4);
    
    // event listenenr for user answer
    answerButton1.addEventListener("click", wrongAnswer);
    answerButton1.addEventListener("click", renderQuestion6);
    answerButton2.addEventListener("click", correctAnswer);
    answerButton2.addEventListener("click", renderQuestion6);
    answerButton3.addEventListener("click", wrongAnswer);
    answerButton3.addEventListener("click", renderQuestion6);
    answerButton4.addEventListener("click", wrongAnswer);
    answerButton4.addEventListener("click", renderQuestion6);
}

function renderQuestion6() {   
    // Render the question
    questionElement.innerHTML = "What is an object method?";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "An array saved inside of an object";
    // Answer 2
    answerButton2.innerHTML = "A function that takes an object for an argument";
    // Answer 3
    answerButton3.innerHTML = "Keys in an object that have a number assigned to it";
    // Answer 4
    answerButton4.innerHTML = "A function associated with an object"; 

    // remove previous event listeners before adding new listeners
    removeEventListener("click", answerButton1);
    removeEventListener("click", answerButton2);
    removeEventListener("click", answerButton3);
    removeEventListener("click", answerButton4);
    
    // event listenenr for user answer
    answerButton1.addEventListener("click", wrongAnswer);
    answerButton1.addEventListener("click", renderQuestion7);
    answerButton2.addEventListener("click", wrongAnswer);
    answerButton2.addEventListener("click", renderQuestion7);
    answerButton3.addEventListener("click", wrongAnswer);
    answerButton3.addEventListener("click", renderQuestion7);
    answerButton4.addEventListener("click", correctAnswer);
    answerButton4.addEventListener("click", renderQuestion7);
}

function renderQuestion7() {   
    // Render the question
    questionElement.innerHTML = "How do we access a value stored in an object?";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "Dot notation, Bracket notation";
    // Answer 2
    answerButton2.innerHTML = "Dot notation, Curl bracket notation";
    // Answer 3
    answerButton3.innerHTML = "Period notation, Square bracket notation";
    // Answer 4
    answerButton4.innerHTML = "Equal notation, Abstract notation"; 

    // remove previous event listeners before adding new listeners
    removeEventListener("click", answerButton1);
    removeEventListener("click", answerButton2);
    removeEventListener("click", answerButton3);
    removeEventListener("click", answerButton4);
    
    // event listenenr for user answer
    answerButton1.addEventListener("click", correctAnswer);
    answerButton1.addEventListener("click", renderQuestion8);
    answerButton2.addEventListener("click", wrongAnswer);
    answerButton2.addEventListener("click", renderQuestion8);
    answerButton3.addEventListener("click", wrongAnswer);
    answerButton3.addEventListener("click", renderQuestion8);
    answerButton4.addEventListener("click", wrongAnswer);
    answerButton4.addEventListener("click", renderQuestion8);
}

function renderQuestion8() {   
    // Render the question
    questionElement.innerHTML = "From the reason listed below which is NOT true about JavaScript.";
  
    // Render the answer buttons
    // Answer 1
    answerButton1.innerHTML = "JavaScript increases interactivity of our websites.";
    // Answer 2
    answerButton2.innerHTML = "JavaScripts handles numbers better than most programming languages.";
    // Answer 3
    answerButton3.innerHTML = "JavaScript lets provide the user immediate feedback upon an action.";
    // Answer 4
    answerButton4.innerHTML = "Javascript allows developers to create richer interfaces for the users."; 

    // remove previous event listeners before adding new listeners
    removeEventListener("click", answerButton1);
    removeEventListener("click", answerButton2);
    removeEventListener("click", answerButton3);
    removeEventListener("click", answerButton4);
    
    // event listenenr for user answer
    answerButton1.addEventListener("click", wrongAnswer);
    answerButton1.addEventListener("click", endGame);
    answerButton2.addEventListener("click", correctAnswer);
    answerButton2.addEventListener("click", endGame);
    answerButton3.addEventListener("click", wrongAnswer);
    answerButton3.addEventListener("click", endGame);
    answerButton4.addEventListener("click", wrongAnswer);
    answerButton4.addEventListener("click", endGame);
}

function correctAnswer() {
    userScore + 10;
    console.log(scoreCounterTotal);
    previousResult.classList.remove("hide");
    previousResult.innerHTML = "Correct!";
}

function wrongAnswer() {
    timerCount = timerCount -10;
    userScore -5;
    console.log(scoreCounterTotal);
    previousResult.classList.remove("hide");
    previousResult.innerHTML = "Wrong!";
}


// END GAME SCREEN
function endGame() {
    questionScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    scoreCounterTotal = userScore;
    finalScore.innerHTML = "You have scored: " + scoreCounterTotal
    
    // Submit button for name and score
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
      
        var name = document.querySelector("#name").value;
        var finalScore = scoreCounterTotal.value;
      
        if (name === "") {
          window.alert("Name cannot be blank");
        } else {
      
          localStorage.setItem("name", name);
          localStorage.setItem("score", finalScore);
          highScores();
        }
    });
  }

// HIGHSCORES
highScoreScreen.addEventListener("click", highScores);

function highScores() {
    startScreen.classList.add("hide");
    endScreen.classList.add("hide");
    highScorePage.classList.remove("hide");
}


