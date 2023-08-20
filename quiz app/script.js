const quizContainer = document.getElementById("quiz");
const SubmitContainer = document.getElementById("submit");
const resultContainer = document.getElementById("result");

const myQuestions = [ //object in array
    {
        question: "what is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "New York"
        },
        correctAnswer: "a"
    },
    {
        question: "what is the largest country in the world?",
        answers: {
            a: "Russia",
            b: "Chine",
            c: "United States"
        },
        correctAnswer: "a"
    },
    {
        question: "what is the currency of Japan?",
        answers: {
            a: "Yuan",
            b: "Euro",
            c: "Yen"
        },
        correctAnswer: "c"
    }
];

function buildQuiz(){
    const output = []

    myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = []
            for(letter in currentQuestion.answers){//answers denoted keys
                answers.push(`<label><input type="radio" name="question${questionNumber}" value="${letter}"/>
                    ${letter}:${currentQuestion.answers[letter]}</label>`
                )
            }
            console.log(answers);
            output.push(`<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
            ) 
    })
   //console.log(output);
   quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        //find selectsd answer
        const answerContainer = answerContainers[questionNumber] //which that user has selected it not a answerContainers
       const selector =  `input[name=question${questionNumber}]:checked` //css concept:whatever given answer
       const userAnswer = (answerContainer.querySelector(selector) || {}).value
       if(userAnswer == currentQuestion.correctAnswer){
        numCorrect++
       }else{
        answerContainers[questionNumber].style.color = 'red'
       }
    })
    resultContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
}

buildQuiz();

SubmitContainer.addEventListener("click", showResults); //without parenthis because run thodi na karanahe just reference dena he