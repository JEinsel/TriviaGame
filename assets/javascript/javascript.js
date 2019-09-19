var questionBody = 0
var timerTime = 15
var correct = 0
var wrong = 0
// var counter = 0

var timeInterval = window.setInterval(function () {
    timerTime--
    document.getElementById('timer').innerHTML = timerTime

    if (timerTime === 0 && questionBody === 0) {
        console.log("Test")
        clearTimeout(timeInterval)
    } else if (timerTime === 0 && questionBody === 11) {
        console.log("Test")
        alert("Number of correct guesses " + correct + " Number of wrong guesses " + wrong)
        clearTimeout(timeInterval)
    }
    else if (timerTime === 0 && questionBody !== 0) {
        questionBody++
        timerTime = 15
        wrong++
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
        question.innerHTML = `1. Who painted the mona Lisa?`
        answerOne.innerHTML = `Leonardo da Vinci`
        answerTwo.innerHTML = `Giovanni Bellini`
        answerThree.innerHTML = `Pablo Picasso`
        answerFour.innerHTML = `Giovanni Bellini`
    }
    else if (questionBody === 2) {
        question.innerHTML = `2. How many paintings did Vincent Van Gogh sell?`
        answerOne.innerHTML = `52`
        answerTwo.innerHTML = `900`
        answerThree.innerHTML = `26`
        answerFour.innerHTML = `1`
    }
    else if (questionBody === 3) {
        question.innerHTML = `3. Who painted 'The Scream'`
        answerOne.innerHTML = `Otto Meuller`
        answerTwo.innerHTML = `Edvard Munch`
        answerThree.innerHTML = `Wassily Kandinsky`
        answerFour.innerHTML = `Vincent Van Gogh`
    }
    else if (questionBody === 4) {
        question.innerHTML = `4. Who painted the ceiling of the Sistine Chapel?`
        answerOne.innerHTML = `Michelangelo`
        answerTwo.innerHTML = `Raphael`
        answerThree.innerHTML = `Sandro Botticelli`
        answerFour.innerHTML = `Ambrogio Lorenzetti`
    }
    else if (questionBody === 5) {
        question.innerHTML = ` 5.What artist sold a portrait of Leonardo DiCaprio for more than $1 million?`
        answerOne.innerHTML = `Evan Penny`
        answerTwo.innerHTML = `Bernard Pras`
        answerThree.innerHTML = `Elizabeth Peyton`
        answerFour.innerHTML = `Nikki Rosato`
    }
    else if (questionBody === 6) {
        question.innerHTML = `6. How old is the earliest known human artwork?`
        answerOne.innerHTML = `1.84 million years old.`
        answerTwo.innerHTML = `100,000 years old.`
        answerThree.innerHTML = `27,000 years old.`
        answerFour.innerHTML = `6,000 years old.`
    }
    else if (questionBody === 7) {
        question.innerHTML = `7. How long did it take Leonardo da Vinci to paint the Mona Lisa's lips?`
        answerOne.innerHTML = `12 weeks`
        answerTwo.innerHTML = `12 months`
        answerThree.innerHTML = `12 years`
        answerFour.innerHTML = `12 days`
    }
    else if (questionBody === 8) {
        question.innerHTML = `8. Vermillion is a shade of what color?`
        answerOne.innerHTML = `Yellow`
        answerTwo.innerHTML = `Blue`
        answerThree.innerHTML = `Green`
        answerFour.innerHTML = `Red`
    }
    else if (questionBody === 9) {
        question.innerHTML = `9. Any color plus white is a ___`
        answerOne.innerHTML = `Value`
        answerTwo.innerHTML = `Tone`
        answerThree.innerHTML = `Tint`
        answerFour.innerHTML = `Shade`
    }
    else if (questionBody === 10) {
        question.innerHTML = `What artist's work has been stolen more then any other's?`
        answerOne.innerHTML = `Pablo Picasso`
        answerTwo.innerHTML = `Leonardo Da Vinci`
        answerThree.innerHTML = `Rembrandt`
        answerFour.innerHTML = `Edvard Munch`
    }
    else if (questionBody === 11) {
        question.innerHTML = `Do you want to play again?`
        answerOne.innerHTML = `Play again.`
        answerTwo.innerHTML = ` `
        answerThree.innerHTML = ` `
        answerFour.innerHTML = ` `
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
            timerTime = 15
            setInterval(timeInterval, 1000)
            questionBody++
            update()
            break;
        case 1:
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
            correct++
            break;
        case 2:
            timerTime = 15
            questionBody++
            update()
            break;

        case 3:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 4:
            correct++
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
        case 5:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 6:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 7:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 8:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 9:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 10:
            correct++
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
        case 11:
            questionBody = 0
            update()
        default:
            break;
    }

})

$(document).on("click", "#answer2", function () {
    switch (questionBody) {
        case 1:
            wrong++
            wrongAnswer()
            questionBody++
            update()
            break;
        case 2:
            wrongAnswer()
            wrong++
            update()
            break
        case 3:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 4:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 5:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 6:
            correct++
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
        case 7:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 8:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 9:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 10:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 11:
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
            timerTime = 15
            questionBody++
            update()
            break
        case 3:
            correctAnswer()
            correct++
            timerTime = 15
            questionBody++
            update()
        case 4:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 5:
            correct++
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
        case 6:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 7:
            correct++
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
        case 8:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 9:
            correct++
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
        case 10:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 11:
        default:
            break;
    }
})

$(document).on("click", "#answer4", function () {
    switch (questionBody) {
        case 1:
            wrongAnswer()
            questionBody++
            wrong++
            update()
            break;
        case 2:
            correct++
            timerTime = 15
            questionBody++
            update()
            break
        case 3:
            wrongAnswer()
            wrong++
            timerTime = 15
            questionBody++
            update()
        case 4:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 5:
            timerTime = 15
            questionBody++
            update()
        case 6:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 7:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 8:
            correct++
            correctAnswer()
            timerTime = 15
            questionBody++
            update()
        case 9:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 10:
            wrong++
            wrongAnswer()
            timerTime = 15
            questionBody++
            update()
        case 11:
        default:
            break;
    }
})