var trivia = [

{
    question: "Which instrument is NOT a member of the brass family?",
    answers: ["Cornet", "French Horn", "Trombone", "English Horn"],
    correctAnswer: "English Horn",
},

{
    question: "Which alto-clef string instrument is considered the middle of the string family?",
    answers: ["Violin", "Cello", "Viola", "Bass"],
    correctAnswer: "Viola",
},

{
    question: "Which instrument is considered percussion?",
    answers: ["Plucked Cello", "Muted Trumpet", "Electric Violin", "Sustained Piano"],
    correctAnswer: "Sustained Piano",
},

{
    question: "Approximately how many musicians make up a standard modern orchestra?",
    answers: ["35", "60", "100", "150"],
    correctAnswer: "100",
},

{
    question: "Which instrument is NOT a double reed?",
    answers: ["Oboe", "Clarinet", "Bassoon", "English Horn"],
    correctAnswer: "Clarinet",
}
]

document.getElementById("quiz").style.display = "none";
document.getElementById("Correct").style.display = "none";
document.getElementById("Incorrect").style.display = "none";
document.getElementById("finish").style.display = "none";

var timeEl = document.querySelector(".timer");
var secondsLeft = 300;

document.getElementById("gameStart").addEventListener("click", function startTimer(){
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = 'Points: ' + secondsLeft;
    document.getElementById("gameStart").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("start-page").style.display = "none";
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    document.getElementById("finish").style.display = "block";
    document.getElementById("endMessage").textContent = 'You earned ' + secondsLeft + ' points';
    document.getElementById("quiz").style.display = "none";

    }
  }, 1000);
});



// function askQuestion(trivia) {
// for (let i = 0; i < trivia.length; i++)

    var questions = document.getElementById("questions");
    questions.textContent = trivia[0].question;

    var answers = document.querySelectorAll(".answers");
    answers.forEach(function (element, index) {
        element.textContent = trivia[0].answers[index];
    })

document.querySelector(".no-bullets").addEventListener("click", function(event){
    if (event.target.textContent === trivia.correctAnswer) {
        console.log(event.target.textContent);
    }
})

// }



