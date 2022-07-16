// alert('JS File is connected');

var answersEl = document.getElementById("answers");
var quoteEl = document.getElementById("quote");
var winStreakEl = document.getElementById("winStreak");
var bestWinStreakEl = document.getElementById("bestWinStreak");
var winStreak = 0;
var bestWinStreak = (localStorage.getItem("bestWinStreak"));
if(bestWinStreak === null) {
    bestWinStreak = 0;
}
bestWinStreakEl.textContent = bestWinStreak;

$( document ).ready(function() {
    $('.modal').modal();
    $('#modal1').on('click', function() {
    });
  });

//   Event trigger for dropdown menu
  $('.dropdown-trigger').dropdown();

//   Test variable so I don't use up my API hourly requests
var test = [
    {"anime":"Gintama","character":"Gintoki Sakata","quote":"It's often said, \"People who are similar can be called friends\", right? You haven't been making a good life for yourself, have you? Well, I guess I'm no better.. People don't try to make a life that they can't be proud of... They have the intention of staying on the straight path, but out of blue, they're in the dirt. But, even so, with heart and soul you try to brake through. There will be a day, that even dirt will dry and fall off.\n\n(Gintoki to Catherine\n\"Gintama chapter 24, page 19\")"},
    {"anime":"Shinsekai Yori","character":"Shinsekai Yori","quote":"The power of imagination is what changes everything."},
    {"anime":"Death Note","character":"Ryuk","quote":"Humans are so... interesting."},
    {"anime":"Denpa Kyoushi","character":"Shikishima Kiriko","quote":"Getting kicked out of school won't kill me, but losing my way of life most certainly will."},
    {"anime":"Howl's Moving Castle","character":"Howl","quote":"Sorry, I've had enough of running away, Sophie. Now I've got something I want to protect. It's you."},
    {"anime":"Naruto","character":"Kiba Inuzuka","quote":"It's not bad enough they buried us alive in the oversized dung heap, but now they're stealing our chakra. You gotta give these guys credit for thoroughness!"},
    {"anime":"Umineko no Naku Koro ni","character":"Ushiromiya George","quote":"You need three types of power to control the world. One is influence. One is wealth. The third is... force."},
    {"anime":"Solanin","character":"Kato Kenichi","quote":"When you lose something, you gotta find something to take its place. I guess it's just time... for me to move forward for once."},
    {"anime":"Naruto","character":"Kisame Hoshigaki","quote":"[after learning Guy Sensei's name. Might Guy] Yeah, mighty stupid looking guy!"},
    {"anime":"Gakuen Alice","character":"Mikan Sakura","quote":"To me, death is not the scariest thing at all."}
];

pullRandomQuotes();

function pullRandomQuotes() {

    // fetch(`https://animechan.vercel.app/api/quotes`)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     processQuizItems(data);
    // })

    processQuizItems(test);
}

function processQuizItems(data) {
    // Declare Variables
    var chosenQuote = "";
    var answerList = [];
    var answerItem = {};
    var i = 0;
    // Loop through data, changing quiz question to each quote until the received quote is between 0 and 150 characters in length
    do {
        chosenQuote = data[i].quote
        i = i + 1;
    } while (chosenQuote.length = 0 || chosenQuote.length >= 150 );
    // Find the index of the question that was chosen
    var indexOfObject = data.findIndex(data => {
        return data.quote === chosenQuote;
      });
    // Create the first potential answer based on the character name and anime title and set it as the true answer
    answerItem = {
        text: (data[indexOfObject].character + " from: " + data[indexOfObject].anime),
        answer: true
        };
    var correctAnswer = data[indexOfObject].character
    // Remove the selected quote object from the overall array of potential quotes
    data.splice(indexOfObject, 1);
    // Push first answer object to list of answers
    answerList.push(answerItem);
    // Loop over remaining quotes data creating false answers, skipping answers already in the list and deleting answers that exceed total list length of 4 answers
    data.forEach(function(data) {
        if(!answerList.some(e => e.text === (data.character + " from: " + data.anime))) {
            answerItem = {
                text: (data.character + " from: " + data.anime),
                answer: false
            };
            answerList.push(answerItem);
            if (answerList.length > 4) {
                answerList.length = 4;
            }
        }   
    });
    // Shuffle answer list
    var i = answerList.length, k , temp;      // k is to generate random index and temp is to swap the values
    while(--i > 0){
        k = Math.floor(Math.random() * (i+1));
        temp = answerList[k];
        answerList[k] = answerList[i];
        answerList[i] = temp;
    }

    printQuiz(chosenQuote, answerList);
}

function printQuiz(quote, answers) {
    quoteEl.innerHTML = "";
    quoteEl.innerHTML = `<h2 class="center-align">${quote}</h2>`
    answersEl.innerHTML = "";
    answers.forEach(function(data) {
        answersEl.innerHTML += `<button style="text-transform:none" class="btn" data-answer="${data.answer}">${data.text}</button>` 
    });
};

// Adds event listener to to answers Div
answersEl.addEventListener("click", answerResponse)

// On clicking inside answers div, if the target has a class of button it'll check the dataset value for answer and respond with whether it's correct or wrong.
function answerResponse(event) {
    if(event.target.matches(".btn")){
        if(event.target.dataset.answer === "true"){
            // Increases win streak value
            winStreak = (winStreak + 1);
            console.log("Win Streak is: " + winStreak);
            // Prints new win streak to page
            winStreakEl.textContent = winStreak;
            // What to do if current win streak is higher than recorded best win streak
            if(winStreak > bestWinStreak) {
                // sets user's best win streak to current win streak
                bestWinStreak = winStreak;
                // stores best win streak to local storage
                localStorage.setItem("bestWinStreak", bestWinStreak);
                // prints new best win streak to page
                bestWinStreakEl.textContent = bestWinStreak;
                M.toast({html: 'New Best Win Streak!', classes: 'rounded'})
            }
            // To be replaced by correct answer modal
            alert("Correct Answer!")
        } else if(event.target.dataset.answer === "false"){
            // Set win streak back to 0
            winStreak = 0;
            console.log("Win Streak is: " + winStreak);
            winStreakEl.textContent = winStreak;
            // to be replaced by wrong answer modal
            alert("Wrong Answer!")
        }
    }
};

