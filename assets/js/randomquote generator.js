var questionTag = document.getElementById("question");
var displayQuestionEl = document.getElementById("questionpanel");
// var correctAnswerEl = document.getElementById("btn-2");
// var answer1OptionEl =document.getElementById("btn-1");
// var answer3OptionEl =document.getElementById("btn-3");
// var answer4OptionEl =document.getElementById("btn-4");
var animedisplayEl = document.getElementById("anime");
var characterdisplayEl = document.getElementById("character")

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
    console.log(data);

    var i =0;
    //i = i+1;
   // displayQuestionEl.innerHTML = data.quote;
    //console.log(data.quote.length);

    if (data.quote.length >= 145){
        //console.log("hello");
        return;   
    }
    else{
        displayQuestionEl.innerHTML=data.quote;
        animedisplayEl.innerHTML = "Anime : " +  data.anime;
        characterdisplayEl.innerHTML = "Character : " + data.character;

        //console.log(data.quote);    
    }

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