
var progressBtn = document.getElementById("progressBtn");
var questionSpace = document.getElementById("question");
var answerSpace = document.getElementById("answerSpace");
var headerHide = document.getElementById("header-div");
var clicks = 0;

answerSpace.style.display = "none";

var possibleQuestions = [
    {
        question: "Blah, blah",
        options: ["Blah1", "Blah2", "Blah3", "Blah4"],
        correctAnswer: "Blah1"
    }
]













function startTimer(start) {
    if (start === 0) {
        console.log("The timer is starting.")
    } else if (start === 1) {
        console.log("The timer has stopped");
    }
}


function setQuestion() {
    answerSpace.style.display = "initial";
    console.log("A question goes here.")
}


function processAnswer() {
    console.log("Your answer is being processed.")
}




progressBtn.addEventListener("click", function () {
    headerHide.style.display = "none";
    progressBtn.style.display = "none";
    clicks++;
    percent = clicks * 10;
    document.querySelector(".progress-bar").style.width = `${percent}%`;

    if (clicks === 1) {
        startTimer(0);
    }
    if (clicks < 11) {
        setQuestion();
    }

    if (clicks > 1 && clicks < 12) {
        processAnswer();
    }

    if (clicks === 11) {
        progressBtn.style.display = "initial";
        progressBtn.textContent = "Take quiz again!";
        alert("You have completed the quiz! Continue to learn your score.")
        startTimer(1);
        clicks = 0;
    }
    console.log(clicks);
    return clicks;
})