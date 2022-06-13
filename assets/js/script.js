var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
var secondsLeft = 75;

function startTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    startButton.disabled = true;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  window.alert("Times Up!");
}

startButton.addEventListener("click", startTime);
