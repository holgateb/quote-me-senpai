var startBtn = document.querySelector('#startButton')
var startEl = document.querySelector('#start')
var answersEl = document.getElementById("answers");
var quoteEl = document.getElementById("quote");
var streakBarEl = document.getElementById("streakBar")
var screenShotBtn = document.getElementById("screenShotBtn")

function startGame() {
    //hide the main page
    startEl.classList.add("hide");
    //show the quiz start screen
    answersEl.classList.remove("hide");
    quoteEl.classList.remove("hide");
    streakBarEl.classList.remove("hide");

    // pullRandomQuotes();
};

//Event listener for button to run function startGame
startBtn.addEventListener('click', startGame);