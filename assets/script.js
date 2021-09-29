// create var for current question index variable  " equal to 0"
var timer= 40
var timerElement= document.getElementById("timer")

var startButton= document.getElementById("startButton")
//  use equal to 0 with increase by 1 increment to move on to next question 
var currentIndex= 0
// create var that has array of objects, inside objects include key value pairs (questions to ask)
var questionBox= [
    {
        question: "what is iron mans real name", 
        choices: [
            "jerome","manuel","tony stark","donald",

        ],
        answer: "tony stark",
    },
    {
        question: "what is Captain America's shield made of?", 
        choices: [
            "vibranium", "adamantium", "norse steel", ""
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
]
// create choices (a.b,c,d)

// include answers 


// function must be made to start the quiz/ also start the countdown at same time. 
function startQuiz(){
    
    var countdown= setInterval(function(){
        timer-- 
        timerElement.textContent= timer +
        "seconds left"
        if   (timer===0){
        
        clearInterval(countdown)

    }
    }, 1000) 
    }
    // another function that gets the questions we want to ask from variable we created on line 3
function displayQuestions(){
    //target our question by current index number, with array of objects, be able to loop through all objects in our array and isplay one question at a time, using index number! dynamically create buttons for each choice. display question function wil be inside of our start quiz function. 
    
}

// new function made to read if answer is wrong, if answer wrong, less time for quiz, will display the next question once answered

// another function showing end highscore if all questions answered and/or if timer ends
startButton.addEventListener("click", startQuiz)

