var questionBody = 0
var timerTime = 5
var correct = 0
var wrong = 0
// var counter = 0
 
var timeInterval = window.setInterval(function () {
                timerTime--
                document.getElementById('timer').innerHTML = timerTime
                
                if (timerTime === 0 && questionBody ===0) {
                    console.log("Test")
                    clearTimeout(timeInterval)
                }
                 else if (timerTime === 0 && questionBody !== 0) {
                    questionBody++
                    timerTime = 15
                    update()
                }
            }, 1000);


// var timeInterval

// var questionArr = [
//     {
//         q: "Who painted the Mona Lisa?",
//         a: "Leonardo da Vinci",
//         c: ["Giovanni Bellini", "Pablo Picasso"]
//     },
//     {
//         q: "How any paintings did Vincent Van Gogh sell?",
//         a: "1",
//         c: ["52", "900", "26", "1"]
//     }
// ]

var title = document.getElementById('title')
var question = document.getElementById('question')
var answerOne = document.getElementById('answer1')
var answerTwo = document.getElementById('answer2')
var answerThree = document.getElementById('answer3')
var answerFour = document.getElementById('answer4')


function correctAnswer() {
    alert("Correct!")
}

function wrongAnswer() {
    alert("Wrong!")
}


// $("#timer").html(timerTime)
document.getElementById('timer').innerHTML = timerTime

// var timeInterval = window.setInterval(function () {
//     timerTime--
//     document.getElementById('timer').innerHTML = timerTime
//     if (timerTime === 0) {
//         clearTimeout(timeInterval)
//     }
// }, 1000);

function update() {
    if (questionBody === 0) {

        // title.innerHTML = `Welcome to a art trivia game!`
        // question.text = `What year was the Mona Lisa painted?`
        // document.getElementById('question').innerHTML = What
        question.innerHTML = `Test`

    }
    else if (questionBody === 1) {
        question.innerHTML = `Who painted the mona Lisa?`
        answerOne.innerHTML = `Leonardo da Vinci`
        answerTwo.innerHTML = `Giovanni Bellini`
        answerThree.innerHTML = `Pablo Picasso`
        answerFour.innerHTML = `Giovanni Bellini`
    }
    else if (questionBody === 2) {
        question.innerHTML = `How many paintings did Vincent Van Gogh sell?`
        answerOne.innerHTML = `52`
        answerTwo.innerHTML = `900`
        answerThree.innerHTML = `26`
        answerFour.innerHTML = `1`
    }
    else if (questionBody === 3) {
        question.innerHTML = ``
        answerOne.innerHTML = ``
        answerTwo.innerHTML = ``
        answerThree.innerHTML = ``
        answerFour.innerHTML = ``
    }
    else if (questionBody === 4) {
        question.innerHTML = ``
        answerOne.innerHTML = ``
        answerTwo.innerHTML = ``
        answerThree.innerHTML = ``
        answerFour.innerHTML = ``
    }
    else if (questionBody === 5) {
        question.innerHTML = ``
        answerOne.innerHTML = ``
        answerTwo.innerHTML = ``
        answerThree.innerHTML = ``
        answerFour.innerHTML = ``
    }
    else if (questionBody === 6) {
        question.innerHTML = ``
        answerOne.innerHTML = ``
        answerTwo.innerHTML = ``
        answerThree.innerHTML = ``
        answerFour.innerHTML = ``
    }
    else if (questionBody === 7) {
        question.innerHTML = ``
        answerOne.innerHTML = ``
        answerTwo.innerHTML = ``
        answerThree.innerHTML = ``
        answerFour.innerHTML = ``
    }

}

// function startTimer() {
//     timeInterval = setInterval(function () {
//         timerTime--
//         document.getElementById('timer').innerHTML = timerTime
//         console.log(timerTime);

//         if (timerTime===0){
//             counter++
//             timerTime=5
//             displayQuestion()
//         }
//     }, 1000)
// }

// function displayQuestion() {
//     clearInterval(timeInterval)
//     question.innerHTML = questionArr[counter].q
//     var choices = questionArr[counter].c
//     for (let i = 0; i < choices.length; i++) {
//         const element = choices[i];
//         let idNum = Number(i) + 1
//         let selector = "#answer" + idNum
//         $(selector).text(element)
//     }
//     startTimer()
// }

$(document).on("click", "#start", function () {
    startTimer()
    // timeInterval = window.setInterval(function () {
    //     timerTime--
    //     document.getElementById('timer').innerHTML = timerTime
    //     if (timerTime === 0) {
    //         clearTimeout(timeInterval)
    //         counter++
    //         timerTime = 5
    //         document.getElementById('timer').innerHTML = timerTime
    //         displayQuestion()
    //     }
    // }, 1000);

    displayQuestion()

})

// function ifTimer() {
//     if (timerTime === 0) {
//         clearTimeout(timeInterval)
//         timerTime = 15
//         questionBody++
//         update()
//     }
// }

// setInterval(ifTimer(), 1000);

// setInterval(function () {
//     console.log("1000 ms")
//     switch (timerTime) {
//         case 0:
//             clearTimeout(timeInterval)
//             timerTime = 15
//             questionBody++
//             update()
//             break;

//         default:
//             break;
//     }

// }, 1000)

$(document).on("click", "#answer1", function () {
    console.log("Button one clicked")

    switch (questionBody) {
        case 0:
            // var timeInterval = window.setInterval(function () {
            //     timerTime--
            //     document.getElementById('timer').innerHTML = timerTime
            //     if (timerTime === 0) {
            //         clearTimeout(timeInterval)
            //         question++
            //         timerTime = 15
            //         update()
            //     }
            // }, 1000);
            timerTime=15
            setInterval(timeInterval,1000)
            questionBody++
            update()
            break;
        case 1:
            correctAnswer()
            timerTime = 15
            questionBody++
            correct++
            update()
            break;
        case 2:

            break;

        case 3:

        case 4:

        case 5:

        case 6:

        case 7:

        case 8:

        case 9:

        case 10:

        case 11:

        case 12:

        case 13:

        case 14:

        case 15:
        default:
            break;
    }

})

$(document).on("click", "#answer2", function () {
    switch (questionBody) {
        case 1:
            questionBody++
            wrong++
            update()
            break;


        case 2:
            wrongAnswer()
            break
        case 3:

        case 4:

        case 5:

        case 6:

        case 7:

        case 8:

        case 9:

        case 10:

        case 11:

        case 12:

        case 13:

        case 14:

        case 15:

        default:
            break;
    }
})

$(document).on("click", "#answer3", function () {
    switch (questionBody) {
        case 1:
            questionBody++
            wrong++
            update()
            break;


        case 2:
            break
        case 3:

        case 4:

        case 5:

        case 6:

        case 7:

        case 8:

        case 9:

        case 10:

        case 11:

        case 12:

        case 13:

        case 14:

        case 15:
        default:
            break;
    }
})

$(document).on("click", "#answer4", function () {
    switch (questionBody) {
        case 1:
            questionBody++
            wrong++
            update()
            break;


        case 2:
            correct++

            break
        case 3:

        case 4:

        case 5:

        case 6:

        case 7:

        case 8:

        case 9:

        case 10:

        case 11:

        case 12:

        case 13:

        case 14:

        case 15:

        default:
            break;
    }
})