var questionList = [
    // Array of questions, options, and answers
    {
        questionProblem: "Commonly used data types DO NOT include: ",
        questionOption: ["strings", "booleans", "alerts", "numbers"],
        questionAnswer: "alerts"
    },
    {
        questionProblem: "The condition in an if / else statement is enclosed within ___. ",
        questionOption: ["quotes", "curly brackets", "parentheses", "square brackets"],
        questionAnswer: "curly brackets"
    },
    {
        questionProblem: "Arrays in JavaScript can be used to store ___.",
        questionOption: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        questionAnswer: "all of the above"
    },
    {
        questionProblem: "String values must be enclosed within ___ when being assigned to variables.",
        questionOption: ["commas", "curly brackets", "quotes", "parentheses"],
        questionAnswer: "quotes"
    },
    {
        questionProblem: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        questionOption: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        questionAnswer: "console.log"
    },
];



var timer = document.getElementById("timer");
function timeStart() {

}



var contentFront = document.getElementById("contentFront")
var buttonStart = document.getElementById("buttonStart");

var questionDisplay = document.getElementById("questionDisplay");
var questionIndex = 0;

var optionDisplay = document.getElementById("optionDisplay");

function quizStart() {
    // Sub-heading text and button on front page hidden
    contentFront.style.display = "none";
    questionDisplay.setAttribute("style", "display:visible");
    questionFetch(questionIndex);
}



function questionFetch() {
    questionDisplay.textContent = questionList[questionIndex].questionProblem;


    for (var i = 0; i < questionIndex.questionAnswer.length; i++) {

    }
}





function quizCheck() {

}
function quizEnd() {

}

// Event listener for start button to start quiz
buttonStart.addEventListener("click", quizStart);
