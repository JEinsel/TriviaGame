var question = 0
var timerTime = 15
var title = document.getElementById('title')
var question = document.getElementById('question')
var answerOne = document.getElementById('answerOne')
var answerTwo = document.getElementById('answerTwo')
var answerThree = document.getElementById('answerThree')
var answerFour = document.getElementById('answerFour')



// $("#timer").html(timerTime)
document.getElementById('timer').innerHTML = timerTime

var timeInterval = window.setInterval(function () {
    /// call your function here
    timerTime--
    document.getElementById('timer').innerHTML = timerTime
    question.innerHTML = `Test`
    if (timerTime === 0) {
        clearTimeout(timeInterval)
    }
}, 1000);

function update() {
    if (question === 0) {

        // title.innerHTML = `Welcome to a art trivia game!`
        // question.text = `What year was the Mona Lisa painted?`
        // document.getElementById('question').innerHTML = What
        question.innerHTML = `Test`

    }
}