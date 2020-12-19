var progressBtn = document.querySelector("button");
var progressBarPercent = document.querySelector(".progress-bar").style.width;

var clicks = 0;

progressBtn.addEventListener("click", function () {
    clicks ++;
    percent = clicks * 10;
    document.querySelector(".progress-bar").style.width = `${percent}%`;
    if (clicks === 11) {
        alert("You have completed the quiz! Continue to learn your score.")
        scorepage();
    }
    console.log(clicks);
    console.log(progressBarPercent);
    return clicks;
})