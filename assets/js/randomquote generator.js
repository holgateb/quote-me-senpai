var questionTag = document.getElementById("question");
var displayQuestionEl = document.getElementById("questionpanel");
var correctAnswerEl = document.getElementById("btn-2");
var answer1OptionEl =document.getElementById("btn-1");
var answer3OptionEl =document.getElementById("btn-3");
var answer4OptionEl =document.getElementById("btn-4");


 pullRandomQuotes();

function pullRandomQuotes() {

    var requestUrl ='https://animechan.vercel.app/api/random';
    fetch(requestUrl)
       .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        processQuizItems(data);
    })

}

function processQuizItems(data) {

    var i =0;
    i = i+1;
    displayQuestionEl.innerHTML = data.quote;
    answerQuestion(data);

}

var animeName = ['Inuyasha','FaiFlowright','Satashi','AmuroRay','Momoko','Chibiusa','Masahiro','Rogue','Sora','Kouta','RoyRiza','KingBradley','Ally','TōtōsaiKaede']
                
function shuffle(array) {
                array.sort(()=>Math.random()-.5);
                   }

function answerQuestion(data){
    console.log(data);
    correctAnswerEl.innerHTML = data.character;
   for (var i =0 ; i <= 4 ; i++){
    shuffle(animeName);
    answer1OptionEl.innerHTML = animeName[i];
    answer3OptionEl.innerHTML = animeName[i+1];
     answer4OptionEl.innerHTML = animeName[i+3];

   }
}