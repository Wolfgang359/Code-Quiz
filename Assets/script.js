var jumbotron = document.getElementById("jumbotron");
var mainBtns = jumbotron.querySelectorAll("button");
var progressBtn = document.getElementById("progressBtn");
var questionSpace = document.getElementById("question");
var answerSpace = document.getElementById("answerSpace");
var headerHide = document.getElementById("header-div");
var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");
var scoreSpace = document.getElementById("scoreSpace");
var scoreInfo = document.getElementById("scoreInfo");
var timer = document.getElementById("timer");
var leaderBoard = document.getElementById("TotalLeaderBoard")
var saveScoreBtn = document.getElementById("saveScore");

var answerBtns = document.querySelectorAll(".button");
var btn1 = document.getElementById("option1");
var btn2 = document.getElementById("option2");
var btn3 = document.getElementById("option3");
var btn4 = document.getElementById("option4");

var highScores = JSON.parse(localStorage.getItem("Leaderboard")) || [];

var timeInterval;
var clicks = 0;
var timeLeft;
var score = 0;



var possibleQuestions = [
    "Filling space here",
    {
        question: "What are the key languages of web development?",
        options: ["HTML, C++, and Python", "HTML, CSS, and Python", "HTML, CSS, and Javascript", "HTML, C#, and Javascript"],
        correctAnswer: "HTML, CSS, and Javascript"
    },
    {
        question: "What is the MOST specific CSS selector?",
        options: ["Class", "ID", "Element", "Attribute"],
        correctAnswer: "ID"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Number", "Boolean", "Variable", "Object"],
        correctAnswer: "Variable"
    },
    {
        question: "What does NaN stand for?",
        options: ["Not a number", "No anchovies, nope!", "Number and notification", "Why do you keep asking me stupid questions?"],
        correctAnswer: "Not a number"
    },
    {
        question: "How often should you use === instead of == or = ?",
        options: ["Never use ===", "Only use =", "If you can help it, avoid =", "ALWAYS USE ==="],
        correctAnswer: "ALWAYS USE ==="
    },
    {
        question: "What is the most popular FRONT-end open source toolkit?",
        options: ["BootStrap", "SneakerStrap", "JQuery", "StrapLife"],
        correctAnswer: "BootStrap"
    },
    {
        question: "What is the most pupular BACK-end open source toolkit?",
        options: ["BootStrap", "JQuery", "HQuestion", "GQuery"],
        correctAnswer: "JQuery"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hello, Today's Market Language!", "Healthy Torque Makes Legacies", "Hyper Text Markup Language", "Hard To Make Lasagna"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Cement Sticks Severely", "Crayons Smell Scinitllating", "Creeps Stalk Seriously"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "How many HTML Header numbers are there?",
        options: ["7", "10", "3", "6"],
        correctAnswer: "6"
    }
]

function startTimer(start) {
    timeLeft = 121;
    if (start === 0) {
        console.log("The timer is starting.")
        timeInterval = setInterval(function () {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(timeInterval);
                quizEnd();
                console.log("The timer has stopped due to timeout");
            }
        }, 1000);
    } else if (start === 1) {
        clearInterval(timeInterval);
        console.log("The timer has stopped because the user finished the quiz");
    }
}

function updateTimer() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
}

function formatTime(time) {
    return (time >= 10) ? time : `0${time}`;
}

function storeScore(recordScore) {
    var initials = prompt(`Would you like to store your score of ${score} to the leaderboards? If so, put you initials below. If not, carry on!`);
    if (initials === null) {
        alert("Ok, then. Be like that.")
    } else {
        var savedScore = {
            name: initials,
            theirScore: score
        };
        highScores.push(savedScore);
        localStorage.setItem("Leaderboard", JSON.stringify(highScores));
    }
}

function setQuestion() {
    questionSpace.textContent = possibleQuestions[clicks].question;
    for (let i = 0; i < possibleQuestions[clicks].options.length; i++) {
        var option = possibleQuestions[clicks].options[i];
        if (i === 0) {
            btn1.textContent = option;
        } else if (i === 1) {
            btn2.textContent = option;
        } else if (i === 2) {
            btn3.textContent = option;
        } else if (i === 3) {
            btn4.textContent = option;
        };
    };
};

function quizEnd() {
    leaderBoard.classList.add("d-flex");
    timer.classList.remove("d-flex");
    timer.style.display = "none";
    answerSpace.classList.remove("d-flex");
    progressBtn.style.display = "initial";
    progressBtn.textContent = "Take quiz again!";

    scoreInfo.textContent = `You got ${score} out of 10 questions correct, and finished with ${timeLeft} seconds left. That gives you a score of:`;
    questionSpace.textContent = "Your score has been calculated by taking your number of correct questions, and multiplying it by the time you have left. The highest possible score is 1200, and the lowest is 0."

    score = (score * timeLeft);
    scoreSpace.textContent = score;

    alert("The quiz has been completed! Continue to learn your score.")
    clicks = 0;
}

for (const button of answerBtns) {
    button.addEventListener("click", function () {
        if (this.textContent === possibleQuestions[clicks].correctAnswer) {
            score++;
        } else {
            timeLeft = timeLeft - 10;
        }
        console.log(this.textContent);
        console.log(score);
    });
};

saveScoreBtn.addEventListener("click", function () {
    storeScore(score);
});

for (const button of mainBtns) {
    button.addEventListener("click", function () {
        clicks++;
        percent = clicks * 10;
        document.querySelector(".progress-bar").style.width = `${percent}%`;

        if (clicks === 1) {
            leaderBoard.classList.remove("d-flex");
            timer.style.display = "initial";
            score = 0;
            scoreInfo.textContent = " ";
            scoreSpace.textContent = " ";
            headerHide.style.display = "none";
            progressBtn.style.display = "none";
            answerSpace.classList.add("d-flex");
            timer.classList.add("d-flex");
            startTimer(0);
        }

        if (clicks < 11) {
            setQuestion();
        }

        if (clicks === 11) {
            quizEnd();
            startTimer(1);
        }
        console.log(clicks);
        return clicks;
    })
}
