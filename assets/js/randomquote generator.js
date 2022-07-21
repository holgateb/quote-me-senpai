var questionTag = document.getElementById("question");
var displayQuestionEl = document.getElementById("questionpanel");
var animedisplayEl = document.getElementById("anime");
var characterdisplayEl = document.getElementById("character")

pullRandomQuotes();

//   Event trigger for dropdown menu
$('.dropdown-trigger').dropdown();

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

    if (data.quote.length >= 145){
        //console.log("hello");
        pullRandomQuotes();  
    }
    else{
        displayQuestionEl.innerHTML=data.quote;
        animedisplayEl.innerHTML = "Anime Name : " +  data.anime;
        characterdisplayEl.innerHTML = "Character : " + data.character;

        //console.log(data.quote);    
    }

}  

function screenshot() {
    html2canvas(document.querySelector("#quotesection")).then(canvas => {
    $('#blank').attr('href', canvas.toDataURL("image/jpg"));
    $('#blank').attr("download", "quote.jpg");
    $('#blank')[0].click();
    });
};

