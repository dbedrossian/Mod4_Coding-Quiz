const trivia = [

{
    question: "Which instrument is NOT a member of the brass family?",
    answers: [
    {text: "Cornet", correct: false},
    {text: "French Horn", correct: false},
    {text: "Trombone", correct: false},
    {text: "English Horn", correct: true}
    ]
},

{
    question: "Which alto-clef string instrument is considered the middle of the string family?",
    answers: [
        {text: "Violin", correct: false}, 
        {text: "Cello", correct: false}, 
        {text: "Viola", correct: true}, 
        {text: "Bass", correct: false},
    ]
},

{
    question: "Which instrument is considered percussion?",
    answers: [
        {text: "Plucked Cello", correct: false},
        {text: "Muted Trumpet", correct: false},
        {text: "Electric Violin", correct: false},
        {text: "Sustained Piano", correct: true},
    ]
},

{
    question: "Approximately how many musicians make up a standard modern orchestra?",
    answers: [
        {text: "35", correct: false},
        {text: "60", correct: false},
        {text: "100", correct: true},
        {text: "150",correct: false},
    ]
},

{
    question: "Which instrument is NOT a double reed?",
    answers: [
        {text: "Oboe", correct: false},
        {text: "Clarinet", correct: true},
        {text: "Bassoon", correct: false},
        {text: "English Horn",correct: false},
        ]
}
]

// document.getElementById("quiz").style.display = "none";
// document.getElementById("Correct").style.display = "none";
// document.getElementById("Incorrect").style.display = "none";
// document.getElementById("finish").style.display = "none";

// var timeEl = document.querySelector(".timer");
// var secondsLeft = 300;

// document.getElementById("gameStart").addEventListener("click", function startTimer(){
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = 'Points: ' + secondsLeft;
//     document.getElementById("gameStart").style.display = "none";
//     document.getElementById("quiz").style.display = "block";
//     document.getElementById("start-page").style.display = "none";
    
//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//     document.getElementById("finish").style.display = "block";
//     document.getElementById("endMessage").textContent = 'You earned ' + secondsLeft + ' points';
//     document.getElementById("quiz").style.display = "none";

//     }
//   }, 1000);
// });



const startButton = document.getElementById('gameStart')
const startPage = document.getElementById('start-page')
const nextButton = document.getElementById('gameNext')
const questionContainerElement = document.getElementById('quiz')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answerButtons')

var shuffledQuestions
var currentQuestionIndex


startButton.addEventListener('click', startGame)

function startGame(){
    console.log("started");
    startButton.classList.add('hide')
    startPage.classList.add('hide')
    shuffledQuestions = trivia.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState (){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("answers")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function selectAnswer(){

}









// function askQuestion(trivia) {
// for (let i = 0; i < trivia.length; i++)

//     var questions = document.getElementById("questions");
//     questions.textContent = trivia[0].question;

//     var answers = document.querySelectorAll(".answers");
//     answers.forEach(function (element, index) {
//         element.textContent = trivia[0].answers[index];
//     })

// document.querySelector(".no-bullets").addEventListener("click", function(event){
//     if (event.target.textContent === trivia.correctAnswer) {
//         console.log(event.target.textContent);
//     }
// })

// }



