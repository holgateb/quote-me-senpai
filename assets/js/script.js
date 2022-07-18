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

// modal functionality script
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

//get random function for modal api and texts uses - ACD

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))]; 
}

var testGifAPI = [
    {"anime_name":"Boku wa Tomodachi ga Sukunai","url":"https://nekos.best/api/v2/slap/013.gif"}
];



function get_successTextAndGif () {
    var array_successText = ["YES!", "I knew you could do it!", "I knew you were a good bet!", "I bet you have a Crunchyroll AND a Funimation account!", "Yeah! Let's get a good streak going!", "Woohoo!" , "Nice job!", "Wow!", "I'm impressed!", "Well done! That was a hard one.", "Let's keep it going!", "Wow! I didn't even know that one!", "You really are an anime fan!", "It was so cool how you got that answer right."];
    var array_successEndpoints = ["highfive", "happy", "thumbsup", "smile", "dance"];

    var modalText = get_random(array_successText);
    var modalGifAPI  = "https://nekos.best/api/v2/"+get_random(array_successEndpoints);
    var modalGif;

    // console.log("modalGif preFetch is: " + modalGif);
    // console.log("modalGifAPI is: " + modalGifAPI);

    fetch(modalGifAPI)
    .then(response => response.json())
    .then(json => modalGif = (json.results[0].url))
    // .then(() => console.log("modalGif postFetch is: " + modalGif))
    .then(function () {
            change_modalTextAndGif (modalText,modalGif);
        });

}

function get_failureTextAndGif () {

    var array_failureTextMocking = ["Wrong.","Nope.","What were you thinking?","Wow! THAT got you?","Guess you skipped cram school.","You couldn't get that one right?","Ha! I knew you couldn't afford Crunchyroll.","I bet you don't even have a Crunchyroll account.","Wow! I bet you watch anime on YouTube.","I bet you think Avatar: The Last Airbender is anime!","Ha! But that was an easy one!"];
    var array_failureTextDisappointed = ["I'm not mad... I'm just disappointed.","I guess I expected too much.","What a pity.","What were you thinking?","I guess you'll have to try again.","I thought you liked anime!","Don't give up...","It's okay, you'll get it next time...","I guess I lost that bet..."];
    var array_failureTextViolent = ["Not even close!","Not this time!","NOPE!","Pathetic!","Not today!","No streak for you!","I knew you were all talk!"];

    var array_failureSubtypes = [array_failureTextMocking,array_failureTextDisappointed,array_failureTextViolent];
    var modalSubtype = get_random(array_failureSubtypes);

    var array_failureEndpointsMocking = ["laugh","stare","baka","bored"];
    var array_failureEndpointsDisappointed = ["pout","facepalm","cry","shrug"];
    var array_failureEndpointsViolent = ["punch","kick","slap"];


    if (modalSubtype === array_failureTextMocking) {
        console.log("modalSubtype === array_failureTextMocking");
        var modalText = get_random(array_failureTextMocking);
        var modalGifAPI  = "https://nekos.best/api/v2/"+get_random(array_failureEndpointsMocking);
        var modalGif;


    } else if (modalSubtype === array_failureTextDisappointed) {
        console.log("modalSubtype === array_failureTextDisappointed");
        var modalText = get_random(array_failureTextDisappointed);
        var modalGifAPI  = "https://nekos.best/api/v2/"+get_random(array_failureEndpointsDisappointed);
        var modalGif;

    } else if (modalSubtype === array_failureTextViolent) {
        console.log("modalSubtype === array_failureTextViolent");
        var modalText = get_random(array_failureTextViolent);
        var modalGifAPI  = "https://nekos.best/api/v2/"+get_random(array_failureEndpointsViolent);
        var modalGif;

    } else {
        console.log("modalSubtype error");

    }

    // console.log("modalGif preFetch is: " + modalGif);
    // console.log("modalGifAPI is: " + modalGifAPI);


    fetch(modalGifAPI)
    .then(response => response.json())
    .then(json => modalGif = (json.results[0].url))
    // .then(() => console.log("modalGif postFetch is: " + modalGif))
    .then(function () {
            change_modalTextAndGif (modalText,modalGif);
        });

}


function change_modalTextAndGif (modalText,modalGif) {
    
    document.getElementById("resultText").innerHTML = modalText;
    document.getElementById("resultGif").src = modalGif;

}
// Adds event listener to to answers Div
answersEl.addEventListener("click", answerResponse)

// On clicking inside answers div, if the target has a class of button it'll check the dataset value for answer and respond with whether it's correct or wrong.
function answerResponse(event) {
    if(event.target.matches(".btn")){
        if(event.target.dataset.answer === "true"){
            //finds success modal text and endpoint & changes modal results
            get_successTextAndGif ();



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

            get_failureTextAndGif ()

            // Set win streak back to 0
            winStreak = 0;
            console.log("Win Streak is: " + winStreak);
            winStreakEl.textContent = winStreak;
            // to be replaced by wrong answer modal
            alert("Wrong Answer!")
        }
    }
};

