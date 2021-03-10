// Global Vars If Needed
var livesUpdates = 4;
var cAnswer = ''
var scoreUpdated = 00;




// ----- D O M -----   
const score = document.querySelector('.score');
const lives = document.querySelector('.lives');
const start = document.querySelector('.start');
const question = document.querySelector('.question');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const answers = document.querySelectorAll('.answer');
const trivia = [{
    question: "What is Mardi Gras ?",
    answers: ["hfghfgh one", "Mardi Gras", "sdfsdf three", "answer four"],
    correctAnswer: "Mardi Gras"
}, {
    question: "How much does it cost to enter ?",
    answers: ["jkyhfg one", "Gras Mardi", "answrtyrtyer three", "uykyterg four"],
    correctAnswer: "Gras Mardi"
}, {
    question: "Where is Mardi Gras ?",
    answers: ["hjkjkh one", "Holy Mary", "gdfdf three", "iolli four"],
    correctAnswer: "Holy Mary"
}, {
    question: "when is Mardi Gras ?",
    answers: ["sdsdccs one", "Magic", "bvcfggfh three", "gngf four"],
    correctAnswer: "Magic"
}, {
    question: "Who started Mardi Gras ?",
    answers: ["nngfhfhg one", "Spell", "jtgjhfgh three", "mjgdf four"],
    correctAnswer: "Spell"
}, {
    question: "Who is the mayor of New Orleans Now? ?",
    answers: ["fssd one", "Snake", "sdfdfsas three", "dsdsf four"],
    correctAnswer: "Snake"
}, {
    question: "What is the most common colors in Mardi Gras ?",
    answers: ["jghjgh one", "Binky", "kuyjkhfgh three", "xcvdgf four"],
    correctAnswer: "Binky"
}, {
    question: "How long does Mardi Gras last ?",
    answers: ["zxczc one", "Moody", "sddsfrew three", "sdgytr four"],
    correctAnswer: "Moody"
}, {
    question: "Who is welcomed to Mardi Gras ?",
    answers: ["gfddfg one", "Everyone", "fsdfsd three", "kyutr four"],
    correctAnswer: "Everyone"
}, {
    question: "When was the last Mardi Gras ?",
    answers: ["weqeq one", "March 2020", "ytjjfd three", "answer four"],
    correctAnswer: "March 2020"
}]


// ----- Functions -----

const randomQuestion = function () {
    answers.forEach(answer => {answer.style.color = 'black'})

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


const nextQuestion = function () {

    scoreUpdated += 10;
    score.innerText = scoreUpdated
    randomQuestion()
}

const gameOver = function () {
  
    scoreUpdated = 0;
    livesUpdates = 4;
    score.innerText = '00'
    lives.innerText = '04';
   answers.forEach(answer => {answer.style.color = 'black'})
   alert('Game Over')
}

const wrongAnswer = function (answer) {
    answer.style.color = 'red'
    scoreUpdated -= 5;
    livesUpdates -=1
    score.innerText = scoreUpdated;
    lives.innerText = livesUpdates;
    if (scoreUpdated <= 0 || livesUpdates <= 0) {
        gameOver()
        console.log('gameover Triggered')
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