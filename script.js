var questionList = [
    // Array of questions, options, and answers
    {
        questionIndex: 0,
        questionProblem: "Commonly used data types DO NOT include: ",
        questionOption: ["strings", "booleans", "alerts", "numbers"],
        questionAnswer: "alerts"
    },
    {
        questionIndex: 1,
        questionProblem: "The condition in an if / else statement is enclosed within ___. ",
        questionOption: ["quotes", "curly brackets", "parentheses", "square brackets"],
        questionAnswer: "curly brackets"
    },
    {
        questionIndex: 2,
        questionProblem: "Arrays in JavaScript can be used to store ___.",
        questionOption: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        questionAnswer: "all of the above"
    },
    {
        questionIndex: 3,
        questionProblem: "String values must be enclosed within ___ when being assigned to variables.",
        questionOption: ["commas", "curly brackets", "quotes", "parentheses"],
        questionAnswer: "quotes"
    },
    {
        questionIndex: 4,
        questionProblem: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        questionOption: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        questionAnswer: "console.log"
    },
];


// Starting page elements
var contentFront = document.getElementById("contentFront");
var buttonStart = document.getElementById("buttonStart");

// Questions elements
var questionDisplay = document.getElementById("questionDisplay");
var questionIndex = 0;

// Hides quiz content by default
optionDisplay0.setAttribute("style", "display: none");
optionDisplay1.setAttribute("style", "display: none");
optionDisplay2.setAttribute("style", "display: none");
optionDisplay3.setAttribute("style", "display: none");

// Quiz end elements
var end = document.getElementById("end");

// Hides quiz end content by default
end.setAttribute("style", "display:none");


// Option selection placeholder
var optionSelected = "";

// Total points placeholder
var pointsIndex = 0;

var timer = document.getElementById("timer")
var timeIndex = 60;


function timerStart() {


    clearTimeout
}


// Starts quiz, executed by start button
function quizStart() {
    // Hides sub-heading text and button on front page
    contentFront.style.display = "none";


    // Displays question on front page
    questionDisplay.setAttribute("style", "display:visible");
    // Displays options on front page
    optionDisplay0.setAttribute("style", "display:visible");
    optionDisplay1.setAttribute("style", "display:visible");
    optionDisplay2.setAttribute("style", "display:visible");
    optionDisplay3.setAttribute("style", "display:visible");
    // Fetches the questions that are to be displayed
    questionFetch(questionIndex);
}


function questionFetch() {
    questionDisplay.textContent = questionList[questionIndex].questionProblem;

    // Options for quiz
    var optionDisplay0 = document.getElementById("optionDisplay0");
    var optionDisplay1 = document.getElementById("optionDisplay1");
    var optionDisplay2 = document.getElementById("optionDisplay2");
    var optionDisplay3 = document.getElementById("optionDisplay3");

    optionDisplay0.textContent = questionList[questionIndex].questionOption[0];
    optionDisplay1.textContent = questionList[questionIndex].questionOption[1];
    optionDisplay2.textContent = questionList[questionIndex].questionOption[2];
    optionDisplay3.textContent = questionList[questionIndex].questionOption[3];

    // Event listener for selecting an options
    optionDisplay0.addEventListener("click", () => {
        optionSelected = questionList[questionIndex].questionOption[0].value;
        optionCheck();
    });
    optionDisplay1.addEventListener("click", () => {
        optionSelected = questionList[questionIndex].questionOption[1].value;
        optionCheck();
    });
    optionDisplay2.addEventListener("click", () => {
        optionSelected = questionList[questionIndex].questionOption[2].value;
        optionCheck();
    });
    optionDisplay3.addEventListener("click", () => {
        optionSelected = questionList[questionIndex].questionOption[3].value;
        optionCheck();
    });
}


function optionCheck() {
    // If the correct option is selected
    if (optionSelected == questionList.questionAnswer) {
        // Proceeds to next question set
        questionIndex += 1;
        // Points added
        pointsIndex += 20;
        // Show next question with new questionIndex
        questionDisplay.textContent = questionList[questionIndex].questionProblem;
    } else if (questionIndex == 5) {
        // After the 5th question quiz ends
        quizEnd();
    } else {

        questionIndex += 1;
        // Time penalty for incorrect answer
        // timeIndex -= 5;
    }
}


// Quiz ending
function quizEnd() {
    // Hides quiz
    optionDisplay0.setAttribute("style", "display:none");
    optionDisplay1.setAttribute("style", "display:none");
    optionDisplay2.setAttribute("style", "display:none");
    optionDisplay3.setAttribute("style", "display:none");
    questionDisplay.setAttribute("style", "display:none");

    end.setAttribute("style", "display:visible");
}


// Event listener for start button to start quiz
buttonStart.addEventListener("click", quizStart);
