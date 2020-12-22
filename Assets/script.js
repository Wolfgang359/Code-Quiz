var allBtns = document.querySelectorAll("button");
var progressBtn = document.getElementById("progressBtn");
var questionSpace = document.getElementById("question");
var answerSpace = document.getElementById("answerSpace");
var headerHide = document.getElementById("header-div");
var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");

var answerBtns = document.querySelectorAll(".button");
var btn1 = document.getElementById("option1");
var btn2 = document.getElementById("option2");
var btn3 = document.getElementById("option3");
var btn4 = document.getElementById("option4");

var timeInterval;
var clicks = 0;
var timeLeft = 181;



var possibleQuestions = [
    {
        question: "What are the key languages of web development?",
        options: ["HTML, C++, and Python", "HTML, CSS, and Python", "HTML, CSS, and Javascript", "HTML, C#, and Javascript"],
        correctAnswer: "HTML, CSS, and Javascript"
    },
    {
        question: "What is the answer to life, the universe, and everything in it?",
        options: ["Friends and family", "Forty-two", "Anime and perserverance", "YOUR GINORMOUS MUSCLES!!!"],
        correctAnswer: "Forty-two"
    },
    {
        question: "Question 3",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "Question 4",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "Question 5",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "Question 6",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "Question 7",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "Question 8",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "Question 9",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "Question 10",
        options: ["Option 1", "Option 2", "Option 3", "Opiton 4"],
        correctAnswer: "Option 1"
    }
]






function startTimer(start) {
    timeLeft = 181;
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



function setQuestion() {
    console.log("A question goes here.")
}

function processAnswer() {
    console.log("Your answer is being processed.")
}

function quizEnd() {
    answerSpace.classList.remove("d-flex");
    progressBtn.style.display = "initial";
    progressBtn.textContent = "Take quiz again!";
    alert("You have completed the quiz! Continue to learn your score.")
    clicks = 0;
}



for (const button of allBtns) {
    button.addEventListener("click", function () {
        clicks++;
        percent = clicks * 10;
        document.querySelector(".progress-bar").style.width = `${percent}%`;

        if (clicks === 1) {
            headerHide.style.display = "none";
            progressBtn.style.display = "none";
            answerSpace.classList.add("d-flex");
            startTimer(0);
        }
        if (clicks < 11) {
            setQuestion();
        }

        if (clicks > 1 && clicks < 12) {
            processAnswer();
        }

        if (clicks === 11) {
            startTimer(1);
            quizEnd();
        }
        console.log(clicks);
        return clicks;
    })
}

for (const button of answerBtns) {
    button.addEventListener("click", function () {
        console.log("An answer button has been clicked");
    });
};