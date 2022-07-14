var startBtn = document.querySelector('#startButton')
var startEl = document.querySelector('#start')
var mainEl = document.querySelector('#main')

function startGame() {
    //hide the main page
    startEl.classList.add("hide");
    //show the quiz start screen
    mainEl.classList.remove("hide");
};

//Event listener for button to run function startGame
startBtn.addEventListener('click', startGame);