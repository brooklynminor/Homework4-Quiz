# Homework4-Quiz

## Objective
The purpose of this assignment was to apply fundamental concepts of Javascript to a HTML file, ensuring that the web application is accessible. While the use of Bootstrap elements and a CSS file modify and alter the aesthetical attributes of the browser.

## Key Concepts
Three folders were created to comparmentalize the layout of the app and its functions. Index.html and Finished.html contain links to the script files that are sourced from the directory of the binary JS file. Within the body of the html file contains the Bootstrap elements that are used to display the start button and the four questions the user can choose from. The linked JS file contains the functions that respond to the user’s actions. 

## Algorithms
Index.js contains the functions that respond once an onclick is triggered. The start button activates the timer and displays the first index from an array of questions.
 
 ```
 function start() {
  startClock();
  cardEl.style.visibility = "visible";
  askQuestion();
}
startBtnEl.addEventListener( 'click', function(){ console.log( 'running start' ); start(); } );
```

The addEventListener method attaches an event handler to the document.

```
var startBtnEl = document.getElementById('start')
```

The getElementById method returns an ID attribute value, this method in HTML DOM is used to manipulate and obtain information from an element.

The user has 31 seconds to complete the quiz which has an array of four questions. When the user selects a response that is false the timer decreases by 5 seconds.
```
secondsLeft -= 5
questionNumber++
```
When the user's response is returned as positive the score increases by 1 and the next question is displayed. 
```
score++
questionNumber++
```
JavaScript variables are containers for storing data. A function perfoms a particular task that is executed when invoked. 

The final score of the user is saved to local storage. Local storage saves data and is accessible even after the user has refreshed or redirects to a different page.
```
let scoreArray = JSON.parse(localStorage.scoreArray || "[]")
    scoreArray.push(score)
    localStorage.scoreArray = JSON.stringify(scoreArray)
    console.log("localStore", localStorage.scoreArray)
```
The scores are saved within an array to localStorage and displayed within a Bootstrap card element within the body of Finished.html. 
```
 scoreArray = localStorage.scoreArray ? JSON.parse(localStorage.scoreArray) : [];
 ```
The only way the score can be removed is if the user triggers the onclick function that clears the storage.
```
function clearAll() {
  localStorage.clear();
  document.querySelector("#score-list").innerHTML = ""
  scoreArray = []
}
```

The Finished.html also contains a modal. This modal takes the most recent score from the array and displays the value. The innerHTML property returns the content of an element.
```
document.querySelector("#finalScore").innerHTML = scoreArray[scoreArray.length - 1]
```

For loops can run the same code with a different value each time, and loop through the properties of an object.
```
  for (let i = 0; i < scoreArray.length; i++) {
    scoreEl.innerHTML += '<p>' + scoreArray[i] + '</p>'
  }
```

