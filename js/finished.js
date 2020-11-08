console.log("hello!")

// current highscore displayed in code using line 15
$('#myModal').modal('show');
// history of highscore using local storage  


var scoreEl = document.querySelector("#score-list");

function loadScore() {
  scoreArray = localStorage.scoreArray ? JSON.parse(localStorage.scoreArray) : [];
  console.log(`Line 13- Score Array: `, scoreArray)
  document.querySelector("#finalScore").innerHTML = scoreArray[scoreArray.length - 1]

  for (let i = 0; i < scoreArray.length; i++) {
    scoreEl.innerHTML += '<p>' + scoreArray[i] + '</p>'
  }
}
loadScore();

//clearAll function clears the scoreArray using local storage
function clearAll() {
  localStorage.clear();
  document.querySelector("#score-list").innerHTML = ""
  scoreArray = []
}

