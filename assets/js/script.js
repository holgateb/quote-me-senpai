pullQuestionData();

function pullQuestionData() {

    fetch(`https://animechan.vercel.app/api/quotes`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        printQuestionData(data);
    })
}

function printQuestionData(data) {
    var answerList = [];
    var answerItem = {};
    console.log(data);
    console.log("Anime Title: " + data[0].anime);
    console.log("Anime Quote: " + data[0].quote);
    console.log("Correct Answer: " + data[0].character);
    answerItem = {
        character: data[0].character,
        answer: true
        };
    answerList.push(answerItem);
    console.log("Wrong Answer 1: " + data[1].character);
    answerItem = {
        character: data[1].character,
        answer: false
        };
    answerList.push(answerItem);
    console.log("Wrong Answer 2: " + data[2].character);
    answerItem = {
        character: data[2].character,
        answer: false
        };
    answerList.push(answerItem);
    console.log("Wrong Answer 3: " + data[3].character);
    answerItem = {
        character: data[3].character,
        answer: false
        };
    answerList.push(answerItem);
    console.log(JSON.parse(JSON.stringify(answerList)));





var i = answerList.length, k , temp;      // k is to generate random index and temp is to swap the values
   while(--i > 0){
      k = Math.floor(Math.random() * (i+1));
      temp = answerList[k];
      answerList[k] = answerList[i];
      answerList[i] = temp;
   }
   console.log(JSON.parse(JSON.stringify(answerList)));