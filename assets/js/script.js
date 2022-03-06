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
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var initInput = document.createElement("input");
var initButton = document.createElement("button")
var initSection = document.createElement("p")
var goBackButton = document.createElement("button")
var deleteButton = document.createElement("button")
var Answers = document.createElement("ol");
var Scorelist = document.createElement("ol")
Answers.setAttribute("id", "Answers");
Scorelist.setAttribute("id", "Scorelist")
li1.setAttribute("id", "li1");
li2.setAttribute("id", "li2");
li3.setAttribute("id", "li3");
li4.setAttribute("id", "li4");
li1.setAttribute("class", "list");
li2.setAttribute("class", "list");
li3.setAttribute("class", "list");
li4.setAttribute("class", "list");
initInput.setAttribute("type", "text");
initInput.setAttribute("id", "initInput");
initButton.setAttribute("id", "initBtn");
initSection.setAttribute("id", "initSection");
goBackButton.setAttribute("id", "gobackBtn");
deleteButton.setAttribute("id", "deleteBtn");

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
var HighScores = []

function init() {

    Head.textContent = "Coding Quiz Challenge"
    Writing.textContent = "Try to answer the following coding-related questions within the time limit. Keep in mind that incorrect answers will penalize your Score/Time by 10 Seconds!"
    Writing.style.visibility = "visible"
    StartButton.style.visibility = "visible"
    goBackButton.remove();
    deleteButton.remove()
    Scorelist.remove();
    i = 0
    timeLeft = 75
    Score = 0
}

function startQuiz() {
    timer();

    Head.textContent = Quiz[i].Q
    Writing.style.visibility = "hidden"
    StartButton.style.visibility = "hidden";
    container.append(Answers)
    Answers.append(li1, li2, li3, li4)
    li1.textContent = Quiz[i].a1
    li2.textContent = Quiz[i].a2
    li3.textContent = Quiz[i].a3
    li4.textContent = Quiz[i].a4
};

function setScores() {
    Name = initInput.value.trim();

    HighScores[HighScores.length] = {
        initials: Name,
        score: Score
    };

    if (HighScores.length > 1) {
        HighScores.sort(function(a,b) {
            return b.score-a.score; 
        });
    }
    localStorage.setItem("HighScores", JSON.stringify(HighScores));
}

function endQuiz() {
    Head.textContent = "All Done!"
    Writing.textContent = "Your final score is " + Score + " with " + timeLeft + " seconds left on the clock!"
    Writing.appendChild(initSection)
    Writing.appendChild(initInput)
    Writing.appendChild(initButton)
    initSection.textContent = "Please enter your initials to store your score!"
    initButton.textContent = "Submit"
    li1.remove()
    li2.remove()
    li3.remove()
    li4.remove()
}

function timer() {
    var timeInterval = setInterval(function() {

        if (i >= Quiz.length) {
            clearInterval(timeInterval)
            timerEl.textContent = "Time: 0"
        } else if (timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (i >= Quiz.length) {
            clearInterval(timeInterval)
        } else {
            timerEl.textContent = "Time: 0";
            endQuiz();
            clearInterval(timeInterval);
        }
    }, 1000);

}

function scoreScreen() {
    Scorelist.innerHTML = ""
    var storedScores = JSON.parse(localStorage.getItem("HighScores"));
    Head.textContent = "High Scores!"
    Writing.style.visibility = "hidden"
    StartButton.style.visibility = "hidden"
    container.append(Scorelist)
    Answers.remove();

    for (var j = 0; j < storedScores.length; j++) {
    
        var scorelist = document.createElement("li");
        scorelist.textContent = storedScores[j].initials + " " + storedScores[j].score;
        scorelist.setAttribute("data-index", j);
        scorelist.setAttribute("class", "list")
        
        Scorelist.appendChild(scorelist);
    }

    container.append(goBackButton)
    container.append(deleteButton)
    goBackButton.textContent = "Go Back"
    deleteButton.textContent = "Delete High Scores"

}
//  This event listener is what triggers the start of the quiz, after this everything is handled by the next event listener
StartButton.addEventListener("click", function(event) {
    event.stopPropagation();

    startQuiz();
});
// This event listener is what runs the majority of the quiz including switching all the questions and answers as well as checking if the answer was right or wrong
Answers.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target;

    if (element.matches("li")) {
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
    }
}
});
// This event listener is what triggers the switch to the high scores page as well as storing the users name and high score
Writing.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target

    if(element.matches("button")) {
        setScores();
        scoreScreen();
    }
})

ScoreButton.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target

    if (element.matches("button")) {
        scoreScreen();
    }
});

goBackButton.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target

    if (element.matches("button")) {
        init();
    }
});

deleteButton.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target

    if (element.matches("button")) {
        localStorage.clear();
    }
})

init();