// create var for current question index variable  " equal to 0"
var timer = 0;
var startButton = document.getElementById("answerButton");
//  use equal to 0 with increase by 1 increment to move on to next question 
var score = 0;
var currentIndex = 0;
var interval = "";
// create var that has array of objects, inside objects include key value pairs (questions to ask)
var questionList = [
    {
        question: "what is iron mans real name",
        choices: [
            "jerome", "manuel", "tony stark", "donald",

        ],
        answer: "tony stark",
    },
    {
        question: "what is Captain America's shield made of?",
        choices: [
            "vibranium", "adamantium", "norse steel", "wood"
        ],
        answer: "vibranium",
    },
    {
        question: "what power does professor x have?",
        choices: [
            "flight", "mind control", "super strength", "cellular reproduction"
        ],
        answer: "mind control"
    },
];
// create choices (a.b,c,d)

// include answers 


// function must be made to start the quiz/ also start the countdown at same time. 
function startTimer(duration) {
    timer = duration;
    var minutes = 0;
    var seconds = 0;
    var timerElement = document.getElementById("timer");
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerElement.textContent = `${minutes}:${seconds}`;
        if (timer > 0) {
            timer--
        }
    }, 1000);
}

// another function that gets the questions we want to ask from variable we created on line 3
function showQuestions() {
    var currentQuestion = questionList[currentIndex];
    console.log("reached questions");
    var temp = `
    <container>
    <div id="question"> Question#${currentIndex} </div>

    <div id="question">${currentQuestion.question}</div>
    <div id="answer-buttons" class="btn-grid">
      <button onclick="answerQuestion('${currentQuestion.choices[0]}')" id="answerButton" class="btn">${currentQuestion.choices[0]}</button>
      <button onclick="answerQuestion('${currentQuestion.choices[1]}')" id="answerButton" class="btn">${currentQuestion.choices[1]}</button>
      <button onclick="answerQuestion('${currentQuestion.choices[2]}')" id="answerButton" class= "btn">${currentQuestion.choices[2]}</button>
      <button onclick="answerQuestion('${currentQuestion.choices[3]}')" id="answerButton" class="btn">${currentQuestion.choices[3]}</button>
    </div>
    </container>`;

    document.getElementById("questionContainer").innerHTML = temp;
}
// everytime the user answers the question correctly, their time is safe however everytime they answer wrong, their time is deducted from the timer.
function answerQuestion(answer) {
    var currentQuestion = questionList[currentIndex];
    var isCorrect = (answer == currentQuestion.answer);
    if (isCorrect) {
        score++;
    }
    else {
        timer -= 30;
    }

    currentIndex++;
    if (currentIndex >= questionList.length) {
        document.getElementById('questionContainer').innerHTML = `${score}/${questionList.length}`;
        clearInterval(interval);
        window.localStorage.setItem('score',score)
        document.getElementById('lastScore').innerHTML = `Last Score: ${score}`;
    }
    else {
        document.getElementById('questionContainer').innerHTML = `
        <div> That answer was ${isCorrect} </div>
        <button id="answerButton" onclick="showQuestions()" class="btn">Next Question</button>
        `;
    }
}

function startQuiz() {
    console.log('starting...');
    startTimer(60 * 5);
    showQuestions();
}
if(window.localStorage.getItem('score') !== null){
    
    document.getElementById('lastScore').innerHTML = `Last Score: ${window.localStorage.getItem('score')}`;
}
// new function made to read if answer is wrong, if answer wrong, less time for quiz, will display the next question once answered

// another function showing end highscore if all questions answered and/or if timer ends
startButton.addEventListener("click", startQuiz);

