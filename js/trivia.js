// Global Vars If Needed
var livesUpdates = 4;
var cAnswer = ''
var scoreUpdated = 00;




// ----- D O M -----   
const score = document.querySelector('.score');
const scoreBoard = document.querySelector('.scoreBoard');
const lives = document.querySelector('.lives');
const start = document.querySelector('.start');
const shuffle = document.querySelector('.shuffle');
const minusFive = document.querySelector('.minusFive');
const plusTen = document.querySelector('.plusTen');
const question = document.querySelector('.question');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const answers = document.querySelectorAll('.answer');
const trivia = [{
    question: "What other names there is for Mardi Gras ?",
    answers: ["Fat Tuesday", " Lazy Sunday", "Tiny Saturday", "Sweet Friday"],
    correctAnswer: "Fat Tuesday"
}, {
    question: "What states recognize Fat Tuesday as a holiday ?",
    answers: ["California, Los Angelos", "Texas", "North Dakota", "Louisiana, Alabama"],
    correctAnswer: "Louisiana, Alabama"
}, {
    question: "What does gold signify during Mardi Gras ?",
    answers: ["Education", "Power", "Family", "Sickness"],
    correctAnswer: "Power"
}, {
    question: " Is New Orleans the only place Mardi Gras is celebrated ?",
    answers: ["Absolutely not", "Of Course", "Florida As Well", "New York As Well"],
    correctAnswer: "Absolutely not"
}, {
    question: "What does purple signify during Mardi Gras?",
    answers: ["Invisibility", "Justice", "Love", "Peace"],
    correctAnswer: "Justice"
}, {
    question: "Who is the mayor of New Orleans Now? ?",
    answers: ["LaToya Cantrell", "Adam Sandler", "Ashton Kutcher", "Jennifer Lopez"],
    correctAnswer: "LaToya Cantrell"
}, {
    question: "What song is the anthem of Mardi Gras in New Orleans ?",
    answers: ["Back in Black", "High Way to Hell", "Thunder", "If I Cease to Love"],
    correctAnswer: "If I Cease to Love"
}, {
    question: "Bacchus is the Roman god of what ?",
    answers: ["Nature", "Power", "Water", "Wine"],
    correctAnswer: "Wine"
}, {
    question: "Where was the first known carnival celebration ?",
    answers: ["Far Australia", "Big Asia", "Nice, France", "Great Cambodia"],
    correctAnswer: "Nice, France"
}, {
    question: "What day comes after Mardi Gras ?",
    answers: ["Lame Monday", "Ash Wednesday", "Good Thursday", "Lazy Sunday"],
    correctAnswer: "Ash Wednesday"
}]




// ----- Event Listerers -----
answers.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.innerText == cAnswer) {
            nextQuestion()
        } else {
            wrongAnswer(answer)
        }
    })
})
start.addEventListener('click', () => {
    window.close()
})

shuffle.addEventListener('click', () => {
    randomQuestion()
})


// ----- Functions -----

const randomQuestion = function () {
    answers.forEach(answer => {
        answer.style.color = 'black'
    })

    let rndQuestions = Math.floor(Math.random() * trivia.length)
    let rndQuestion = trivia[rndQuestions].question;
    let questionAnswer = trivia[rndQuestions].answers;
    let correctAnswer = trivia[rndQuestions].correctAnswer;


    question.innerText = rndQuestion
    answer1.innerText = questionAnswer[0]
    answer2.innerText = questionAnswer[3]
    answer3.innerText = questionAnswer[2]
    answer4.innerText = questionAnswer[1]
    cAnswer = correctAnswer;
}
randomQuestion()

const nextQuestion = function () {
    showScoreChange(plusTen)
    scoreUpdated += 10;
    score.innerText = scoreUpdated
    if (scoreUpdated >= 100) {
        gameOver(scoreUpdated)
    } else {
        randomQuestion()
    }
}

const showScoreChange = function (score) {
    score.style.display = 'block'
    setTimeout(() => {
        score.style.display = 'none'
    }, 350)
}

const gameOver = function (passedScore) {
    scoreBoard.style.display = 'block'
    scoreBoard.innerHTML = `GAME OVER!<br> Your Score is : <span style="color: blue;"> ${passedScore}</span><br> Lives Left : <span style="color: blue;"> ${livesUpdates}</span><br>Thank you for your time.<br>Have a great day!`
    scoreUpdated = 0;
    livesUpdates = 4;
    score.innerText = '00'
    lives.innerText = '04';
    answers.forEach(answer => {
        answer.style.color = 'black'
    })

}

const wrongAnswer = function (answer) {
    answer.style.color = 'red'
    showScoreChange(minusFive)
    scoreUpdated -= 5;
    livesUpdates -= 1
    score.innerText = scoreUpdated;
    lives.innerText = livesUpdates;
    if (scoreUpdated <= 0) {
        gameOver(scoreUpdated)
    } else if (livesUpdates <= 0) {
        gameOver(scoreUpdated)
    }
}

const slideLeft = function (e, t = 2) {
    e.style.animation = `slideLeft ${t}s ease`
}

const slideRight = function (e, t = 2) {
    e.style.animation = `slideRight ${t}s ease`
}
const fadeIn = function (e, t = 2) {
    e.style.animation = `fadeIn ${t}s ease`
}



// ----- Functions Excution -----

//  + JQuery animations
$("document").ready(function () {
    $('.question').hide().fadeIn(1500)
    slideLeft(answer1, 1)
    slideLeft(answer3, 1)
    slideRight(answer2, 1)
    slideRight(answer4, 1)
})