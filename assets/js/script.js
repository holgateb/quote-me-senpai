

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

console.log(test);

pullQuestionData();

function pullQuestionData() {

    // fetch(`https://animechan.vercel.app/api/quotes`)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     printQuestionData(data);
    // })

    printQuestionData(test);
}

// function printQuestionData(data) {
//     var answerList = [];
//     var answerItem = {};
//     console.log(data);
//     console.log("Anime Title: " + data[0].anime);
//     console.log("Anime Quote: " + data[0].quote);
//     console.log("Quote length: " + (data[0].quote).length);
//     console.log("Correct Answer: " + data[0].character);
//     answerItem = {
//         character: data[0].character,
//         answer: true
//         };
//     answerList.push(answerItem);
//     console.log("Wrong Answer 1: " + data[1].character);
//     answerItem = {
//         character: data[1].character,
//         answer: false
//         };
//     answerList.push(answerItem);
//     console.log("Wrong Answer 2: " + data[2].character);
//     answerItem = {
//         character: data[2].character,
//         answer: false
//         };
//     answerList.push(answerItem);
//     console.log("Wrong Answer 3: " + data[3].character);
//     answerItem = {
//         character: data[3].character,
//         answer: false
//         };
//     answerList.push(answerItem);
//     console.log("Initial Answers List:")
//     console.log(JSON.parse(JSON.stringify(answerList)));

//     var i = answerList.length, k , temp;      // k is to generate random index and temp is to swap the values
//     while(--i > 0){
//         k = Math.floor(Math.random() * (i+1));
//         temp = answerList[k];
//         answerList[k] = answerList[i];
//         answerList[i] = temp;
//     }
//    console.log("Randomized Answers List:")
//    console.log(JSON.parse(JSON.stringify(answerList)));
// }


function printQuestionData(data) {
    // Declare Variables
    var quizQuestion = "";
    var answerList = [];
    var answerItem = {};
    var i = 0;

    // Loop through data, changing quiz question to each quote until the received quote is between 0 and 150 characters in length
    do {
        quizQuestion = data[i].quote
        console.log(quizQuestion);
        i = i + 1;
    } while (quizQuestion.length = 0 || quizQuestion.length >= 150 );

    // Console log the question that was chosen
    console.log("Chosen quote:")
    console.log(quizQuestion);

    // Find the index of the question that was chosen
    var indexOfObject = data.findIndex(data => {
        return data.quote === quizQuestion;
      });

    console.log(indexOfObject);

    // Create the first potential answer based on the character name and anime title and set it as the true answer
    answerItem = {
        text: (data[indexOfObject].character + " from: " + data[indexOfObject].anime),
        answer: true
        };

    console.log (answerItem);

    // Remove the selected quote object from the overall array of potential quotes
    data.splice(indexOfObject, 1);
    console.log(data);

    // Push first answer object to list of answers
    answerList.push(answerItem);
    console.log(answerList);

    // Loop over remaining quotes data creating false answers, deleting answers that excede total list length of 4 answers
    data.forEach(function(data) {
        answerItem = {
            text: (data.character + " from: " + data.anime),
            answer: false
        };
        answerList.push(answerItem);
        if (answerList.length > 4) {
            answerList.length = 4;
        }
    });

    console.log("Answers List: ")
    console.log(answerList);

    // Shuffle answer list
    var i = answerList.length, k , temp;      // k is to generate random index and temp is to swap the values
    while(--i > 0){
        k = Math.floor(Math.random() * (i+1));
        temp = answerList[k];
        answerList[k] = answerList[i];
        answerList[i] = temp;
    }
    console.log("Randomized Answers List:")
    console.log(answerList);





}

// Throwout any questions that are too long


// historyList.forEach(function (historyItem) {
//     weatherHistoryEl.append(`
//     <div class="col-5 col-md-4 col-lg-10 my-1 px-2">
//     <input class="btn btn-secondary col-12" type="button" data-loc="${historyItem.geo}" value="${historyItem.city}">
//     </div>
//     `);
// })


// function addItemToHistory () {
//     // If searched item is not already located on list, then create Object using searched info
//     if (!historyList.some(e => e.geo === geoLocation)) {
//         var historyItem = {
//             geo: geoLocation,
//             city: cityLocation
//             };each
//         // Attach city object to start of list
//         historyList.unshift(historyItem);
//         // History list is limited to 6 items, removing the last item on the list
//         if (historyList.length > 6) {
//             historyList.length = 6;
//         }
//         // Stores history list to local storage
//         localStorage.setItem("historyList", JSON.stringify(historyList));
//         // Runs function to display search history onto page.
//         populateSearchHistory();
//       }
// }