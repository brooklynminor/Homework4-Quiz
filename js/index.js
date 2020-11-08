console.log('loaded');

var timeEl = document.getElementById('time');
var nextBtnEl = document.getElementById('next');
var startBtnEl = document.getElementById('start');
var questionEl = document.getElementById('question');
var finishBtnEl = document.getElementById('finish');
var cardEl = document.querySelector(".card");
var questionNumber = 0

var interval;
var secondsLeft = 31

// array of questions
var questionList = [

  { q: "Which two architects designed the Brooklyn Bridge?", optionA: "a. Le Corbusier & Walter Groius", optionB: "b. Geoff Tompkinson & John Roebling", optionC: "c. Ludwig Mies van der Rohe & Frank Lloyd Wright", optionD: "d. Aldo Rossi & Alvar Aalt", a: "optionB" },
  { q: "When was the bridge opened?", optionA: "a. January 4,1978", optionB: "b. October 13, 1832", optionC: "c. July 20, 1885", optionD: "d. May 24, 1883", a: "optionD" },
  { q: "How long is it?", optionA: "a. 1,595.5 ft.", optionB: "b. 2,891.7 ft", optionC: "c. 1,492.6 ft", optionD: "d. 1.981,5 ft", a: "optionA" },
  { q: "During the nineteenth century, several wire bridges in the United States collapsed, Why?", optionA: "a. Due to war", optionB: "b. Due to high winds.", optionC: "c. Due to malconstruct", optionD: "d. Due to the finacial situation of the economy", a: "optionB" },
  { q: "which river does the brooklyn Bridge rest along?", optionA: "a. North River", optionB: "b. West River", optionC: "c. East River", optionD: "d. South River", a: "optionC" },
];

// start clock with a time of zero
function startClock() {
  interval = setInterval(function () {
    secondsLeft--,
      timeEl.textContent = secondsLeft
    if (secondsLeft < 1) {
      clearInterval(interval);
    }
    if (secondsLeft == 0) {
      alert("Game Over!")
      return
    }
  }, 1000);
};

function askQuestion() {
  if (questionNumber > 4) {

    console.log("finished!")
    let scoreArray = JSON.parse(localStorage.scoreArray || "[]")
    scoreArray.push(score)
    localStorage.scoreArray = JSON.stringify(scoreArray)
    console.log("localStore", localStorage.scoreArray)
    location.replace("finished.html")
    // $('#myModal').on('shown.bs.modal', function () {
    //   $('#myInput').trigger('focus')
    // })
  } else {
    // console.log("First Question")
    questionEl.textContent = questionList[questionNumber].q
    $("#optionA").text(questionList[questionNumber].optionA)
    $("#optionB").text(questionList[questionNumber].optionB)
    $("#optionC").text(questionList[questionNumber].optionC)
    $("#optionD").text(questionList[questionNumber].optionD)
  } 
}

function startBtnEl() {
  if (hide.style.display === "hidden") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }
}

//the timer will decrease by 5 when the user gets an answer wrong
var score = 0;
function checkScore(check) {

  if (questionNumber > 4) {
    console.log("finished!")
  } else if (check == questionList[questionNumber].a) {
    score++
    questionNumber++
    console.log("correct")
    console.log("score: ", score)
    askQuestion()
  } else if (check != questionList[questionNumber].a) {
    secondsLeft -= 5
    questionNumber++
    console.log("incorrect")
    console.log("score: ", score)
    askQuestion()
  }
}

function start() {
  startClock();
  cardEl.style.visibility = "visible";
  askQuestion();
}
startBtnEl.addEventListener( 'click', function(){ console.log( 'running start' ); start(); } );
