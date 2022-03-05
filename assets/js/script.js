// psuedo coding!

// SETTING UP THE HAVE TOS
// I have to make a website that has a code quiz on it

// I have to build a header element that contains a link to view all highscores and also a timer element that will lose time if an incorrect answer is given

// I have to build a start up screen that users will be greeted with

// On that start up screen will be a section in the middle of the page with a heading, a short description of the quiz and its rules, and lastly a button to start the quiz

// I have to make multiple sets of questions and answers to put into the quiz

// I have to make sure that when you click an answer it checks if that answer is right or wrong and the program will tell the user which it was in an element that will be added to the page below the selectable answers

// I have to make sure that if an incorrect answer is given that the timer will go down by 15 seconds

// I have to make sure that after a choice is made and checked the next set of questions and answers is loaded and the current page is removed

// I have to assign score values to every correct and incorrect answer that will be stored locally in the highscores

// I have to create a function to clear the highscores at the press of a button

// VAR GUIDELINES

// Create a variable for the highscores
// Create a variable for all the questions and answers

var StartButton = document.getElementById("startBtn");
var Head = document.getElementById("heading");
var Writing = document.getElementById("writing");
var ScoreButton = document.getElementById("scoreBtn");
var timerEl = document.getElementById("timer");
var container = document.getElementById("main");
var Answers = document.getElementById("answers");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
li1.setAttribute("id", "li1")
li2.setAttribute("id", "li2")
li3.setAttribute("id", "li3")
li4.setAttribute("id", "li4")

var QA1 = {
    Q: "Commonly used data types DO NOT include:",
    a1: "Strings",
    a2: "Boolean",
    a3: "Alerts",
    a4: "Numbers",
    ca: "Alerts"
};

var QA2 = {
    Q: "The Condition in an if/else statement is enclosed within _____.",
    a1: "Quotes",
    a2: "Curly Brackets",
    a3: "Parentheses",
    a4: "Square Brackets",
    ca: "Parentheses"
};

var QA3 = {
    Q: "Arrays in Javascript can be used to store ______.",
    a1: "Numbers and Strings",
    a2: "Other Arrays",
    a3: "Booleans",
    a4: "All Of The Above",
    ca: "All Of The Above"
};

var QA4 = {
    Q: "String values must be enclosed within _____ when being assigned to variables.",
    a1: "Commas",
    a2: "Curly Brackets",
    a3: "Quotes",
    a4: "Parentheses",
    ca: "Quotes"
};

var QA5 = {
    Q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a1: "Javascript",
    a2: "Terminal/Bash",
    a3: "For Loops",
    a4: "Console Log",
    ca: "Console Log"
};

var Quiz = [QA1, QA2, QA3, QA4, QA5];
var Score = 0
var Name = ""
var i = 0
var timeLeft = 75;

function startQuiz() {
    timer();

    Head.textContent = Quiz[i].Q
    Writing.textContent = ""
    StartButton.style.visibility = "hidden";
    Answers.append(li1, li2, li3, li4)
    li1.textContent = Quiz[i].a1
    li2.textContent = Quiz[i].a2
    li3.textContent = Quiz[i].a3
    li4.textContent = Quiz[i].a4
};

function setScores() {

}

function getScores() {

}

function endQuiz() {
    Head.textContent = "All Done!"
    Writing.textContent = "Your final score is " + Score + " with " + timeLeft + " seconds left on the clock!"

}
function timer() {
    var timeInterval = setInterval(function() {

        if (timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time: 0";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);

}

StartButton.addEventListener("click", function(event) {
    event.stopPropagation();

    startQuiz();
});

Answers.addEventListener("click", function(event) {
    var element = event.target;
    console.log(element.textContent)
    console.log(Quiz[i].ca)
    if (element.textContent === Quiz[i].ca){
        Score+=10
        console.log(Score)
        i++
        if (i >= Quiz.length) {
            endQuiz();
        } else {
        Head.textContent = Quiz[i].Q
        li1.textContent = Quiz[i].a1
        li2.textContent = Quiz[i].a2
        li3.textContent = Quiz[i].a3
        li4.textContent = Quiz[i].a4
        }
        return
    } else if (element.textContent !== Quiz[i].ca) {
        Score-=10
        timeLeft-=10
        console.log(Score)
        i++
        if (i >= Quiz.length) {
            endQuiz();
        } else {
        Head.textContent = Quiz[i].Q
        li1.textContent = Quiz[i].a1
        li2.textContent = Quiz[i].a2
        li3.textContent = Quiz[i].a3
        li4.textContent = Quiz[i].a4
        }
        return
    } else if (element.matches("li") === true) {
        console.log("This works too!")
        i++;
        if (i >= Quiz.length) {
            endQuiz();
        } else {
        Head.textContent = Quiz[i].Q
        li1.textContent = Quiz[i].a1
        li2.textContent = Quiz[i].a2
        li3.textContent = Quiz[i].a3
        li4.textContent = Quiz[i].a4
        }
       return
    }
});
