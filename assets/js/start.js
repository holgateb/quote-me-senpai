var startBtn = document.querySelector('startBtn')

function startGame(){
    //hide the main page
    hidden.classList.add("hide");
    //show the quiz start screen
    main.classList.remove("hide");
};

startBtn.addEventListener('click', function(startGame));